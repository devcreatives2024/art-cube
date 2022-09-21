import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold">FAQs</h1>
        <p className=" border-b pb-6 pt-4 text-gray-600 border-gray-300">
          More questions $ART? Check out our FAQs below.
        </p>
        <div class="my-9">
          <p class="my-4">Hera are the Baoicles in this secion:</p>
          <div className="grid lg:grid-cols-2 gap-4">
            <Link to={'/whitepaper/know'}>
              <div class="px-2 py-4 border border-[#E3E8ED] hover:text-[#7199E6] hover:-translate-y-[2px] duration-100">
                <div className="text-center">
                  <h1>How do I know I'm on the real Art Society site?</h1>
                </div>
              </div>
            </Link>
            <Link to={'/whitepaper/connect'}>
              <div class="px-2 py-4 border border-[#E3E8ED] hover:text-[#7199E6] hover:-translate-y-[2px] duration-100">
                <div className="text-center">
                  <h1>How do I connect my wallet to the staking site?</h1>
                </div>
              </div>
            </Link>
            <Link to={'/whitepaper/mobile'}>
              <div class="px-2 py-4 border border-[#E3E8ED] hover:text-[#7199E6] hover:-translate-y-[2px] duration-100">
                <div className="text-center">
                  <h1>Can I stake/claim $Art on mobile?</h1>
                </div>
              </div>
            </Link>
            <Link to={'/whitepaper/balance'}>
              <div class="px-2 py-4 border border-[#E3E8ED] hover:text-[#7199E6] hover:-translate-y-[2px] duration-100">
                <div className="text-center">
                  <h1>Where can I see my $Art balance?</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/use"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">
                Token Basics - Previous
              </h4>
              <h1 class="text-lg">Using $ART</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/know"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">Next</h4>
              <h1 class="text-lg w-max pr-3">
                How do I know I'm on the real A..
              </h1>
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

export default FAQ;
