# GPS Tracking Dashboard

เว็บแดชบอร์ดสำหรับติดตามตำแหน่งอุปกรณ์ GPS แบบเรียลไทม์ พัฒนาด้วย React, TypeScript และ Vite โดยรับข้อมูลตำแหน่งผ่าน Socket.IO และแสดงผลบนแผนที่ OpenStreetMap

## ความสามารถหลัก

- ติดตามอุปกรณ์ด้วย `deviceId`
- แสดงสถานะการเชื่อมต่อกับ GPS server
- อัปเดตพิกัดแบบเรียลไทม์ผ่าน Socket.IO
- แสดงละติจูด ลองจิจูด ความแม่นยำ ความเร็ว ทิศทาง และความสูง
- แสดงวันและเวลาที่ได้รับตำแหน่งล่าสุด
- เปิดตำแหน่งปัจจุบันใน Google Maps
- รองรับการแสดงผลบนคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์มือถือ

## เทคโนโลยีที่ใช้

- React 19
- TypeScript
- Vite
- Socket.IO Client
- OpenStreetMap

## สิ่งที่ต้องมี

- Node.js เวอร์ชันที่รองรับ Vite 8
- npm
- GPS tracking server ที่รองรับ Socket.IO ตามรูปแบบ event ด้านล่าง

## การติดตั้ง

```bash
git clone <repository-url>
cd showGps
npm install
```

สร้างไฟล์ `.env` ที่โฟลเดอร์หลักของโปรเจกต์ หากต้องการกำหนด URL ของ tracking server:

```env
VITE_TRACKING_URL=http://localhost:3000/tracking
```

หากไม่กำหนดค่า ระบบจะใช้ `http://localhost:3000/tracking` โดยอัตโนมัติ

เริ่มเซิร์ฟเวอร์สำหรับพัฒนา:

```bash
npm run dev
```

จากนั้นเปิด URL ที่ Vite แสดงใน terminal โดยปกติคือ `http://localhost:5173`

## วิธีใช้งาน

1. ตรวจสอบว่า GPS tracking server ทำงานอยู่
2. กรอก `Device ID` ที่ต้องการติดตาม เช่น `truck-01`
3. ตรวจสอบหรือแก้ไข URL ของ tracking server
4. กดปุ่มติดตามอุปกรณ์
5. เมื่อ server ส่งข้อมูลเข้ามา แผนที่และรายละเอียดตำแหน่งจะอัปเดตแบบเรียลไทม์

## รูปแบบ Socket.IO API

Frontend เชื่อมต่อไปยัง URL ที่กำหนด และส่ง event ต่อไปนี้

### สมัครรับข้อมูลตำแหน่ง

Event: `tracking:subscribe`

```ts
{
  deviceId: 'truck-01'
}
```

Callback response:

```ts
{
  ok: true
}
```

กรณีเกิดข้อผิดพลาด:

```ts
{
  ok: false,
  error: 'ข้อความอธิบายข้อผิดพลาด'
}
```

### ยกเลิกการรับข้อมูลตำแหน่ง

Event: `tracking:unsubscribe`

```ts
{
  deviceId: 'truck-01'
}
```

### รับตำแหน่งล่าสุด

Event: `location:updated`

```ts
{
  deviceId: 'truck-01',
  latitude: 13.7563,
  longitude: 100.5018,
  timestamp: '2026-09-15T10:30:00.000Z',
  accuracy: 5,
  altitude: 12.4,
  heading: 90,
  speed: 8.5
}
```

ฟิลด์ `accuracy`, `altitude`, `heading` และ `speed` เป็น optional ส่วน `timestamp` ควรเป็นข้อความวันที่เวลาที่ JavaScript สามารถแปลงด้วย `Date` ได้

## คำสั่งที่มี

| คำสั่ง | รายละเอียด |
| --- | --- |
| `npm run dev` | เริ่ม development server พร้อม Hot Module Replacement |
| `npm run build` | ตรวจสอบ TypeScript และ build สำหรับ production |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |
| `npm run preview` | ทดลองเปิด production build ในเครื่อง |

## Build สำหรับ Production

```bash
npm run build
npm run preview
```

ไฟล์ที่ build แล้วจะอยู่ในโฟลเดอร์ `dist/`

## โครงสร้างโปรเจกต์

```text
showGps/
├── public/             # ไฟล์ static
├── src/
│   ├── assets/         # รูปภาพและ asset ของแอป
│   ├── App.tsx         # UI และการเชื่อมต่อ Socket.IO
│   ├── App.css         # สไตล์ของ dashboard
│   ├── index.css       # สไตล์พื้นฐานของหน้าเว็บ
│   └── main.tsx        # จุดเริ่มต้นของ React
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## หมายเหตุ

- แผนที่ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อโหลดข้อมูลจาก OpenStreetMap
- GPS server ต้องตั้งค่า CORS ให้ยอมรับ origin ของ frontend
- ค่า `speed` แสดงผลเป็นเมตรต่อวินาที (`m/s`)
- เมื่อการเชื่อมต่อหลุด Socket.IO จะพยายามเชื่อมต่อใหม่โดยอัตโนมัติ
