import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../logo.png";

const MarketNav = ({ handleThemeChange, theme }) => {
  let [open, setOpen] = useState(false);
  return (
    <div className="lg:mx-28">
      <div className="flex items-center px-5 py-4 fixed top-0 w-full bg-white dark:bg-black lg:hidden justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="w-8" />
          <h1 className="text-xl font-semibold">Art Cube</h1>
        </div>
        <AiOutlineMenu onClick={() => setOpen(true)} className="text-2xl" />
      </div>
      <div
        className={`lg:hidden z-50 fixed h-screen duration-200 bg-white dark:bg-black w-full ${
          open ? "top-0" : "top-[-800px] md:top-[-1200px]"
        }`}
      >
        <div className="py-8 px-5 lg:hidden text-black dark:text-white">
          <AiOutlineClose
            onClick={() => setOpen(false)}
            className="btn text-3xl"
          />
          <ul className="flex flex-col gap-11 font-sub text-4xl mt-8 font-bold">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/stake">Staking</a>
            </li>
            <li>
              <a href="/market">Marketplace</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Connect Wallet</a>
            </li>
            <li>
              <button onClick={handleThemeChange}>
                {theme ? (
                  <div className="flex items-center gap-2">
                    <img
                      src="https://marketplace.Baosociety.com/icons/theme/moon.svg"
                      alt=""
                      className="w-6"
                    />
                    <p>Dark</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <img
                      src="https://marketplace.Baosociety.com/icons/theme/sun.svg"
                      alt=""
                      className="w-6"
                    />
                    <p>Light</p>
                  </div>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-10 hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="w-10" />
          <h1 className="text-2xl font-semibold">Art Cube</h1>
        </div>
        <div>
          <ul className="flex gap-11 font-semibold text-sm">
            <li>
              <a className="duration-200 hover:scale-110 block" href="/">
                About
              </a>
            </li>
            <li>
              <a className="duration-200 hover:scale-110 block" href="/stake">
                Staking
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-b border-[#1A1A1A] dark:border-white duration-200 hover:scale-105 block"
              >
                Marketplace
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleThemeChange}
            className="rounded-full lg:mx-2 font-bold pt-2 ml-2"
          >
            {theme ? (
              <img
                src="https://marketplace.Baosociety.com/icons/theme/moon.svg"
                alt=""
                className="w-6"
              />
            ) : (
              <img
                src="https://marketplace.Baosociety.com/icons/theme/sun.svg"
                alt=""
                className="w-6"
              />
            )}
          </button>
          <button className="py-2 px-4 rounded-full bg-[#5C00C1] text-white text-lg">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketNav;
