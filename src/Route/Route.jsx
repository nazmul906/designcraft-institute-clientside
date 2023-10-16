import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";

import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
  //   {
  //     path: "dashboard",
  //     element: <DashLayout></DashLayout>,
  //     children: [
  //       //dhori first e dash e dhukbe manually authorized admin je shob user dekhebe
  //       {
  //         path: "alluser",
  //         element: (
  //           <AdminRoute>
  //             {" "}
  //             <AllUser></AllUser>,
  //           </AdminRoute>
  //         ),
  //       },
  //       {
  //         path: "manageclass",
  //         element: (
  //           <AdminRoute>
  //             <ManageClass></ManageClass>,
  //           </AdminRoute>
  //         ),
  //       },
  //       // instructor
  //       {
  //         path: "addclass",
  //         element: (
  //           <InstructorRoute>
  //             <AddClass></AddClass>,
  //           </InstructorRoute>
  //         ),
  //       },
  //       {
  //         path: "myclass",
  //         element: (
  //           <InstructorRoute>
  //             <MyClass></MyClass>,
  //           </InstructorRoute>
  //         ),
  //       },
  //       // user
  //       {
  //         path: "selectclass",
  //         element: (
  //           <UserRoute>
  //             <MySelectClass></MySelectClass>
  //           </UserRoute>
  //         ),
  //       },
  //       {
  //         path: "payment/:id",
  //         element: (
  //           <UserRoute>
  //             <Payment></Payment>
  //           </UserRoute>
  //         ),
  //       },
  //       {
  //         path: "paymenthistory",
  //         element: (
  //           <UserRoute>
  //             <PaymentHistory></PaymentHistory>
  //           </UserRoute>
  //         ),
  //       },
  //       {
  //         path: "enrolled",
  //         element: (
  //           <UserRoute>
  //             <MyEnrolledClass></MyEnrolledClass>
  //           </UserRoute>
  //         ),
  //       },
  //     ],
  //   },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default Route;
