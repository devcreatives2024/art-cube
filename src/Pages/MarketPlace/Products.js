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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data, console.log(data)));
  }, []);
  return (
    <div className="mx-40">
      <div className="flex justify-between">
        <Menu>
          <MenuHandler>
            <Button className="bg-white dark:bg-black dark:text-white dark:border-white text-[#1A1A1A] border-2 text-lg font-sub normal-case hover:shadow-none border-[#1A1A1A] shadow-none">
              Open Menu ⮟
            </Button>
          </MenuHandler>
          <MenuList className="px-0 text-lg text-[#1A1A1A] font-extralight">
            <MenuItem className="border-b rounded-none py-3 text-center">
              Menu Item 1
            </MenuItem>
            <MenuItem className="border-b rounded-none py-3 text-center">
              Menu Item 2
            </MenuItem>
            <MenuItem className="border-b rounded-none py-3 text-center">
              Menu Item 3
            </MenuItem>
          </MenuList>
        </Menu>
        <button className="px-4 h-11 border-[#1A1A1A] text-sm font-bold border-2 rounded-full flex items-center gap-2">
          <img
            src="https://marketplace.baosociety.com/icons/cart/cart-light.svg"
            alt=""
            className="w-5"
          />{" "}
          Cart (0)
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 justify-items-center mt-6 pb-24">
        {products.map((product) => (
          <Product key={product?.id} theme={theme} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
