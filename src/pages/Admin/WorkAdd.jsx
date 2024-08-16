import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/admin/Aside";
import TableWorkAdd from "./Table/TableWorkAdd";

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

          <div className="mt-3 text-center">
            <h1 className="text-3xl font-semibold text-left">เพิ่มหัวข้อภาระงาน</h1>
            <ModalAddWork></ModalAddWork>
            <TableWorkAdd></TableWorkAdd>
          </div>

        </div>


      </div>
    </>
  );
}
