import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const VidSec = () => {
  const [isOpen, setOpen] = useState(false);
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
    <div className="mx-20 mb-28">
      <div className="flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className=""
        >
          <h1 className="text-[130px] mt-24 leading-none tracking-tight font-head uppercase">
            Web3 Meets <br /> Food & Beverage
          </h1>
        </motion.div>
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
        <motion.div
          variants={variants}
          animate={cursorVariant}
          className={`w-32 h-32 p-4 rounded-full bg-opacity-90 bg-[#3534db] fixed left-0 top-0 pointer-events-none ${
            !cursorVariant && "hidden"
          }`}
        >
          <div className="w-24 h-24 bg-[url('https://baosociety.com/images/cursor.png')] bg-cover">
            <h1 className="text-white top-[42px] left-[58px] text-4xl font-bold absolute">
              •
            </h1>
          </div>
        </motion.div>
        <div
          className={`w-32 h-32 p-4 absolute rounded-full bg-opacity-90 bg-[#3534db] right-28 -top-16 pointer-events-none ${
            cursorVariant && "hidden"
          }`}
        >
          <div className="w-24 h-24 bg-[url('https://baosociety.com/images/cursor.png')] bg-cover">
            <h1 className="text-white top-[42px] left-[58px] text-4xl font-bold absolute">
              •
            </h1>
          </div>
        </div>
        <img
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          src="https://baosociety.com/images/vhs.png"
          alt="cassets"
          className="w-[60vw] mx-auto my-20"
        />
      </div>
    </div>
  );
};

export default VidSec;
