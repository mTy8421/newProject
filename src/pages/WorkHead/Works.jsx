import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableWork from "./Table/TableWork";

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

        <div className="mt-3 col-span-12 sm:col-span-10">
          <h1 className="text-3xl font-semibold">ภาระงานที่ได้รับมอบหมาย</h1>

          <div className="mt-3">
            <TableWork></TableWork>
          </div>
        </div>
      </div>
    </>
  );
}
