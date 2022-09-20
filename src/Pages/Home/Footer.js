import React from "react";

const Footer = () => {
  return (
    <div className="mx-20 relative mt-40 mb-16">
      <div>
        <h1 className="text-[230px] font-head uppercase">Art Cube.</h1>
        <div className="absolute right-72 border-[6px] border-[#3534db] text-[#3534db] rounded-full px-[4px] py-[20px] top-6">
          <p className="-rotate-45 text-4xl font-bold">艺术</p>
        </div>
      </div>
      <img
        src="https://baosociety.com/images/bao-footer.png"
        className="w-80 mx-auto -mt-56"
        alt=""
      />
      <p className="text-sm">@2022 404 ARTCUBE CO. LTD</p>
    </div>
  );
};

export default Footer;
