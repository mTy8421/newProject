
import NavBar from "../../../components/admin/NavBar";
import NavBarProfile from "../../../components/NavBarProfile";
import Aside from "../../../components/admin/Aside";

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

        <div className="col-span-12 sm:col-span-10 mt-3">
          <h1 className="text-3xl font-semibold">ประวัติการทำงาน</h1>
          <div className="mt-3">
            {/* Table */}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Historys;