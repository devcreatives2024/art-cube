import React from "react";
import { Link } from "react-router-dom";

const Usage = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          Using $ART
        </h1>
        <div class="my-9">
          <img
            src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FUVsp0nto56GoMoODBt8o%2Fimage.png?alt=media&token=ec1768ac-ffdf-4632-b5e0-174d8cce4c72"
            className="rounded-md w-full h-72 my-7"
            alt=""
          />
          <p class="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo
            similique perspiciatis odio alias veniam voluptate natus temporibus?
            Doloribus sed non quis.
          </p>
          <div>
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
          <p class="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo
            similique perspiciatis odio alias veniam voluptate natus temporibus?
            Doloribus sed non quis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum suscipit similique explicabo, harum
            tempora vel?
          </p>
        </div>
        <div className="flex lg:flex-row-reverse flex-col-reverse gap-3 w-full">
          <Link
            to="/whitepaper/faq"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="text-left">
              <h4 class="text-xs font-body text-gray-700">
                Token Basics - Previous
              </h4>
              <h1 class="text-lg">FAQs</h1>
            </div>
            <p class="font-bold">🡪</p>
          </Link>
          <Link
            to="/whitepaper/nft"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="w-full text-right">
              <h4 class="text-xs font-body text-gray-700">
                Next - Token Basics
              </h4>
              <h1 class="text-lg w-max pl-3">
                Hom much $Art does my Art N.
              </h1>
            </div>
          </Link>
        </div>
        <p class="text-sm text-gray-600 border-t border-gray-300 mt-7 pt-7">
          Last modified 4mo ago
        </p>
      </div>
    </div>
  );
};

export default Usage;
