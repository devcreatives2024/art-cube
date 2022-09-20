import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MarketPlace from "./Pages/MarketPlace/MarketPlace";
import Loader from "./Pages/Shared/Loader";
import Stake from "./Pages/Stake/Stake";

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
      </Routes>
    </>
  );
}

export default App;
