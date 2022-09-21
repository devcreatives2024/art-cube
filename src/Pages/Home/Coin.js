import React from "react";
import coin from "../../Assets/coin.webm";
import ParalaxText from "./ParalaxText";
import "./styles.css";

const Coin = () => {
  return (
    <div className="relative">
      <section>
        <ParalaxText stroke={"outline"} baseVelocity={-5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"fill"} baseVelocity={5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"outline"} baseVelocity={-5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"fill"} baseVelocity={5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"outline"} baseVelocity={-5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"fill"} baseVelocity={5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"outline"} baseVelocity={-5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"fill"} baseVelocity={5}>
          BaoCube Baocube
        </ParalaxText>
        <ParalaxText stroke={"outline"} baseVelocity={-5}>
          BaoCube Baocube
        </ParalaxText>
      </section>
      {/* <img src={coin} alt="coin" className="absolute right-[32vw] top-[30vh]" /> */}
      <video
        src={coin}
        muted
        loop
        controlsList="nodownload"
        autoPlay
        className="absolute left-[30%] lg:left-[37%] top-[30%] w-40 lg:w-80"
      ></video>
    </div>
  );
};

export default Coin;
