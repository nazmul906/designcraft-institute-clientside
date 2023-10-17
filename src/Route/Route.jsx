import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";

import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DashLayout from "../MainLayout/DashLayout";
import AllUser from "../pages/Dashboard/Admin/AllUser";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import AddClass from "../pages/Dashboard/Instructor/AddClass";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      //dhori first e dash e dhukbe manually authorized admin je shob user dekhebe
      {
        path: "alluser",
        element: <AllUser></AllUser>,
      },
      {
        path: "manageclass",
        element: <ManageClass></ManageClass>,
      },

      // instructor
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default Route;
