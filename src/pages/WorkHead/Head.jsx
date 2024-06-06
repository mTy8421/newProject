import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";

export default function Head() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container flex mt-3 ml-3">
        <h1 className="text-3xl font-semibold">Dashborad</h1>
      </div>
    </>
  );
}
