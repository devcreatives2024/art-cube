import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          Can I stake/claim $Art on mobile?
        </h1>
        <p class="my-4">
          For the best experience, we recommend using Google Chrome on desktop.
          If you have to use mobile, use the browser within the Metamask mobile
          app.
        </p>
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/connect"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">Previous</h4>
              <h1>How do I connect my wallet to the stakin...</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/balance"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">Next</h4>
              <h1>Where can I see my $Art balance?</h1>
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

export default Mobile;
