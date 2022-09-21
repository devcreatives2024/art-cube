import { motion } from "framer-motion";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../logo.png";

const Nav = () => {
  return (
    <div className="">
      <div className="flex lg:hidden fixed z-40 top-0 justify-between items-center mt-8 mx-8">
        <img src={logo} className="w-8" alt="" />
        <BiMenuAltLeft  className="text-xl"/>
      </div>
      <div className="navbar hidden fixed lg:flex mx-20 z-40 mt-20 uppercase text-xs w-full justify-start">
        <div className="w-6/12">
          <motion.img
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={logo}
            alt="logo"
            className="w-10"
          />
        </div>
        <div className="w-full flex">
          <ul className="w-6/12">
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="stake"
                target="_blank"
              >
                Stake
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="market"
                target="_blank"
              >
                Marketplace
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="#"
              >
                Request Beta
              </motion.a>
            </li>
          </ul>
          <ul className="w-full">
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="#"
              >
                Discord
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="#"
              >
                Twitter
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="#"
              >
                Instagram
              </motion.a>
            </li>
            <li>
              <motion.a
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                href="#"
              >
                Opensea
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
