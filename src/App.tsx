import { useEffect, useMemo, useState } from 'react'
import { io, type Socket } from 'socket.io-client'
import './App.css'

type ConnectionState = 'connecting' | 'connected' | 'disconnected' | 'error'

interface TrackedLocation {
  deviceId: string
  latitude: number
  longitude: number
  timestamp: string
  accuracy?: number
  altitude?: number
  heading?: number
  speed?: number
}

interface TrackingAck {
  ok: boolean
  error?: string
}

const DEFAULT_SERVER = import.meta.env.VITE_TRACKING_URL ?? 'http://localhost:3000/tracking'

function formatNumber(value: number | undefined, unit = '', digits = 1) {
  return value === undefined ? '—' : `${value.toFixed(digits)}${unit}`
}

function App() {
  const [serverUrl, setServerUrl] = useState(DEFAULT_SERVER)
  const [deviceInput, setDeviceInput] = useState('truck-01')
  const [trackedDevice, setTrackedDevice] = useState('truck-01')
  const [status, setStatus] = useState<ConnectionState>('connecting')
  const [message, setMessage] = useState('กำลังเชื่อมต่อกับเซิร์ฟเวอร์ GPS')
  const [location, setLocation] = useState<TrackedLocation | null>(null)

  useEffect(() => {
    const socket: Socket = io(serverUrl, { reconnection: true })

    const subscribe = () => {
      socket.emit('tracking:subscribe', { deviceId: trackedDevice }, (ack: TrackingAck) => {
        if (ack.ok) {
          setMessage(`กำลังติดตาม ${trackedDevice}`)
        } else {
          setStatus('error')
          setMessage(ack.error ?? 'ไม่สามารถติดตามอุปกรณ์ได้')
        }
      })
    }

    socket.on('connect', () => {
      setStatus('connected')
      subscribe()
    })
    socket.on('disconnect', () => {
      setStatus('disconnected')
      setMessage('การเชื่อมต่อถูกตัด ระบบจะลองใหม่อัตโนมัติ')
    })
    socket.on('connect_error', () => {
      setStatus('error')
      setMessage('เชื่อมต่อไม่ได้ — ตรวจสอบว่า GPS server ทำงานที่พอร์ต 3000')
    })
    socket.on('location:updated', (nextLocation: TrackedLocation) => {
      setLocation(nextLocation)
      setMessage(`รับตำแหน่งล่าสุดจาก ${nextLocation.deviceId}`)
    })

    return () => {
      socket.emit('tracking:unsubscribe', { deviceId: trackedDevice })
      socket.disconnect()
    }
  }, [serverUrl, trackedDevice])

  const mapUrl = useMemo(() => {
    const lat = location?.latitude ?? 13.7563
    const lng = location?.longitude ?? 100.5018
    const span = 0.012
    const bbox = `${lng - span},${lat - span},${lng + span},${lat + span}`
    return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lng}`
  }, [location])

  const startTracking = (event: React.FormEvent) => {
    event.preventDefault()
    const nextDevice = deviceInput.trim()
    if (nextDevice) {
      setLocation(null)
      setTrackedDevice(nextDevice)
    }
  }

  const time = location
    ? new Intl.DateTimeFormat('th-TH', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(location.timestamp))
    : 'รอข้อมูลตำแหน่งแรก'

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-mark" aria-hidden="true">⌖</div>
        <div>
          <h1>GPS Tracking</h1>
          <p>ติดตามตำแหน่งอุปกรณ์แบบเรียลไทม์</p>
        </div>
        <div className={`status-pill ${status}`}>
          <span />
          {status === 'connected' ? 'เชื่อมต่อแล้ว' : status === 'connecting' ? 'กำลังเชื่อมต่อ' : 'ไม่ได้เชื่อมต่อ'}
        </div>
      </header>

      <section className="control-card">
        <form onSubmit={startTracking}>
          <label>
            Device ID
            <input value={deviceInput} onChange={(event) => setDeviceInput(event.target.value)} placeholder="เช่น truck-01" />
          </label>
          <label className="server-field">
            Tracking server
            <input value={serverUrl} onChange={(event) => setServerUrl(event.target.value)} />
          </label>
          <button type="submit">ติดตามอุปกรณ์</button>
        </form>
        <p className="connection-message">{message}</p>
      </section>

      <section className="dashboard-grid">
        <article className="map-card">
          <div className="card-heading">
            <div>
              <span className="eyebrow">LIVE LOCATION</span>
              <h2>{trackedDevice}</h2>
            </div>
            <a href={location ? `https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}` : '#'} target="_blank" rel="noreferrer">
              เปิดแผนที่ ↗
            </a>
          </div>
          <div className="map-wrap">
            <iframe title="ตำแหน่ง GPS บนแผนที่" src={mapUrl} />
            {!location && <div className="map-placeholder"><strong>รอข้อมูล GPS</strong><span>ตำแหน่งจะแสดงทันทีเมื่ออุปกรณ์ส่งข้อมูล</span></div>}
          </div>
        </article>

        <aside className="details-card">
          <span className="eyebrow">ข้อมูลล่าสุด</span>
          <h2>รายละเอียดตำแหน่ง</h2>
          <div className="coordinate-box">
            <div><span>LATITUDE</span><strong>{location?.latitude.toFixed(6) ?? '—'}</strong></div>
            <div><span>LONGITUDE</span><strong>{location?.longitude.toFixed(6) ?? '—'}</strong></div>
          </div>
          <dl className="metrics">
            <div><dt>ความแม่นยำ</dt><dd>{formatNumber(location?.accuracy, ' ม.')}</dd></div>
            <div><dt>ความเร็ว</dt><dd>{formatNumber(location?.speed, ' m/s')}</dd></div>
            <div><dt>ทิศทาง</dt><dd>{formatNumber(location?.heading, '°', 0)}</dd></div>
            <div><dt>ความสูง</dt><dd>{formatNumber(location?.altitude, ' ม.')}</dd></div>
          </dl>
          <div className="updated-at"><span>อัปเดตล่าสุด</span><strong>{time}</strong></div>
        </aside>
      </section>
    </main>
  )
}

export default App
