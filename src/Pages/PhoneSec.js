import React from "react";

const PhoneSec = () => {
  return (
    <div className="my-28 mx-20">
      <div className="flex items-center">
        <div className="w-full">
          <h1 className="text-[130px] mt-24 leading-none tracking-tight font-head uppercase">
            Web3 in <br /> your pocket.
          </h1>
          <div className="max-w-sm my-12">
            <p className="">
              <span className="ml-20"></span> Access Bao Society perks from the
              convenience of your phone. Get notified on exclusive holder
              events, mini games and revolutionary AR experiences with your
              Baos.
            </p>
          </div>
          <button className="text-xl uppercase px-9 text-[#3534DB] border-[#3534DB] py-4 border-4 rounded-full">
            Request Beta Access
          </button>
        </div>
        <div className="flex w-96 justify-center">
          <img
            src="https://cdn.sanity.io/images/tksc7ovq/production/58c26f8e76f521bd61ee0ef543556e6c665157f8-439x519.png"
            alt=""
            className="w-96 h-[450px]"
          />
          <img
            src="https://cdn.sanity.io/images/tksc7ovq/production/5916bfce87899565c888305d234a7eb5768c3405-461x627.png"
            alt=""
            className="w-96 -ml-60  h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneSec;
