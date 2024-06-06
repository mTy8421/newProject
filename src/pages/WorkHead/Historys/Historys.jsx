import NavBar from "../../../components/head/NavBar";
import NavBarProfile from "../../../components/NavBarProfile";
import Aside from "../../../components/head/Aside";
import TableHistory from "./TableHistory";

const Historys = () => {
  return (
    <div>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <div className="container mt-3 ml-3">
        <h1 className="text-3xl font-semibold">ประวัติการทำงาน</h1>
        <TableHistory />
      </div>
    </div>
  );
};

export default Historys;
