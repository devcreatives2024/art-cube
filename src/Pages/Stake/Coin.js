import React from "react";
import Modall from "./Modall";

const Coin = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div className="border-b-[0.5px] lg:mx-20 mx-5 pb-10 pt-6 lg:px-36 border-gray-900 flex lg:flex-row flex-col gap-8 lg:gap-0">
        <div className="w-5/12 mx-auto lg:mx-0">
          <img
            src="https://stake.Baosociety.com/_next/image?url=%2Ftoken%2Ftoken.gif&w=1920&q=75"
            className="w-52"
            alt=""
          />
        </div>
        <div className="w-full lg:text-left text-center">
          <h1 className="text-2xl font-sub font-bold mb-3">
            STAKE OR HOLD YOUR Bao
          </h1>
          <p className="text-lg font-sub font-extralight mb-4">
            Stake or hold your Bao(s) to earn $Art and use it across our
            ecosystem. Exchange $Art for prizes such as allowlist spots with
            pBaonered projects, official Art Society merchandise, food
            experience kits and [REDACTED]. For more details please refer to our
            whitepaper.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white wbtn hover:scale-105 duration-200 px-5 py-2 font-sub rounded-full text-black flex  items-center gap-1 mx-auto lg:mx-0"
          >
            <img
              src="https://stake.Baosociety.com/_next/image?url=%2Ficons%2Fgift.png&w=16&q=75"
              alt=""
              className="mb-[2px]"
            />{" "}
            <p>Rewards</p>
          </button>
          {showModal ? <Modall setShowModal={setShowModal} /> : null}
        </div>
      </div>
      <img
        src="https://stake.Baosociety.com/_next/image?url=%2Fplaceholders%2Fconnect-wallet.png&w=1920&q=75"
        className="w-[500px] mx-auto pt-16"
        alt=""
      />
      <div className="flex items-center gap-3">
        <button className="bg-white wbtn my-10 ml-10 hover:scale-105 duration-200 p-2 font-sub rounded-full text-black">
          <img
            src="https://stake.Baosociety.com/icons/contract-icon.svg"
            alt=""
            className="w-11/12 mx-auto"
          />
        </button>
        <p className="text-lg font-light">Staking Contract</p>
      </div>
    </div>
  );
};

export default Coin;
