import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";
import Loader from "./Pages/Shared/Loader";
import Stake from "./Pages/Stake/Stake";
import Earn from "./Pages/Whitepaper/Earn";
import FAQ from "./Pages/Whitepaper/FAQ";
import Balance from "./Pages/Whitepaper/FAQ/Balance";
import ConnectW from "./Pages/Whitepaper/FAQ/ConnectW";
import Know from "./Pages/Whitepaper/FAQ/Know";
import Mobile from "./Pages/Whitepaper/FAQ/Mobile";
import WHome from "./Pages/Whitepaper/Home";
import NFT from "./Pages/Whitepaper/NFT";
import Usage from "./Pages/Whitepaper/Usage";
import Whitepaper from "./Pages/Whitepaper/Whitepaper";
import WisArt from "./Pages/Whitepaper/WisArt";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Routes>
        <Route path="" element={loading ? <Loader /> : <Home />}></Route>
        <Route path="/stake" element={<Stake />}></Route>
        <Route path="/market" element={<MarketPlace />}></Route>
        <Route path="/whitepaper" element={<Whitepaper />}>
          <Route path="/whitepaper/home" element={<WHome />}></Route>
          <Route path="/whitepaper/what" element={<WisArt />}></Route>
          <Route path="/whitepaper/earn" element={<Earn />}></Route>
          <Route path="/whitepaper/nft" element={<NFT />}></Route>
          <Route path="/whitepaper/use" element={<Usage />}></Route>
          <Route path="/whitepaper/faq" element={<FAQ />}></Route>
          <Route path="/whitepaper/know" element={<Know />}></Route>
          <Route path="/whitepaper/connect" element={<ConnectW />}></Route>
          <Route path="/whitepaper/mobile" element={<Mobile />}></Route>
          <Route path="/whitepaper/balance" element={<Balance />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
