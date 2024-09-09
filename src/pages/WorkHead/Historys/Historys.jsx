import NavBar from "../../../components/head/NavBar";
import NavBarProfile from "../../../components/NavBarProfile";
import Aside from "../../../components/head/Aside";
import TableHistory from "./TableHistory";

const Historys = () => {
  return (
    <div>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>

      <div className="grid grid-cols-12">
        <div className="sm:col-span-2">
          <div className="sticky top-0">
            <Aside></Aside>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-10 mt-4">
          <h1 className="text-3xl font-semibold text-center">
            ประวัติการทำงาน
          </h1>
          <div className="mt-3">
            <TableHistory></TableHistory>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historys;
