import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Works from "./pages/Users/Works.jsx";
import Historys from "./pages/Users/Historys/Historys.jsx";
import WorkAdd from "./pages/WorkHead/WorkAdd.jsx";
import WorkAddDo from "./pages/WorkHead/WorkAddDo.jsx";
import HeadWorks from "./pages/WorkHead/Works.jsx";
import HeadHistorys from "./pages/WorkHead/Historys/Historys.jsx";
import Head from "./pages/WorkHead/Head.jsx";
import Approve from "./pages/WorkHead/Approve.jsx";

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
    path: "/historys",
    element: <Historys />,
  },
  {
    path: "/headadd",
    element: <WorkAdd />,
  },
  {
    path: "/headaddworks",
    element: <WorkAddDo />,
  },
  {
    path: "/headworks",
    element: <HeadWorks />,
  },
  {
    path: "/headhistorys",
    element: <HeadHistorys />,
  },
  {
    path: "/head",
    element: <Head />,
  },
  {
    path: "/headapprove",
    element: <Approve />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
