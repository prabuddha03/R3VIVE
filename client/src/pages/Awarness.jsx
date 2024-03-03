import React from "react";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import PlayQuiz from "../components/QuizRelated/PlayQuiz";


const Awarness = () => {
  return (
    <div>
      <div>
        <Navbersec />
      </div>

      <div className="flex justify-center items-center">
        <PlayQuiz />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Awarness
