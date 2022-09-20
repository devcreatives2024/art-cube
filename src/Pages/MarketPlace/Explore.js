import React from "react";

const Explore = ({ theme }) => {
  return (
    <div className="mx-40">
      <div className="mt-20 mb-8 flex">
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-center">
            Explore Our Marketplace
          </h1>
          <p className="text-gray-700 dark:text-gray-400 my-2 text-center font-sub font-light">
            As a holder, redeem and enjoy our perks of being a member of the
            community.
          </p>
        </div>
        <div className="flex gap-3">
          {theme ? (
            <>
              <img
                src="https://marketplace.baosociety.com/icons/discord/discord-dark.svg"
                alt=""
                className="w-5"
              />
              <img
                src="https://marketplace.baosociety.com/icons/twitter/twitter-dark.svg"
                alt=""
                className="w-5"
              />
            </>
          ) : (
            <>
              <img
                src="https://marketplace.baosociety.com/icons/discord/discord-light.svg"
                alt=""
                className="w-5"
              />
              <img
                src="https://marketplace.baosociety.com/icons/twitter/twitter-light.svg"
                alt=""
                className="w-5"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
