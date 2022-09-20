import React, { useState } from "react";

const StakeNav = () => {
  const [hover, setHover] = useState(false);
  const handleHover = (value) => {
    setHover(hover === value ? value : value);
  };
  return (
    <div>
      <div className="flex items-start justify-between mx-24 py-16">
        <img
          src="https://stake.baosociety.com/_next/image?url=%2Flogos%2FNavLogo.png&w=1920&q=75"
          className="w-36"
          alt=""
        />
        <ul className="flex gap-8 mr-10 uppercase text-lg font-sub font-extralight  mt-4">
          <li>
            <a href="market" target='_blank' className="hover:scale-x-110 block duration-200">Market</a>
          </li>
          <li>
            <a
              href="#"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(false)}
            >
              WhitePaper
            </a>
            <div
              className={`block ${
                hover === 2 ? "w-full duration-500" : "w-0 duration-500"
              } bg-gradient-to-r from-green-400 to-blue-500 h-[3px] -mt-1`}
            ></div>
          </li>
          <li>
            <a
              href="#"
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleHover(false)}
            >
              Connect Wallet
            </a>
            <div
              className={`block ${
                hover === 3 ? "w-full duration-500" : "w-0 duration-500"
              } bg-gradient-to-r from-green-400 to-blue-500 h-[3px] -mt-1`}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StakeNav;
