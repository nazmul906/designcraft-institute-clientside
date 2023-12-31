import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome, FaWallet } from "react-icons/fa";

import { useState, useEffect } from "react";
import "./dashboard.css";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashLayout = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const [isStudent, setIsStudent] = useState(false);
  // const isAdmin = true;
  // const isAdmin = false;

  // const isInstructor = true;
  // const isInstructor = false;
  console.log("instructot", isInstructor);
  console.log("admin", isAdmin);
  const isStudent = false;

  useEffect(() => {
    if (isAdmin === false && isInstructor === false) {
      setIsStudent(true);
    }
  }, [isAdmin, isInstructor]);

  return (
    <div className="flex h-screen overflow-hidden dash-layout">
      {/* Sidebar */}
      <div className="flex-shrink-0 w-64 bg-base-100 ">
        <div className="flex items-center justify-center h-14 bg-base-200 ">
          <span className="text-lg font-bold ">Dashboard</span>
        </div>
        <nav className="py-4">
          <ul>
            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    <FaHome className="inline-block mr-2" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/alluser"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    <FaWallet className="inline-block mr-2" /> All User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageclass"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    <FaWallet className="inline-block mr-2" />
                    Manage Class
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addclass"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    Add a class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myclass"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    Myclass
                  </NavLink>
                </li>
              </>
            )}

            {isStudent && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/selectclass"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    My Booked Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolled"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    My Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymenthistory"
                    activeClassName="bg-primary bg-opacity-20"
                    className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
                  >
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            {/* divider */}
            <div className="divider"></div>

            <li>
              <NavLink
                to="/"
                activeClassName="bg-primary bg-opacity-20"
                className="block py-2 px-4 rounded-md hover:bg-primary hover:bg-opacity-20"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-base-200">
        {/* Navbar */}
        <nav className="flex items-center justify-between h-14 bg-base-100">
          <div className="mx-4">
            <Link to="/" className="text-lg font-bold text-white">
              My Dashboard
            </Link>
          </div>
          {/* Add your navbar content here */}
        </nav>

        {/* Page content */}
        <div className="p-4">
          {/* Add your page content here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
