import NavBar from "../../components/head/NavBar";
import NavBarProfile from "../../components/NavBarProfile";
import Aside from "../../components/head/Aside";
import TableWork from "./TableWork";

import { Bars } from "../../lib/Bars";
import { Pies } from "../../lib/Pies";

export default function Head() {
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

        <div className="col-span-12 sm:col-span-10">

          <h1 className="text-3xl font-bold text-center">Dashboard</h1>

          <div className="card">
            <div className="card-title">
              <div className="w-6/12">
                <Bars />
              </div>
              <div className="w-1/3">
                <Pies />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <TableWork></TableWork>
          </div>

        </div>

      </div>
    </>
  );
}
