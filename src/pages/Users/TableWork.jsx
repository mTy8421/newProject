import { useEffect, useState } from "react";

import ModalWork from "./ModalWork";

import axios from "axios";

const TableWork = () => {

  const [dataTable, setDataTable] = useState([])

  const update = async () => {
    await axios.post("api/users", {
      Name: 'testNew',
      Title: 'TitleNew',
    })
  }

  const table = async () => {
    const res = await axios.get("/api/users")
    setDataTable(res.data)
  }

  useEffect(() => {
    table()
  }, [])

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <button className="btn btn-info text-white" onClick={() => update()}>Test</button>
        <thead>
          <div className="container ml-2">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          <tr>
            <th>รหัสภาระงาน</th>
            <th>ชื่อภาระงาน</th>
            <th>ชื่อหัวข้อภาระงาน</th>
            <th>ตวจรสอบ</th>
          </tr>
        </thead>
        <tbody>

          {dataTable.map((value, key) =>
            <tr className="hover" key={key}>
              <th>{key}</th>
              <td>{value.Name}</td>
              <td>{value.Title}</td>
              <td>
                <ModalWork></ModalWork>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableWork;
