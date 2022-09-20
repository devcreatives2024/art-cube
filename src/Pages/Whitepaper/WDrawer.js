import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const WDrawer = () => {
  return (
    <div className="flex h-screen">
      <div className="w-96 bg-[#F5F7F9] border-r border-gray-300">
        <ul className="ml-6 mt-1">
          <li>
            <NavLink to="/whitepaper" href="#" className="bg-white block p-2">
              Art Cube
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whitepaper/what"
              href="#"
              className="bg-white block p-2"
            >
              What is Art Cube?
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default WDrawer;
