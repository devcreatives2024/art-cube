import React from "react";

const CircleText = () => {
  return (
    <div className="bg-[#28282E] relative text-[#BBBBBB] py-32">
      <div>
        <p className="text-6xl absolute px-20 top-52 uppercase tracking-tight leading-[2.8rem]">
          Lorem ipsum dolor sit consectetur adipisicing elit. Deleniti ad
          veniam esse reprehenderit autem a, sed quas suscipit nulla neque.
          Fugiat ad accusamus necessitatibus cupiditate dicta corrupti, dolorum
          numquam, soluta at repellendus <div className="w-96 h-8 inline-block bg-[#BBBBBB]"></div> ratione quibusdam
          similique eaque minus consectetur.
        </p>
      </div>
      <div className="bg-[#3534db] mx-auto w-[550px] h-[550px] rounded-full"></div>
    </div>
  );
};

export default CircleText;
