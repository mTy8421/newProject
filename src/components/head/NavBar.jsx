import { Link } from "react-router-dom";
import "../style/Aside.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faPlus,
  faBriefcase,
  faClockRotateLeft,
  faRightFromBracket,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

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
              หัวหน้าสำนักงาน
            </Link>
            <button
              onClick={() => {
                setIsopen(!isOpen);
                console.log(isOpen);
              }}
              className="text-white text-3xl focus:outline-none"
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          <nav className={isOpen ? "flex flex-col pt-4" : "hidden"}>
            <Link
              to={"/head"}
              className="flex items-center active-nav-link text-white py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faHouse} />
              </i>
              หน้าหลัก
            </Link>
            <Link
              to={"/head/add"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faPlus} />
              </i>
              เพิ่มภาระงาน
            </Link>

            <Link
              to={"/head/works"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faBriefcase} />
              </i>
              ภาระงานที่ได้รับมอบหมาย
            </Link>

            <Link
              to={"/head/historys"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </i>
              ประวัติการทำงาน
            </Link>

            <Link
              to={"/head/approve"}
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faThumbsUp} />
              </i>
              อนุมัติภาระงาน
            </Link>

            <a
              href="/api/logout"
              className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-itme"
            >
              <i className="mr-3">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </i>
              ออกจากระบบ
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
