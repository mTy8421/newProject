import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableApprove from "./TableApprove";

export default function Approve() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container mt-3 ml-3">
        <h1 className="text-3xl font-semibold">อนุมติภาระงาน</h1>
        <TableApprove></TableApprove>
      </div>
    </>
  );
}
