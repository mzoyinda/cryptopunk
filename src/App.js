import React from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    axios
      .get(
        "https://cryptopunks-1j2y.onrender.com/api"
      )
      .then((res) => {
        const punks = res.data.assets;
        console.log(punks);
        const reversed = [...punks].reverse();
        setPunkListData(reversed);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 ? (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
     ) : <h1 style={{color:"white", textAlign:"center"}}>Loading...</h1>}
    </div>
  );
}

export default App;
