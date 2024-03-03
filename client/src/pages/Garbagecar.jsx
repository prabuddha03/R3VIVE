import React from "react";
import Navbersec from "../components/Navbersec";
import GarbagecarForm from "../components/GarbagecarForm";
import Footer from "../components/Footer";
import GarbageTracker from "../components/GarbageTracker";
import { Link } from "react-router-dom";

const Garbagecar = () => {
  return (
    <div className="bg-white h-auto">
      <div>
        <Navbersec />
      </div>
      <div className="flex justify-center py-12">
        <div className="bg-[#8FEA8D] text-center py-5 h-[70px] w-[407px] text-black font-bold rounded-l-lg border-2 border-black ">
          Ask For Garbage Pick-Up
        </div>
        <Link to="/wateratm">
          <div className="bg-[#518F6E] text-center py-5 h-[70px] w-[407px] text-white font-bold rounded-r-lg hover:bg-[#0e5e33] cursor-pointer">
            Search Nearby Water ATMs And Bins
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-9 mx-20 pb-16">
        <GarbagecarForm />
        <div className="bg-white w-[680px] h-[600px]">
          <GarbageTracker />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Garbagecar;
