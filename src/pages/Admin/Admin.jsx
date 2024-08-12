import NavBarProfile from "../../components/NavBarProfile"
import NavBar from "../../components/admin/NavBar"
import Aside from "../../components/admin/Aside"

import { Pies } from "../../lib/Pies"

export default function Admin() {
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

        <div className="mt-3 col-span-12 sm:col-span-10">

          <h1 className="text-3xl font-bold text-center">Dashborad</h1>

          <div className="card">
            <div className="card-title">
              <div className="w-6/12 mx-auto">
                <Pies />
              </div>
            </div>
          </div>

          <div className="mt-3">
            {/* table */}
          </div>

        </div>

      </div>
    </>
  )
}

