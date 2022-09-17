import React from "react";

const VidSec = () => {
  return (
    <div className="mx-20">
      <div className="flex items-start justify-between">
        <div className="">
          <h1 className="text-[130px] mt-24 leading-none tracking-tight font-head uppercase">
            Web3 Meets <br /> Food & Beverage
          </h1>
        </div>
        <div className=" font-bold text-3xl text-[#3534DB]">
          <div className="border-[7px] text-center border-[#3534DB] p-16">
            <p>艺</p>
            <p>术</p>
            <p>立</p>
            <p>方</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://baosociety.com/images/vhs.png"
          alt="cassets"
          className="w-[60vw] mx-auto my-20"
        />
      </div>
    </div>
  );
};

export default VidSec;
