import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableWorkAdd from "./Table/TableWorkAdd";
import TableWorkAddDo from "./Table/TableWorkAddDo";

import ModalAddWork from "./Modal/ModalAddWork";

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
            <h1 className="text-3xl font-semibold text-center">เพิ่มภาระงาน</h1>
            <div className="text-center mt-3">
              <ModalAddWork></ModalAddWork>
            </div>
            <TableWorkAdd></TableWorkAdd>
          </div>
        </div>
      </div>
    </>
  );
}
