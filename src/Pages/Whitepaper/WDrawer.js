import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import WhitePNav from "../../Components/WhitePNav";

const WDrawer = () => {
  let activeClassName =
    "border border-black border-r-0 border-[#D3DCE4] bg-white text-[#3063C3] block px-4 py-2";
  let deactiveClassName =
    "block border hover:bg-[#ECEFF1] hover:border-[#ECEFF1] border-[#F5F7F9] border-r-0 px-4 py-2";
  return (
    <>
      <WhitePNav />
      <div className="flex h-full">
        <div className="w-96 bg-[#F5F7F9] border-r border-gray-300">
          <ul className="ml-6 mt-4 font-sub font-light text-sm">
            <li>
              <NavLink
                to="/whitepaper/home"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                $ART Whitepaper
              </NavLink>
            </li>
            <li>
              <p className="uppercase text-xs font-body font-semibold block text-[#9CABB7] mt-4 px-4 py-2">
                Token Basics
              </p>
            </li>
            <li>
              <NavLink
                to="/whitepaper/what"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                What is $ART?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/earn"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Earning and Claiming $ART
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/nft"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                How much $ART does my Art NFT earn?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/whitepaper/use"
                className={({ isActive }) =>
                  isActive ? activeClassName : deactiveClassName
                }
              >
                Using $ART
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full bg-white overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default WDrawer;
