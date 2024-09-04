import { createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Components/Home";
import Login from "./Authentication/Login";
import Layout from "./Dashboard/Layout";
import DashHome from "./Dashboard/Components/Home/DashHome";
import Health from "./Dashboard/Components/Report/Report";
import Register from "./Authentication/Register";
import Account from "./Dashboard/Components/Account/Account";
import Profile from "./Dashboard/Profile/Profile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

    ]
  },

  {
    path: "dashboard",
    element: <Layout></Layout>,
    children: [


      {
        path: "home",
        element: <DashHome></DashHome>
        // element: <Dash2></Dash2>
      },
  

      {
        path: "account",
        element: <Account></Account>

      },

      {
        path: "report",
        element: <Health></Health>
        

      },
      {
        path: "profile",
        element: <Profile></Profile>
        

      },
    




    ]
  },
  
]);