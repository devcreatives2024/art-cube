import React from "react";
import StakeNav from "../../Components/StakeNav";
import Coin from "./Coin";
import "./Stake.css";

const Stake = () => {
  return (
    <div className="bg-black text-white">
      <StakeNav />
      <Coin />
    </div>
  );
};

export default Stake;
