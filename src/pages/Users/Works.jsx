import NavBarProfile from "../../components/NavBarProfile";
import NavBar from "../../components/users/NavBar";
import Aside from "../../components/users/Aside";
import TableWork from "./TableWork";

export default function Works() {
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

          <h1 className="text-3xl font-bold text-center">
            บัญชีรายชื่อภาระงานที่ต้องปฎิบัติ
          </h1>

          <div className="mt-3">
            <TableWork></TableWork>
          </div>

        </div>

      </div>

    </>
  );
}
