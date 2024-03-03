import React from "react";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import complainbg from "../assets/complainbg.svg";
import fire from "../assets/Fire.svg";
import trash from "../assets/trash-complain.svg";
import litter from "../assets/cover.svg";
import { Link } from "react-router-dom";

const ComplainLand = () => {
  return (
    <div>
      <div>
        <Navbersec />
      </div>
      <div
        className="bg-cover bg-center h-auto pb-60 bg-no-repeat"
        style={{ backgroundImage: `url(${complainbg})` }}
      >
        <h1 className="text-center text-5xl lg:text-8xl font-bold text-white pt-20">
          {" "}
          YOUR <span className="text-[#DDFDE6]">PLANET</span> NEEDS YOU
        </h1>
        <h1 className="text-white/60 text-center text-lg lg:text-2xl pt-4">
          Having Any Problem ? Do Let Us Know So That We Can Fix It
        </h1>
        <div className="flex justify-center pt-24 mx-16 lg:mx-32">
          <input
            className="h-[72px] w-full rounded-l-md lg:text-xl pl-6"
            placeholder="Send Direct Complain To Your Nearest Authority"
          />
          <div className="h-[72px] bg-[#4BAB83] rounded-r-md text-center text-white font-bold text-2xl py-5 px-10">
            Proceed
          </div>
        </div>
      </div>
      <div className="py-20 flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="flex px-10">
            <img src={trash} alt="trash" />
            <div className="mr-96">
              <h1 className="text-2xl font-bold pb-2">Bin Issues</h1>
              "If you spot overflowing bins or litter, please use this reporting
              option to help maintain our communal cleanliness. Your
              contribution is key in preserving a tidy environment for the
              benefit of all community members."
              <Link to="/trash">
                <div className="h-[42px] w-[220px] bg-[#287555] rounded-md text-center text-white  text-2xl py-1 mt-2 cursor-pointer hover:bg-[#184231]">
                  Proceed
                </div>
              </Link>
            </div>
          </div>

          <div className="flex pl-20 pr-40 pt-32">
            <div className="mr-96">
              <h1 className="text-2xl font-bold pb-2">Trash Trouble</h1>
              "If you spot litter nearby, report the location for swift cleanup.
              Your cooperation ensures a well-maintained, charming neighborhood
              appreciated by all residents."
              <Link to="/litter">
                <div className="h-[42px] w-[220px] bg-[#287555] rounded-md text-center text-white  text-2xl py-1 mt-2 cursor-pointer hover:bg-[#184231]">
                  Proceed
                </div>
              </Link>
            </div>
            <img src={litter} alt="trash" />
          </div>

          <div className="flex px-10 pt-32">
            <img src={fire} alt="trash" />
            <div className="mr-96">
              <h1 className="text-2xl font-bold pb-2">Watch Fire</h1>
              "If you observe instances of open burning, we encourage you to
              promptly report the location. Your proactive reporting assists us
              in maintaining clean air quality within our community. Your
              contribution significantly contributes to the overall health and
              well-being of our residents."
              <Link to="/fire">
                <div className="h-[42px] w-[220px] bg-[#287555] rounded-md text-center text-white  text-2xl py-1 mt-2 cursor-pointer hover:bg-[#184231]">
                  Proceed
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplainLand;
