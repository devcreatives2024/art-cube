import React from "react";

const Footer = () => {
  return (
    <div className="lg:mx-20 mx-5 relative lg:mt-40 pb-16">
      <div>
        <h1 className="lg:text-[230px] text-[150px] font-head uppercase">Art Cube.</h1>
        <div className="absolute right-16 lg:right-72 border-4 lg:border-[6px] border-[#3534db] text-[#3534db] rounded-full py-2 lg:px-[4px] lg:py-[20px] top-6">
          <p className="-rotate-45 text-2xl lg:text-4xl font-bold">艺术</p>
        </div>
      </div>
      <img
        src="https://Baosociety.com/images/Bao-footer.png"
        className="lg:w-80 w-52 mx-auto -mt-32 lg:-mt-56 "
        alt=""
      />
      <p className="text-sm">@2022 404 BaoCUBE CO. LTD</p>
    </div>
  );
};

export default Footer;
