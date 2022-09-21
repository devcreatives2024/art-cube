import React from "react";
import { Link } from "react-router-dom";

const NFT = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 my-8">
        <h1 className="lg:text-5xl text-3xl font-bold border-b pb-6 border-gray-300">
          How much $Art does my Art NFT earn?
        </h1>
        <div class="my-9">
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis.
          </p>
          <p class="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ea natus cumque debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi, cumque voluptas? Repellat, perferendis!
            Ad magnam ducimus non provident quam voluptates quis facilis fuga,
            repudianda
          </p>
          <div className="mt-10">
            <h1 className="font-bold mb-4">Unstaked Art Earnings</h1>
            <div>
              <table class="table-auto w-full text-start">
                <thead className="w-full bg-[#F5F7F9] border-b-[3px] border-[#E3E8ED]">
                  <tr>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Skin Trait
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Daily Base Rate <br /> ($ART)
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Daily Base Rate <br /> ($ART)
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      $ART/Day
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Plain
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      5
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">105</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Blush
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      10
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">110</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Ghost
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      25
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">125</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <img
            src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2FyTqh0pcpuQH90UYyZ1sE%2FUnstaked.png?alt=media&token=c311becf-f232-4c1e-8d8f-f5db40d06b64"
            className="my-8"
            alt=""
          />
          <div className="mt-10">
            <h1 className="font-bold mb-4">Staked Art Earnings</h1>
            <div>
              <table class="table-auto w-full text-start">
                <thead className="w-full bg-[#F5F7F9] border-b-[3px] border-[#E3E8ED]">
                  <tr>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Skin Trait
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Daily Base Rate <br /> ($ART)
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      Daily Base Rate <br /> ($ART)
                    </th>
                    <th className="py-2 border-r border-[#E3E8ED] text-start px-4 text-[#5C6975]">
                      $ART/Day
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Plain
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      5
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">105</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Blush
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      10
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">110</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      Ghost
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      100
                    </td>
                    <td className="p-2 border-b border-r border-[#E3E8ED]">
                      25
                    </td>
                    <td className="p-2 border-b border-[#E3E8ED]">125</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <img
            src="https://2958952834-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FTzN1bJCbdGHZpshXjW2O%2Fuploads%2F5FzOrjsD3vv8qth4pFqR%2FStaked.png?alt=media&token=1e3d98ad-5fda-42dd-a325-3ba3e6a49064"
            className="my-8"
            alt=""
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-3 w-full">
          <Link
            to="/whitepaper/earn"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <p class="font-bold">🡨</p>
            <div className="text-right">
              <h4 class="text-xs font-body text-gray-700">
                Token Basics - Previous
              </h4>
              <h1 class="text-lg">Earning and Claiming $ART</h1>
            </div>
          </Link>
          <Link
            to="/whitepaper/use"
            class="w-full px-4 py-4 border border-[#E3E8ED] flex justify-between items-center hover:text-[#7199E6] hover:-translate-y-[2px] duration-100"
          >
            <div className="w-full">
              <h4 class="text-xs font-body text-gray-700">
                Next - Token Basics
              </h4>
              <h1 class="text-lg w-max pr-3">
                Using $ART
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

export default NFT;
