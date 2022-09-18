import React from "react";

const Secion3 = () => {
  return (
    <div className="bg-[url('https://baosociety.com/images/buns.png')] bg-no-repeat bg-[position:top_right] my-28" style={{
      backgroundSize: '800px'
    }}>
      <div className="flex py-28 justify-between items-end mx-20">
        <div className="w-full">
          <h1 className="text-[130px] mt-24 leading-none tracking-tighter font-head uppercase">
            What's a <br /> vault<div className="bg-[#28282E] w-1 h-28 rotate-6 inline-block mr-4 ml-6"></div>box?
          </h1>
        </div>
        <div className="max-w-sm">
          <p className="">
            <span className="ml-20"></span> There are many many variations of
            Bao and so you see, Baos are not a one size fit all. most
            importantly there is a Bao for everyone.
          </p>
        </div>
      </div>
      <div>
        <p className="text-4xl uppercase mx-20 w-10/12 font-sub">
          <button className="h-7 w-7 mr-8 rounded-full bg-[#3534DB]"></button>{" "}
          Bao or Baozi (包子) is a meal / snack originated from Asia and is most
          traditionally served with a mixture of pork and vegetables packed away
          in a warm, soft bun.
        </p>
      </div>
    </div>
  );
};

export default Secion3;
