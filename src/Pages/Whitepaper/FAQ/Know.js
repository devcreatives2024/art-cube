import React from "react";
import { Link } from "react-router-dom";

const Know = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          How do I know I'm on the real Art Society site?
        </h1>
        <p class="my-4">
          ONLY use links posted in our Discord official links channel.
        </p>
        <p class="my-4">Verify that you are on our official sites:</p>
        <div className="my-9">
          <div className="flex items-center gap-3">
            <p className="font-bold flex items-center">
              <span className=" text-2xl">•</span>{" "}
              <span className="ml-2">Website Homepage : </span>
            </p>
            <Link
              to={"/"}
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              https://artcube.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold flex items-center">
              <span className=" text-2xl">•</span>{" "}
              <span className="ml-2">Staking : </span>
            </p>
            <Link
              to={"/stake"}
              target="_blank"
              className="text-blue-700 hover:underline"
            >
              https://stake.artcube.com
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/faq"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">
                Token Basics - Previous
              </h4>
              <h1>FAQs</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/connect"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">Next</h4>
              <h1>How do I connect my wallet to the stakin...</h1>
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

export default Know;
