import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

export default function Admin() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="mr-3">
        <div className="float-left">
          <Aside></Aside>
        </div>
        <div className="mt-3">
          {/* Table */}
        </div>
      </div>
    </>
  )
}

