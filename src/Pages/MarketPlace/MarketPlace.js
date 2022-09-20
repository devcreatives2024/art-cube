import React, { useEffect, useState } from "react";
import MarketNav from "../../Components/MarketNav";
import Explore from "./Explore";
import "./market.css";
import Products from "./Products";

const MarketPlace = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div className={`${theme && "dark"}`}>
      <div className="text-[#1A1A1A] dark:bg-[#000000] dark:text-[#FAFAFA] bg-[#FAFAFA]">
        <MarketNav handleThemeChange={handleThemeChange} theme={theme} />
        <Explore />
        <Products theme={theme} />
      </div>
    </div>
  );
};

export default MarketPlace;
