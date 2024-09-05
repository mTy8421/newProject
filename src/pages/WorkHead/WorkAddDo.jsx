import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";

import TableWorkAddDo from "./Table/TableWorkAddDo";
import ModalAddWorkDo from "./Modal/ModalAddWorkDo";

export default function WorkAddDo() {
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
          <div className="mt-3">
            <h1 className="text-3xl font-semibold text-left">เพิ่มภาระงาน</h1>
            <div className="text-center">
              <ModalAddWorkDo></ModalAddWorkDo>
            </div>
            <TableWorkAddDo></TableWorkAddDo>
          </div>
        </div>
      </div>
    </>
  );
}
