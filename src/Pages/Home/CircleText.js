import { motion } from "framer-motion";
import React from "react";

const CircleText = () => {
  return (
    <div className="bg-[#28282E] relative text-[#BBBBBB] py-32">
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="text-6xl absolute px-20 z-10 top-52 uppercase tracking-tight leading-[2.8rem]"
        >
          Lorem ipsum dolor sit consectetur adipisicing elit. Deleniti ad veniam
          esse reprehenderit autem a, sed quas suscipit nulla neque. Fugiat ad
          accusamus necessitatibus cupiditate dicta corrupti, dolorum numquam,
          soluta at repellendus{" "}
          <div className="w-96 h-8 inline-block bg-[#BBBBBB]"></div> ratione
          quibusdam similique eaque minus consectetur.
        </motion.p>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true }}
          className="bg-[#3534db] mx-auto w-[550px] h-[550px] rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default CircleText;
