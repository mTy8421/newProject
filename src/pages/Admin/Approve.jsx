import NavBar from "../../components/admin/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/admin/Aside";
import TableApprove from "./Table/TableApprove";

export default function Approve() {
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

        <div className="mt-4 col-span-12 sm:col-span-10">
          <h1 className="text-3xl font-semibold text-center">อนุมติภาระงาน</h1>
          <TableApprove></TableApprove>
        </div>
      </div>
    </>
  );
}
