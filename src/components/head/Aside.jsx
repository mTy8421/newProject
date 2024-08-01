import React from "react";
import "../style/Aside.css";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      <div className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <Link
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            to={"/"}
          >
            หัวหน้างาน
          </Link>
          <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="mr-3"></i>New
          </button>
        </div>

        <nav className="text-white text-base font-semibold pt-3">
          <Link
            to={"/head"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            หน้าหลัก
          </Link>

          <Link
            to={"/head/add"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            เพิ่มหัวข้อภาระงาน
          </Link>

          <Link
            to={"/head/addworks"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            เพิ่มภาระงาน
          </Link>

          <Link
            to={"/head/works"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            ภาระงาน
          </Link>

          <Link
            to={"/head/historys"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            ประวัติการทำงาน
          </Link>

          <Link
            to={"/head/approve"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3"></i>
            อนุมัติภาระงาน
          </Link>
        </nav>

        <Link className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
          <i className="mr-3"></i>
          upgrade to pro
        </Link>
      </div>
    </>
  );
}
