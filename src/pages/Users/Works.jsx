import NavBarProfile from "../../components/NavBarProfile";
import NavBar from "../../components/users/NavBar";
import Aside from "../../components/users/Aside";
import TableWork from "./TableWork";

import { useEffect } from "react";
import axios from "axios";

export default function Works() {
  const checkUser = async () => {
    try {
      const user = await axios.get("/api/nxt");
      if (user) {
        if (!user.data.user) {
          window.location.href = "/api/login";
        } else {
          if (user.data.user.user_role != "member") {
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
          <h1 className="text-3xl font-bold text-center">
            {/* บัญชีรายชื่อภาระงานที่ต้องปฎิบัติ */}
            ภาระงานที่ได้รับมอบหมาย
          </h1>

          <div className="mt-3">
            <TableWork></TableWork>
          </div>
        </div>
      </div>
    </>
  );
}
