import { motion } from "framer-motion";
import React, { useState } from "react";

const Main = () => {
  const [hover, setHover] = useState(false);
  const handleHover = (value) => {
    setHover(hover === value ? 0 : value);
  };
  return (
    <div className="">
      <div className="sticky top-0 z-20 lg:mx-20 mx-5">
        <h1 className="lg:text-[200px] text-[140px] font-head uppercase pt-[38vh]">
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
          Art is a collection of 3,888 randomly generated 3D model Baoworks
          generated on the Ethereum Blockchain. Each Art is totally unique and
          comes with different traits and attributes varying in rarity and will
          act as the token gateway into the first Web3 membership platform for
          curated food and beverage (F&B) experiences.
        </motion.p>
      </div>
      <div className="lg:-mt-[100vh] -mt-[115vh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="flex justify-end relative lg:pr-20"
        >
          <div className="absolute right-24 z-10 border-4 top-3 lg:border-[6px] border-[#3534db] text-[#3534db] rounded-full px-[4px] py-[20px] lg:top-16">
            <p className="-rotate-45 text-4xl font-bold">艺术</p>
          </div>
          <div className="w-full hidden lg:block"></div>
          <div className="lg:scale-x-[-1]">
            <div className="absolute z-[-1] left-0 lg:left-14 bg-[#A5A5A5] lg:w-80 w-60 h-72 top-0 lg:h-96"></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/5c1e4fcd4907fcb722114554e68e3277db2c2699-1200x1200.png"
              alt=""
              className="lg:w-[750px] w-80 lg:-mt-10 mr-16 lg:mr-0 -ml-24 lg:-ml-4"
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
          className="flex justify-end mt-12 lg:mt-40"
        >
          <div className="w-full hidden lg:block"></div>
          <div className="relative">
            <div className="lg:h-80 w-40 h-44 bg-[#A5A5A5] lg:w-72"></div>
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
          className="flex justify-start lg:-mt-10 mt-72 ml-5"
        >
          <div className="w-full hidden lg:block"></div>
          <div className="w-full relative lg:-ml-72">
            <div className="lg:h-96 w-56 h-72 bg-[#A5A5A5] lg:w-80"></div>
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
          className="lg:-mt-10 mt-16"
        >
          <div className="w-full relative ml-32">
            <div className="lg:h-80 w-52 h-60 bg-[#A5A5A5] lg:w-60"></div>
            <img
              src="https://cdn.sanity.io/images/tksc7ovq/production/42afab320a2e2f0515400a37485ca944fdb169d9-1200x1200.png"
              alt=""
              className="lg:w-80 w-60 absolute -left-5 lg:-left-12 top-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
