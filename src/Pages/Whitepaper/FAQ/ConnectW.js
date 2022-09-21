import React from "react";
import { Link } from "react-router-dom";

const ConnectW = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          How do I connect my wallet to the staking site?
        </h1>
        <p class="my-4">
          For the best experience, we recommend using Google Chrome as your web
          browser on desktop. You will need to have the wallet (Metamask,
          WalletConnect, Coinbase) browser extension installed.
        </p>
        <p class="my-4">
          On the staking site{" "}
          <Link
            to={"/stake"}
            target="_blank"
            className="text-blue-700 hover:underline"
          >
            (https://stake.Baocube.com)
          </Link>
          , click "Connect Wallet" button on the top right.
        </p>
        <img
          src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FbRbBrCvdqbFZsAeoutva%2FScreen_Shot_2022-05-02_at_9.16.48_PM.png?alt=media&token=993cef57-80d1-480d-863a-ea29305c1392"
          className="rounded-md"
          alt=""
        />
        <p class="my-4">
          A pop-up from your wallet will appear. Click "Connect" to connect your
          wallet.
        </p>
        <img
          src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FokwnFdzfZb6p5MT6bOQp%2Fimage_2.png?alt=media&token=560f126f-6545-490f-8292-89272132db84"
          className="rounded-md"
          alt=""
        />
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/know"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">Previous</h4>
              <h1>How do I know I'm on the real Art Soci...</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/mobile"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">Next</h4>
              <h1>Can I stake/claim $Art on mobile?</h1>
            </div>
            <p class="font-bold">🡪</p>
          </Link>
        </div>
        <p class="text-sm text-gray-600 border-t border-gray-300 mt-7 pt-7">
          Last modified 4mo ago
        </p>
      </div>
    </div>
  );
};

export default ConnectW;
