import Aside from "./components/users/Aside";
import NavBar from "./components/users/NavBar";
import NavBarProfile from "./components/NavBarProfile";

import { BarsUser } from "./lib/BarsUser";
import { PiesUser } from "./lib/PiesUser";

import { useEffect } from "react";
import axios from "axios";

function App() {
  const checkUser = async () => {
    try {
      const user = await axios.get("/api/nxt");
      if (user) {
        if (!user.data.user) {
          window.location.href = "/api/login";
        } else {
          if (user.data.user.user_role != "พนักงาน") {
            window.location.href = "/admin";
          }
        }
      } else {
        window.location.href = "/api/login";
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

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
        <div className="col-span-12 sm:col-span-10 mt-4">
          <h1 className="text-3xl font-bold text-center">Dashboard</h1>

          <div className="hidden sm:block">
            <div className="card">
              <div className="card-title">
                <div className="w-6/12">
                  <BarsUser />
                </div>
                <div className="w-1/3">
                  <PiesUser />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden block">
            <div className="card">
              <div className="card-title">
                <BarsUser />
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <PiesUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
