import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

export default function Admin() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>

      <div className="grid grid-cols-12">

        <div className="sm:col-span-2">
          <Aside></Aside>
        </div>

        <div className="mt-3 col-span-12 sm:col-span-10">
          {/* Table */}
        </div>

      </div>
    </>
  )
}

