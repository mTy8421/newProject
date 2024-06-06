import { Link } from "react-router-dom";
import "../style/Aside.css";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col overflow-y-hidden sm:hidden">
        <div className="w-full bg-sidebar py-5 px-6">
          <div className="flex items-center justify-between">
            <Link
              to={"/head"}
              className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            >
              ระบบภาระงาน
            </Link>
            <button
              onClick={() => {
                setIsopen(!isOpen);
                console.log(isOpen);
              }}
              className="text-white text-3xl focus:outline-none"
            >
              <i className={isOpen ? "fas fa-time" : "fas fa-bar"}></i>
              onClick
            </button>
          </div>
          <nav className={isOpen ? "flex flex-col pt-4" : "hidden"}>
            <Link
              to={"/head"}
              className="flex items-center active-nav-link text-white py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              หน้าหลัก
            </Link>
            <Link
              to={"/headadd"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              เพิ่มหัวข้อภาระงาน
            </Link>
            <Link
              to={"headaddworks"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              เพิ่มภาระงาน
            </Link>
            <Link
              to={"/headworks"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              ภาระงาน
            </Link>
            <Link
              to={"/headhistorys"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              ประวัติการทำงาน
            </Link>
            <Link
              to={"/headapprove"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3"></i>
              อนุมัติภาระงาน
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
