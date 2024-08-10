import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

export default function Work() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>

      <div className="grid grid-cols-12">

        <div className="sticky top-0">
          <Aside></Aside>
        </div>

        <div className="col-span-12 sm:col-span-10">
          {/* Table */}
        </div>

      </div>

    </>
  )
}

