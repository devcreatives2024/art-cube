import React from "react";
import Nav from "../../Components/Nav";
import Acordian from "./Acordian";
import CircleText from "./CircleText";
import Coin from "./Coin";
import Footer from "./Footer";
import Main from "./Main";
import PhoneSec from "./PhoneSec";
import Secion3 from "./Secion3";
import Team from "./Team";
import VidSec from "./VidSec";

const Home = () => {
  return (
    <div className="bg-[#BBBBBB] text-[#28282E]">
      <Nav />
      <Main />
      <VidSec />
      <Secion3 />
      <PhoneSec />
      <Coin />
      <CircleText />
      {/* <Roadmap /> */}
      <Team />
      <Acordian />
      <Footer />
    </div>
  );
};

export default Home;
