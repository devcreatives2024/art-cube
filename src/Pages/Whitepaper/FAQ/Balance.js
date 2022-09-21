import React from "react";
import { Link } from "react-router-dom";

const Balance = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          Where can I see my $Art balance?
        </h1>
        <p class="my-4">
          $Art token balance will be viewable in your wallet as well as on the
          staking page.
        </p>
        <img
          src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2Fb1KQdlbnGd309pXKKF3q%2Fimage.png?alt=media&token=b4f920c1-2cdf-422c-aec8-a1fbbc5b10d3"
          className="rounded-md"
          alt=""
        />
        <Link
          to="/whitepaper/mobile"
          class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
        >
          <p class="font-bold">🡨</p>
          <div className="text-right">
            <h4 class="text-xs font-body text-gray-700">Previous</h4>
            <h1 class="text-lg">Can I stake/claim $Art on mobile?</h1>
          </div>
        </Link>
        <p class="text-sm text-gray-600 border-t border-gray-300 mt-7 pt-7">
          Last modified 4mo ago
        </p>
      </div>
    </div>
  );
};

export default Balance;
