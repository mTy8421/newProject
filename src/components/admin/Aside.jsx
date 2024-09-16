import "../style/Aside.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlus,
  faBriefcase,
  faClockRotateLeft,
  faRightFromBracket,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  return (
    <>
      <div className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <Link
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
            to={"/admin"}
          >
            Admin
          </Link>
          {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
            <i className="mr-3"></i>New
          </button> */}
        </div>

        <nav className="text-white text-base font-semibold pt-3">
          <Link
            to={"/admin"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faHouse} />
            </i>
            หน้าหลัก
          </Link>

          <Link
            to={"/admin/editUser"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faUser} />
            </i>
            จักการผู้ใช้งาน
          </Link>

          <Link
            to={"/admin/add"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faPlus} />
            </i>
            เพิ่มภาระงาน
          </Link>

          {/* <Link
            to={"/admin/works"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faBriefcase} />
            </i>
            ภาระงานที่ได้รับมอบหมาย
          </Link> */}

          <Link
            to={"/admin/historys"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faClockRotateLeft} />
            </i>
            ประวัติการทำงาน
          </Link>

          <Link
            to={"/admin/approve"}
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="mr-3">
              <FontAwesomeIcon icon={faThumbsUp} />
            </i>
            อนุมัติภาระงาน
          </Link>
        </nav>

        <a
          href="/api/logout"
          className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        >
          <i className="mr-3">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </i>
          ออกจากระบบ
        </a>
      </div>
    </>
  );
}
