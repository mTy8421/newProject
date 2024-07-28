import Aside from "./components/users/Aside";
import NavBar from "./components/users/NavBar";
import NavBarProfile from "./components/NavBarProfile";
import TableWork from "./pages/Users/TableWork";

import { Bars } from "./lib/Bars";
import { Pies } from "./lib/Pies";

function App() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="mr-3">
        <div className="float-left">
          <Aside></Aside>
        </div>
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

    </>
  );
}

export default App;
