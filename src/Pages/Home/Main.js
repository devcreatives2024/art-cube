import { motion } from "framer-motion";
import React, { useState } from "react";

const Main = () => {
  const [hover, setHover] = useState(false);
  const handleHover = (value) => {
    setHover(hover === value ? 0 : value);
  };
  return (
    <div className="">
      <div className="sticky top-0 z-20 mx-20">
        <h1 className="text-[200px] font-head uppercase pt-[38vh]">
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            A
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            R
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            T{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            C
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            U
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            B
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            E
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true }}
          >
            .
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="max-w-md text-sm mt-[10vh]"
        >
          Bao is a collection of 3,888 randomly generated 3D model artworks
          generated on the Ethereum Blockchain. Each Bao is totally unique and
          comes with different traits and attributes varying in rarity and will
          act as the token gateway into the first Web3 membership platform for
          curated food and beverage (F&B) experiences.
        </motion.p>
      </div>
      <div className="-mt-[100vh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex justify-end relative pr-20 z-30"
        >
          <div className="absolute right-24 z-10 border-[6px] border-[#3534db] text-[#3534db] rounded-full px-[4px] py-[20px] top-16">
            <p className="-rotate-45 text-4xl font-bold">艺术</p>
          </div>
          <div className="w-full"></div>
          <div className="scale-x-[-1]">
            <div
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => setHover(false)}
              className="absolute z-40 bg-opacity-0 left-14 bg-[#A5A5A5] w-80 top-0 h-96"
            ></div>
            <div
              className={`absolute z-[-1] left-14 bg-[#A5A5A5] w-80 ${
                hover === 1
                  ? "top-0 h-96"
                  : // ? "bottom-0 h-24 -skew-x-[30deg] ease-out duration-500"
                    "top-0 h-96"
              }`}
            ></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/5c1e4fcd4907fcb722114554e68e3277db2c2699-1200x1200.png"
              alt=""
              className="w-[750px] -mt-10 -ml-4"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex justify-end mt-40 z-30"
        >
          <div className="w-full"></div>
          <div className="relative">
            <div className="h-80 bg-[#A5A5A5] w-72"></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/b644fedbac1b507fe1e64da170cb2651a8b74212-1200x1200.png"
              alt=""
              className="absolute top-0 right-0"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex justify-start -mt-10"
        >
          <div className="w-full"></div>
          <div className="w-full relative -ml-72">
            <div className="h-96 bg-[#A5A5A5] w-80"></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/f0da9fea7eb26562a9ac6ac4ca3c9545461ef538-1200x1200.png"
              alt=""
              className="w-[30rem] absolute top-0 -left-16 -mt-10 scale-x-[-1]"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex justify-start -mt-10"
        >
          <div className="w-full relative ml-32">
            <div className="h-80 bg-[#A5A5A5] w-60"></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/42afab320a2e2f0515400a37485ca944fdb169d9-1200x1200.png"
              alt=""
              className="w-80 absolute -left-12 top-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
