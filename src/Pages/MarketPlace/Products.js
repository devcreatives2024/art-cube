import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ theme }) => {
  const [open, setOpen] = useState("all");

  const handleOpen = (value) => {
    setOpen(open === value ? value : value);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const Available = products.filter((s) => s.available > 0);
  const Expired = products.filter((s) => s.available == "exp");
  return (
    <div className="mx-40">
      <div className="flex justify-between">
        <Menu>
          <MenuHandler>
            <Button className="bg-white dark:bg-black dark:text-white dark:border-white text-[#1A1A1A] border-2 text-lg font-sub capitalize hover:shadow-none border-[#1A1A1A] justify-between w-44 flex shadow-none">
              <p>{open}</p> <p>⮟</p>
            </Button>
          </MenuHandler>
          <MenuList
            className={`p-0 text-lg text-[#1A1A1A] font-extralight ${
              theme && "bg-black text-white border-gray-900"
            }`}
          >
            <MenuItem
              onClick={() => handleOpen("all")}
              className="border-b rounded-none border-gray-900 py-3"
            >
              All
            </MenuItem>
            <MenuItem
              onClick={() => handleOpen("available")}
              className="border-b rounded-none border-gray-900 py-3"
            >
              Available
            </MenuItem>
            <MenuItem
              onClick={() => handleOpen("expired")}
              className="rounded-none py-3"
            >
              Expired
            </MenuItem>
          </MenuList>
        </Menu>
        <button className="px-4 h-11 border-[#1A1A1A] text-sm font-bold border-2 rounded-full flex items-center gap-2">
          {theme ? (
            <img
              src="https://marketplace.baosociety.com/icons/cart/cart-dark.svg"
              alt=""
              className="w-5"
            />
          ) : (
            <img
              src="https://marketplace.baosociety.com/icons/cart/cart-light.svg"
              alt=""
              className="w-5"
            />
          )}
          Cart (0)
        </button>
      </div>
      {open === "available" && (
        <>
          <div className="grid grid-cols-3 gap-6 justify-items-center mt-6">
            {Available.map((product) => (
              <Product key={product?.id} theme={theme} product={product} />
            ))}
          </div>
          <div className="flex justify-between dark:text-gray-500 text-gray-800">
            <p className="pb-20 pt-4 text-sm">{Available?.length} Products</p>
            <p className="pb-20 pt-4 text-sm">
              Showing 0 - {Available?.length}
            </p>
          </div>
        </>
      )}
      {open === "all" && (
        <>
          <div className="grid grid-cols-3 gap-6 justify-items-center mt-6">
            {products.map((product) => (
              <Product key={product?.id} theme={theme} product={product} />
            ))}
          </div>
          <div className="flex justify-between dark:text-gray-500 text-gray-800">
            <p className="pb-20 pt-4 text-sm">{products?.length} Products</p>
            <p className="pb-20 pt-4 text-sm">Showing 0 - {products?.length}</p>
          </div>
        </>
      )}
      {open === "expired" && (
        <>
          <div className="grid grid-cols-3 gap-6 justify-items-center mt-6">
            {Expired.map((product) => (
              <Product key={product?.id} theme={theme} product={product} />
            ))}
          </div>
          <div className="flex justify-between dark:text-gray-500 text-gray-800">
            <p className="pb-20 pt-4 text-sm">{Expired?.length} Products</p>
            <p className="pb-20 pt-4 text-sm">Showing 0 - {Expired?.length}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
