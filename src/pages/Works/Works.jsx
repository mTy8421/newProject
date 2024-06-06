import NavBarProfile from "../../components/NavBarProfile";
import NavBar from "../../components/users/NavBar";
import Aside from "../../components/users/Aside";
import TableWork from "./TableWork";

export default function Works() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container mt-3 ml-3">
        <h1 className="text-3xl font-semibold">
          บัญชีรายชื่อภาระงานที่ต้องปฎิบัติ
        </h1>
        <TableWork></TableWork>
      </div>
    </>
  );
}
