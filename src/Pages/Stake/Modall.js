import React from "react";
import Tabs from "./Tabs";

const Modall = ({ setShowModal }) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-2xl shadow-lg relative flex flex-col bg-[#1F1F1F] outline-none focus:outline-none w-[70vw]  h-[90vh] p-3">
            <button onClick={() => setShowModal(false)} className="text-right">
              Close
            </button>
            <div className="mx-8 my-12">
              <h1 className="text-xl font-head tracking-widest">
                How much $BAO does my Bao NFT Earn?
              </h1>
              <p className="font-sub font-extralight tracking-wider my-4">
                Unstaked Bao NFTs earn a base rate of 100 $BAO per day, while
                staked Bao NFTs earn a base rate of 150 $BAO per day. Both
                unstaked and staked Baos will earn additional $BAO bonuses based
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
