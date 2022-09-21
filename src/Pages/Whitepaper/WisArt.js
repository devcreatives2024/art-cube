import React from "react";
import { Link } from "react-router-dom";

const WisArt = () => {
  return (
    <div>
      <div className="mx-20 my-8">
        <h1 className="text-5xl font-bold border-b pb-6 border-gray-300">
          What is $ART?
        </h1>
        <div class="my-9">
          <img
            src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FrvnZoN28JeLYwKLkoE8n%2Ftoken3.gif?alt=media&token=a083da16-e22c-488e-9f60-69c90b815b59"
            alt=""
          />
          <p class="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo
            similique perspiciatis odio alias veniam voluptate natus temporibus?
            Doloribus sed non quis eius veritatis vero rerum corporis officia
            odit esse nisi optio id numquam voluptatem explicabo blanditiis ut,
            dolores nesciunt!
          </p>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis fugiat quam eligendi sit, asperiores
            excepturi cupiditate.
          </p>
        </div>
        <div className="flex gap-3 w-full">
          <Link
            to="/whitepaper/home"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">
                Previous
              </h4>
              <h1 class="text-lg">$ART Whitepaper</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/earn"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div>
              <h4 class="text-xs font-body text-gray-700">
                Next - Token Basics
              </h4>
              <h1 class="text-lg">Earning and Claiming $ART</h1>
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

export default WisArt;
