import { Link } from "react-router-dom";

import logo from "./style/logo.png";

export default function NavBarProfile() {
  return (
    <>
      <nav
        className={`bg-white border-gray-200 dark:bg-base-100 drop-shadow-xl`}
      >
        <div className="hidden sm:flex flex-wrap items-center max-w-screen-xl p-8">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={logo}
              className="bg-[length:200px_100px]"
              alt="Flowbite Logo"
            />
          </Link>
          <h1 className="self-center text-2xl mx-auto font-semibold whitespace-nowrap dark:text-dark items-center">
            <button className="btn btn-ghost text-4xl">
              Support Staff Workload System
            </button>
          </h1>
        </div>
      </nav>
    </>
  );
}
