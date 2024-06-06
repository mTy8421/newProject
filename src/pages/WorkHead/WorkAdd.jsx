import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableWorkAdd from "./TableWorkAdd";

import ModalAddWork from "./Modal/ModalAddWork";

export default function WorkAdd() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container mt-3 ml-3 text-center">
        <h1 className="text-3xl font-semibold text-left">เพิ่มหัวข้อภาระงาน</h1>
        <ModalAddWork></ModalAddWork>
        <TableWorkAdd></TableWorkAdd>
      </div>
    </>
  );
}
