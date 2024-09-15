import { useState, useEffect } from "react";
import axios from "axios";

const TableHistory = () => {
  // สร้าง state สำหรับจัดการข้อมูล, คำค้นหา, หน้า Pagination, และแถวที่ถูกเลือก
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const itemsPerPage = 5;

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของการค้นหา
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // รีเซ็ตกลับไปหน้าที่ 1 เมื่อค้นหาใหม่
  };

  const table = async () => {
    const res = await axios.get("/api/users/historyWork");
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    table();
  }, []);

  // ฟิลตร์ข้อมูลตามคำค้นหา (รองรับภาษาไทยและอังกฤษ)
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.toString().toLowerCase().includes(searchTerm.toUpperCase()) // เพิ่มเพื่อรองรับภาษาอังกฤษ
    )
  );

  // คำนวณจำนวนหน้า Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // ฟังก์ชันสำหรับดึงข้อมูลของหน้าปัจจุบัน
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนหน้า
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // ฟังก์ชันสำหรับจัดการการเลือกแถว
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // ฟังก์ชันสำหรับจัดการการเลือกแถวทั้งหมด
  const handleSelectAll = () => {
    if (selectedRows.length === currentData.length) {
      setSelectedRows([]); // ถ้าทั้งหมดถูกเลือกแล้ว จะทำการยกเลิกการเลือกทั้งหมด
    } else {
      setSelectedRows(currentData.map((item, index) => index)); // เลือกทั้งหมดที่อยู่ในหน้าปัจจุบัน
    }
  };

  // ฟังก์ชันสำหรับลบแถวที่ถูกเลือก
  const handleDeleteSelected = () => {
    const newData = data.filter((item, index) => !selectedRows.includes(index));
    setData(newData);
    setSelectedRows([]); // ล้างแถวที่ถูกเลือกหลังจากลบ
  };

  return (
    <div className="p-6">
      {/* <h2 className="text-2xl font-bold mb-4">Search Table with Pagination and Delete</h2> */}

      <div className="flex justify-between">
        {/* อินพุตสำหรับการค้นหา */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered w-full max-w-xs mb-4"
        />

        {/* ปุ่ม Delete สำหรับลบแถวที่ถูกเลือก */}
        <button
          onClick={handleDeleteSelected}
          className="btn btn-error mb-4 text-white"
          disabled={selectedRows.length === 0} // ปิดปุ่มถ้าไม่มีแถวที่ถูกเลือก
        >
          Delete Selected
        </button>
      </div>

      {/* ตารางที่แสดงข้อมูล */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={
                    selectedRows.length === currentData.length &&
                    currentData.length > 0
                  }
                  onChange={handleSelectAll}
                  className="checkbox"
                />
              </th>
              <th>#</th>
              <th>ชื่อภาระงาน</th>
              <th>เวลาในการทำงาน (นาที)</th>
              <th>เวลาที่ใช้ไป (นาที)</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.send_id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelect(index)}
                      className="checkbox"
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{item.detail_name}</td>
                  <td>{item.detail_time}</td>
                  <td>{item.send_time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="btn-group">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TableHistory;
