import React from "react";

const Main = () => {
  return (
    <div className="">
      <div className="sticky top-0 mx-20">
        <h1 className="text-[200px] font-head uppercase pt-[38vh]">
          Art Cube.
        </h1>
        <p className="max-w-md text-sm mt-[10vh]">
          Bao is a collection of 3,888 randomly generated 3D model artworks
          generated on the Ethereum Blockchain. Each Bao is totally unique and
          comes with different traits and attributes varying in rarity and will
          act as the token gateway into the first Web3 membership platform for
          curated food and beverage (F&B) experiences.
        </p>
      </div>
      <div className="-mt-[100vh] flex flex-col">
        <div className="flex justify-end pr-20">
          <div className="w-full"></div>
          <div className="w-96 bg-gray-300 h-80">
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/5c1e4fcd4907fcb722114554e68e3277db2c2699-1200x1200.png"
              alt=""
              className="w-96 mt-16"
            />
          </div>
        </div>
        <div className="flex justify-end mt-40">
          <div className="w-full"></div>
          <div className="w-96 bg-gray-300 h-80">
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/b644fedbac1b507fe1e64da170cb2651a8b74212-1200x1200.png"
              alt=""
              className="w-96 mt-16"
            />
          </div>
        </div>
        <div className="flex justify-start -mt-10">
          <div className="w-96"></div>
          <div className="w-96 ml-16 bg-gray-300 h-80">
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/f0da9fea7eb26562a9ac6ac4ca3c9545461ef538-1200x1200.png"
              alt=""
              className="w-96 "
            />
          </div>
        </div>
        <div className="flex justify-start -mt-10">
          <div className="w-96 ml-16 bg-gray-300 h-80">
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/42afab320a2e2f0515400a37485ca944fdb169d9-1200x1200.png"
              alt=""
              className="w-96 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
