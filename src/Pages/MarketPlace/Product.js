import React from "react";

const Product = ({ product, theme }) => {
  return (
    <div className="bg-gray-200 dark:bg-[#181818] w-72 rounded-lg p-6">
      <h1 className="text-xl font-bold">{product?.name}</h1>
      <img
        src={product?.img}
        className="w-full h-48 my-3 mx-auto rounded-lg"
        alt=""
      />
      <p className="text-sm font-bold">
        {product?.available != 0 && product?.available != "exp" && (
          <>{product?.available} Remaining</>
        )}
        {product?.available == 0 && <>sold out</>}
        {product?.available == "exp" && <>Expired</>}
      </p>
      <p className="text-sm my-3">{product?.disc.slice(0, 80)}...</p>
      <p className="font-bold">Price</p>
      <p className="border-2 rounded-md w-fit border-[#1A1A1A] dark:border-white cursor-pointer hover:scale-105 duration-200 px-4">
        {product?.price}
      </p>
      <button
        className={`${
          product?.available != 0 && product?.available != "exp"
            ? "bg-purple-700"
            : "text-gray-600 dark:text-gray-400 dark:border-gray-400 border-2 border-gray-600"
        } text-center my-2 block hover:scale-105 duration-200 mx-auto text-white text-lg rounded-full px-4 py-2`}
      >
        {product?.available != 0 && product?.available != "exp" && (
          <>Checkout</>
        )}
        {product?.available == 0 && <>sold out</>}
        {product?.available == "exp" && <>Expired</>}
      </button>
      <div className="flex gap-2 pt-2">
        {theme ? (
          <>
            <img
              src="https://marketplace.Baosociety.com/icons/website/website-dark.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
            <img
              src="https://marketplace.Baosociety.com/icons/discord/discord-dark.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
            <img
              src="https://marketplace.Baosociety.com/icons/twitter/twitter-dark.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
          </>
        ) : (
          <>
            <img
              src="https://marketplace.Baosociety.com/icons/website/website-light.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
            <img
              src="https://marketplace.Baosociety.com/icons/discord/discord-light.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
            <img
              src="https://marketplace.Baosociety.com/icons/twitter/twitter-light.svg"
              className="w-5 hover:scale-105 duration-200 cursor-pointer"
              alt=""
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
