import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableWorkAddDo from "./TableWorkAddDo";
import ModalAddWorkDo from "./Modal/ModalAddWorkDo";

export default function WorkAddDo() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container mt-3 ml-3 text-center">
        <h1 className="text-3xl font-semibold text-left">เพิ่มภาระงาน</h1>
        <ModalAddWorkDo></ModalAddWorkDo>
        <TableWorkAddDo></TableWorkAddDo>
      </div>
    </>
  );
}
