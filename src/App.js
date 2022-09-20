import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home/Home";
import Loader from "./Pages/Shared/Loader";

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
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#BBBBBB] text-[#28282E]">
          <Nav />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
