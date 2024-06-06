import Aside from "./components/users/Aside";
import NavBar from "./components/users/NavBar";
import NavBarProfile from "./components/NavBarProfile";

import { Bars } from "./lib/Bars";

function App() {
  return (
    <>
      <NavBarProfile></NavBarProfile>
      <NavBar></NavBar>
      <div className="float-left mr-3">
        <Aside></Aside>
      </div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="card w-96 text-neutral-content mx-auto mt-3">
        <div className="items-center text-center">
          <Bars />
        </div>
      </div>
    </>
  );
}

export default App;
