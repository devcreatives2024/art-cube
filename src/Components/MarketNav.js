import React from "react";
import logo from "../logo.png";

const MarketNav = ({ handleThemeChange, theme }) => {
  return (
    <div className="mx-28">
      <div className="pt-10 flex justify-between items-center">
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
                src="https://marketplace.baosociety.com/icons/theme/moon.svg"
                alt=""
                className="w-6"
              />
            ) : (
              <img
                src="https://marketplace.baosociety.com/icons/theme/sun.svg"
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
