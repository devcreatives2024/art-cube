import React from "react";
import Tabs from "./Tabs";

const Modall = ({ setShowModal }) => {
  return (
    <div>
      <div className="justify-center lg:items-center h-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 my-6 rounded-2xl shadow-lg relative flex flex-col bg-[#1F1F1F] outline-none focus:outline-none lg:w-[70vw] w-11/12 mx-auto lg:h-[90vh] p-3">
            <button onClick={() => setShowModal(false)} className="text-right">
              Close
            </button>
            <div className="lg:mx-8 lg:my-12 my-4">
              <h1 className="text-xl font-head tracking-widest">
                How much $Art does my Art NFT Earn?
              </h1>
              <p className="font-sub font-extralight tracking-wider my-4">
                Unstaked Art NFTs earn a base rate of 100 $Art per day, while
                staked Art NFTs earn a base rate of 150 $Art per day. Both
                unstaked and staked Baos will earn additional $Art bonuses based
                on skin trait rarity.
              </p>
            </div>
            <Tabs />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modall;
