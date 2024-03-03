import React from "react";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import PlayGame from "../components/GameRelated/PlayGame";

const Game = () => {
  return (
    <div>
      <div>
        <Navbersec />
      </div>
      <div className="flex justify-center items-center">
        <PlayGame />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Game;
