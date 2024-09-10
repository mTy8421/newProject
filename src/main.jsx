import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/Users/Works.jsx";
import Historys from "./pages/Users/Historys/Historys.jsx";
import WorkAddUser from "./pages/Users/WorkAdd.jsx";

import WorkAdd from "./pages/WorkHead/WorkAdd.jsx";
import WorkAddDo from "./pages/WorkHead/WorkAddDo.jsx";
import HeadWorks from "./pages/WorkHead/Works.jsx";
import HeadHistorys from "./pages/WorkHead/Historys/Historys.jsx";
import Head from "./pages/WorkHead/Head.jsx";
import Approve from "./pages/WorkHead/Approve.jsx";

import Admin from "./pages/Admin/Admin.jsx";
import AdminWork from "./pages/Admin/WorkAdd.jsx";
import AdminWorkDo from "./pages/Admin/Works.jsx";
import AdminHistory from "./pages/Admin/Historys/Historys.jsx";
import AdminApprove from "./pages/Admin/Approve.jsx";
import AdminEditUser from "./pages/Admin/EditUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/addworks",
    element: <WorkAddUser />,
  },
  {
    path: "/historys",
    element: <Historys />,
  },
  {
    path: "/head/add",
    element: <WorkAdd />,
  },
  {
    path: "/head/addworks",
    element: <WorkAddDo />,
  },
  {
    path: "/head/works",
    element: <HeadWorks />,
  },
  {
    path: "/head/historys",
    element: <HeadHistorys />,
  },
  {
    path: "/head",
    element: <Head />,
  },
  {
    path: "/head/approve",
    element: <Approve />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/editUser",
    element: <AdminEditUser />,
  },
  {
    path: "/admin/add",
    element: <AdminWork />,
  },
  {
    path: "/admin/works",
    element: <AdminWorkDo />,
  },
  {
    path: "/admin/historys",
    element: <AdminHistory />,
  },
  {
    path: "/admin/approve",
    element: <AdminApprove />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
