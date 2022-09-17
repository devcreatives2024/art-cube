import React from "react";
import logo from "../logo.png";

const Nav = () => {
  return (
    <div className="navbar fixed flex mx-20 z-50 mt-20 uppercase text-xs w-full justify-start">
      <div className="w-6/12">
        <img src={logo} alt="logo" className="w-10" />
      </div>
      <div className="w-full flex">
        <ul className="w-6/12">
          <li>
            <a href="#">Stake</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Request Beta</a>
          </li>
        </ul>
        <ul className="w-full">
          <li>
            <a href="#">Discord</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Opensea</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
