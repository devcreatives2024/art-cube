import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Team = () => {
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
    <div className="mx-20 relative my-40">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: true }}
        className="text-[130px] mt-24 leading-none tracking-tighter font-head uppercase"
      >
        Team
      </motion.h1>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className={`w-32 h-32 p-4 rounded-full z-50 bg-opacity-90 bg-[#3534db] fixed left-0 top-0 pointer-events-none ${
          !cursorVariant && "hidden"
        }`}
      >
        <div className="w-24 h-24 bg-[url('https://baosociety.com/images/cursor.png')] bg-cover">
          <h1 className="text-white top-[53px] left-[49px] absolute">◂ ▸</h1>
        </div>
      </motion.div>
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="py-6 border-b-2 border-[#28282E]"
      >
        <Swiper
          slidesPerGroup={1}
          spaceBetween={15}
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.25": {
              slidesPerView: 1,
            },
            "@0.60": {
              slidesPerView: 2,
            },
            "@0.75": {
              slidesPerView: 2,
            },
            "@1.00": {
              slidesPerView: 3,
            },
            "@1.25": {
              slidesPerView: 4,
            },
            "@1.50": {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="mx-auto">
            <SwiperSlide className="h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                className="w-96"
              >
                <img
                  src="https://cdn.sanity.io/images/tksc7ovq/production/eee76581e1c3f5c8daba9faac5558cdbc8ec18ea-640x400.jpg"
                  alt=""
                />
                <p className="uppercase text-left text-sm mt-1">Tech</p>
                <h1 className="text-left text-5xl my-3 uppercase">Mantou</h1>
                <p className="text-justify text-sm leading-4 uppercase">
                  <span className="mx-12"></span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis rem voluptate
                  maiores sed eveniet officia ratione cumque omnis impedit
                  facilis quam, eum dignissimos temporibus aliquid delectus
                  eaque culpa deleniti expedita.
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                className="w-96"
              >
                <img
                  src="https://cdn.sanity.io/images/tksc7ovq/production/b5758a307c5564f78f3c3b14324d4ef14efab18e-640x400.jpg"
                  alt=""
                />
                <p className="uppercase text-left text-sm mt-1">Tech</p>
                <h1 className="text-left text-5xl my-3 uppercase">Mantou</h1>
                <p className="text-justify text-sm leading-4 uppercase">
                  <span className="mx-12"></span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis rem voluptate
                  maiores sed eveniet officia ratione cumque omnis impedit
                  facilis quam, eum dignissimos temporibus aliquid delectus
                  eaque culpa deleniti expedita.
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                className="w-96"
              >
                <img
                  src="https://cdn.sanity.io/images/tksc7ovq/production/df47ff7d4ff12f69bab2ac8401115b92ee6851be-640x400.jpg"
                  alt=""
                />
                <p className="uppercase text-left text-sm mt-1">Tech</p>
                <h1 className="text-left text-5xl my-3 uppercase">Mantou</h1>
                <p className="text-justify text-sm leading-4 uppercase">
                  <span className="mx-12"></span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis rem voluptate
                  maiores sed eveniet officia ratione cumque omnis impedit
                  facilis quam, eum dignissimos temporibus aliquid delectus
                  eaque culpa deleniti expedita.
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                className="w-96"
              >
                <img
                  src="https://cdn.sanity.io/images/tksc7ovq/production/407b6ca3c79ffffebab4d9a458c3e6b6abadb7d4-640x400.jpg"
                  alt=""
                />
                <p className="uppercase text-left text-sm mt-1">Tech</p>
                <h1 className="text-left text-5xl my-3 uppercase">Mantou</h1>
                <p className="text-justify text-sm leading-4 uppercase">
                  <span className="mx-12"></span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis rem voluptate
                  maiores sed eveniet officia ratione cumque omnis impedit
                  facilis quam, eum dignissimos temporibus aliquid delectus
                  eaque culpa deleniti expedita.
                </p>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                viewport={{ once: true }}
                className="w-96"
              >
                <img
                  src="https://cdn.sanity.io/images/tksc7ovq/production/fbccc550a3faa2bbcb4d3ff9a9d77cf4cd1ec489-640x400.jpg"
                  alt=""
                />
                <p className="uppercase text-left text-sm mt-1">Tech</p>
                <h1 className="text-left text-5xl my-3 uppercase">Mantou</h1>
                <p className="text-justify text-sm leading-4 uppercase">
                  <span className="mx-12"></span> Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Perspiciatis rem voluptate
                  maiores sed eveniet officia ratione cumque omnis impedit
                  facilis quam, eum dignissimos temporibus aliquid delectus
                  eaque culpa deleniti expedita.
                </p>
              </motion.div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
