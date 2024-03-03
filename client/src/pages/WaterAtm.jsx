import React from "react";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WaterTracker from "../components/WaterTracker";
import WastebinData from "../components/WastebinData";
import bindata from "../constants";

function createEntry(binvalues){
  return (
    <WastebinData 
      key={binvalues.id}
      binno={binvalues.binno}
      sino={binvalues.sino}
      filled={binvalues.filled}
    />
  )
}


const WaterAtm = () => {
  return (
    <div className="bg-white h-auto">
      <div>
        <Navbersec />
      </div>
      <div className="flex justify-center py-12">
        <Link to="/garbagecar">
          <div className="bg-[#518F6E] text-center py-5 h-[70px] w-[407px] text-white font-bold rounded-l-lg hover:bg-[#0e5e33] cursor-pointer">
            Ask For Garbage Pick-Up
          </div>
        </Link>
        <div className="bg-[#8FEA8D] text-center py-5 h-[70px] w-[407px] text-black font-bold rounded-r-lg border-2 border-black ">
          Search Nearby Water ATMs And Bins
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-9 mx-20 pb-16">
        <div className='className="bg-white border-2 rounded-lg drop-shadow-xl w-[600px] h-[580px]"'>
      <div className="text-center py-6 px-2 border-2">
        <h1>
          Personal Cart Service is jbdjncjksdn sbxsabncsj nxjnaskmcd Extra
          charges are charged for the service.Personal Cart is jbdjncjksdn.
        </h1>
      </div>
      <div className="flex flex-col">
        {bindata.map(createEntry)}
      </div>
    </div>
        <div className="bg-white w-[680px] h-[600px]">
          <WaterTracker />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WaterAtm;
