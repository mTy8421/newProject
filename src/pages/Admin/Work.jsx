import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

import TableWork from "./TableWork"

export default function Work() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>

      <div className="grid grid-cols-12">

        <div className="col-span-2">
          <div className="sticky top-0">
            <Aside></Aside>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-10">

          <h1 className="text-center text-3xl font-bold">ภาระงาน</h1>

          <div className="mt-3">
            <TableWork></TableWork>
            <TableWork></TableWork>
            <TableWork></TableWork>
            <TableWork></TableWork>
            <TableWork></TableWork>
            <TableWork></TableWork>
          </div>

        </div>

      </div>

    </>
  )
}

