import React from "react";
import Acordian from "./Acordian";
import CircleText from "./CircleText";
import Coin from "./Coin";
import Main from "./Main";
import PhoneSec from "./PhoneSec";
import Roadmap from "./Roadmap";
import Secion3 from "./Secion3";
import Team from "./Team";
import VidSec from "./VidSec";

const Home = () => {
  return (
    <div>
      <Main />
      <VidSec />
      <Secion3 />
      <PhoneSec />
      <Coin />
      <CircleText />
      <Roadmap />
      <Team />
      <Acordian />
    </div>
  );
};

export default Home;
