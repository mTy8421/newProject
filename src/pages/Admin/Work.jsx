import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

export default function Work() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>


    </>
  )
}

