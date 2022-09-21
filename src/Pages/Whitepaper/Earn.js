import React from "react";
import { Link } from "react-router-dom";

const Earn = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="text-5xl font-bold border-b pb-6 border-gray-300">
          Earning and Claiming $ART
        </h1>
        <div class="my-9">
          <p class="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo
            similique perspiciatis odio alias veniam voluptate natus temporibus?
            Doloribus sed non quis.
          </p>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis.
          </p>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi, cumque voluptas? Repellat, perferendis!
            Ad magnam ducimus non provident quam voluptates quis facilis fuga,
            repudiandae, vel unde doloribus. Odio sequi commodi suscipit aperiam
            inventore laboriosam quisquam quaerat voluptatum. Magnam, illo
            quaerat?
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit
            consequatur magni non aperiam ea hic aliquid ipsam illo a!
          </p>
          <div className="mt-10">
            <h1 className="font-bold mb-4">To claim $Art without staking:</h1>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>
                Dolor sit amet consectetur adipisicing elit. Obcaecati ducimus.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>Consectetur adipisicing elit. Obcaecati ducimus.</p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-bold mb-4">To claim $Art without staking:</h1>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ducimus.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>
                Dolor sit amet consectetur adipisicing elit. Obcaecati ducimus.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>Consectetur adipisicing elit. Obcaecati ducimus.</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">•</p>{" "}
              <p>Ipus adipisicing elit. Obcaecati ducimus.</p>
            </div>
          </div>
          <img
            src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FFWGNppctN6KsAu8UIexY%2FStaking_-_NFT_3.png?alt=media&token=0c5093cc-c30a-48ee-bae8-bf3faa127b40"
            className="mt-8 rounded-md"
            alt=""
          />
          <p className="text-sm text-center mt-2 font-light pb-6">
            Art staking site example
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/what"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">
                Token Basics - Previous
              </h4>
              <h1 class="text-lg">What is $ART?</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/nft"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">
                Next - Token Basics
              </h4>
              <h1 class="text-lg w-max pr-3">Hom much $Art does my Art N..</h1>
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

export default Earn;
