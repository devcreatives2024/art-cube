import { motion } from "framer-motion";
import React from "react";
import logo from "../logo.png";

const Nav = () => {
  return (
    <div className="navbar fixed flex mx-20 z-40 mt-20 uppercase text-xs w-full justify-start">
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
              href="#"
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
              href="#"
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
  );
};

export default Nav;
