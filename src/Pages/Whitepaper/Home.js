import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <img
        src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FUtA4GZr0sB3wIKO7rfy1%2Fbao%20society%20header%201.png?alt=media&token=ece8c2e4-5534-48ae-a55a-b6e4b32b9400"
        alt=""
        className="h-[250px] w-full"
      />
      <div className="mx-20 my-8">
        <h1 className="text-5xl font-bold">$ART Whitepaper</h1>
        <p className="mt-6 text-gray-600 border-b pb-6 border-gray-300">
          Everything you need to know about the $ART token.
        </p>
        <div class="my-9">
          <h1 className="text-3xl font-bold">Overview</h1>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis fugiat quam eligendi sit, asperiores
            excepturi cupiditate.
          </p>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis fugiat quam eligendi sit, asperiores
            excepturi cupiditate.
          </p>
        </div>
        <Link
          to="/whitepaper/what"
          class="px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
        >
          <div>
            <h4 class="text-xs font-body text-gray-700">Next - Token Basics</h4>
            <h1 class="text-lg">What is $ART?</h1>
          </div>
          <p class="font-bold">🡪</p>
        </Link>
        <p class="text-sm text-gray-600 border-t border-gray-300 mt-7 pt-7">
          Last modified 4mo ago
        </p>
      </div>
    </div>
  );
};

export default Home;
