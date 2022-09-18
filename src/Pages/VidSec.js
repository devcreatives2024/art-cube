import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const VidSec = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 60,
      y: mousePosition.y - 60,
    },
  };

  const textEnter = () => setCursorVariant("default");
  const textLeave = () => setCursorVariant(false);
  return (
    <motion.div className="mx-20 mb-28">
      <div className="flex items-start justify-between">
        <div className="">
          <h1 className="text-[130px] mt-24 leading-none tracking-tight font-head uppercase">
            Web3 Meets <br /> Food & Beverage
          </h1>
        </div>
        <div className=" font-bold text-3xl text-[#3534DB]">
          <div className="border-[7px] text-center border-[#3534DB] p-16">
            <p>艺</p>
            <p>术</p>
            <p>立</p>
            <p>方</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <motion.img
          variants={variants}
          animate={cursorVariant}
          src="https://baosociety.com/images/cursor.png"
          className={`w-32 h-32 p-3 rounded-full bg-opacity-90 bg-[#3534db] fixed left-0 top-0 pointer-events-none ${
            !cursorVariant && "hidden"
          }`}
        />
        <img
          src="https://baosociety.com/images/cursor.png"
          className={`w-32 h-32 p-3 absolute rounded-full bg-opacity-90 bg-[#3534db] right-28 -top-16 pointer-events-none ${
            cursorVariant && "hidden"
          }`}
        />
        <img
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          src="https://baosociety.com/images/vhs.png"
          alt="cassets"
          className="w-[60vw] mx-auto my-20"
        />
      </div>
    </motion.div>
  );
};

export default VidSec;
