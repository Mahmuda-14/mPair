import { createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Components/Home";
import Login from "./Authentication/Login";
import Layout from "./Dashboard/Layout";
import DashHome from "./Dashboard/Components/Home/DashHome";
import Channel from "./Dashboard/Components/Channel/Channel";
import Space from "./Dashboard/Components/Space/Space";
import Health from "./Dashboard/Components/Health/Health";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Layout></Layout>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Layout></Layout>,
    children: [
      {
        path: "home",
        element: <DashHome></DashHome>,
      },
      {
        path: "channel",
        // element: <Channel></Channel>,
      },

      {
        path: "space",
        // element: <Space></Space>,
      },

      {
        path: "health",
        // element: <Health></Health>,
      },
     
    ],
  },
]);
