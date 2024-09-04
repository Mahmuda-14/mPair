import {  NavLink, Outlet } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

import Nav from "./Navbar/Nav";
import { GrHomeRounded } from "react-icons/gr";
import { PiVideoCameraBold } from "react-icons/pi";

const Layout = () => {
  return (
    <div className="bg-white h-screen overflow-x-hidden">
   
      <div className="absolute top-0 left-0 w-full z-10">
        <Nav />
      </div>

      <div className="flex pt-16">
       
       
        <div className="fixed left-0 top-16 h-full w-64 bg-[#E4F2F8] overflow-y-auto z-0">
          <div className="px-6 ml-4 py-4">
            <h2 className="text-[#2397C8] text-2xl font-semibold py-2">
              Accounting
            </h2>
          </div>
          <ul className="menu px-6 text-[#373232] text-lg gap-4">
            <li>
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2397C8] font-bold"
                    : "text-[#373232]"
                }
              >
                <GrHomeRounded />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/account"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2397C8] font-bold"
                    : "text-[#373232]"
                }
              >
                <PiVideoCameraBold />
                Accounting
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/report"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2397C8] font-bold"
                    : "text-[#373232]"
                }
              >
                <FaRegEdit />
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
       
        <div className="flex-1 ml-64 mt-10">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
