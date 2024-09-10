import NavBar from "../../components/admin/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/admin/Aside";
import TableEditUser from "./Table/TableEditUser";

import ModelAddUser from "./Modal/ModelAddUser";

export default function WorkAdd() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>

      <div className="grid grid-cols-12">
        <div className="sm:col-span-2">
          <div className="sticky top-0">
            <Aside></Aside>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-10">
          <div className="mt-4">
            <h1 className="text-3xl font-semibold text-center">
              จัดการผู้ใช้งาน
            </h1>
            <div className="text-center mt-3">
              <ModelAddUser></ModelAddUser>
            </div>
            <TableEditUser></TableEditUser>
          </div>
        </div>
      </div>
    </>
  );
}
