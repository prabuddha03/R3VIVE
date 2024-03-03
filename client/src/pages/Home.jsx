import React from "react";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import hero1 from "../assets/hero1.svg";
import hero2 from "../assets/hero2.svg";
import tree1 from "../assets/tree1.svg";
import tree2 from "../assets/tree2.svg";
import tree3 from "../assets/tree3.svg";
import tree4 from "../assets/tree4.svg";
import knowus from "../assets/knowus.svg";
import garbagecar from "../assets/garbagecar.svg";
import recycle from "../assets/recycle.svg";
import reduce from "../assets/reduce.svg";
import reuse from "../assets/reuse.svg";
import coins from "../assets/coins.svg";
import awarness from "../assets/awarness.svg";
import complain from "../assets/complain.svg";
import game from "../assets/game.svg";
import ad from "../assets/createad.svg";
import shop from "../assets/shop.svg";
import {Fade} from "react-awesome-reveal"

const Home = () => {
  const text = (
    <Typewriter
      options={{
        strings: ["Sustainability.", "Development.", " A Better Future."],
        autoStart: true,
        loop: true,
      }}
    />
  );
  return (
    <section>
      <div className="bg-[#F5FFCE] h-auto">
        <Navbar />
        <div className="text-center pt-14">
          <h1 className="text-3xl lg:text-6xl font-bold pb-4 text-black">
            {" "}
            Join Us And Take A Step Towards
          </h1>
          <span className="text-4xl lg:text-6xl font-bold text-[#31613D]">
            {text}
          </span>
          <div className="flex flex-col justify-center pt-10">
            <img src={hero1} alt="hero" />
            <div className="w-full h-5 bg-[#518F6E]"></div>
          </div>
        </div>
      </div>

      <Fade>

      <div className="bg-white py-16">
        <div className="text-center text-3xl font-extrabold text-[#1F3E28] lg:text-5xl pb-12">
          Plastics or Planet ? The choice is yours!
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:mr-20 ">
          <img src={hero2} alt="tree" className="w-[70%]" />
          <div className=" hidden lg:grid grid-cols-2 gap-3">
            <img src={tree1} alt="tree" className="" />
            <img src={tree2} alt="tree" className="" />
            <img src={tree3} alt="tree" className="" />
            <img src={tree4} alt="tree" className="" />
          </div>
        </div>
      </div>

      </Fade>

<Fade>
      <div
        style={{ backgroundImage: `url(${knowus})` }}
        className="bg-cover bg-center h-screen bg-no-repeat"
      >
        <div className="text-center text-4xl font-extrabold text-white lg:text-5xl py-10">
          Know About Us!
        </div>
        <div className="text-center text-[#BBF8CD] mx-11 lg:mx-16 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget nisl lacus. Nullam faucibus sem bibendum libero finibus
          consequat. Curabitur eget fringilla metus. Nam mattis mi vitae congue
          elementum. Duis porttitor ac tellus semper porta. Pellentesque est
          erat, laoreet non ipsum interdum, efficitur
        </div>
        <div className="flex justify-between pt-16 lg:pt-28">
          <div className="bg-[#0000008f] w-[300px] h-[80px] text-white flex justify-center items-center text-2xl rounded-r-full lg:w-[580px] lg:h-[118px] cursor-pointer hover:bg-black lg:text-4xl">
            Circular Economy
          </div>
          <div className="bg-[#0000008f] w-[300px] h-[80px] text-white flex justify-center items-center text-2xl rounded-l-full lg:w-[580px] lg:h-[118px] cursor-pointer hover:bg-black lg:text-4xl">
            Rewards & Badges
          </div>
        </div>
        <div className="flex justify-between pt-8 lg:pt-16">
          <div className="bg-[#0000008f] w-[300px] h-[80px] text-white flex justify-center items-center text-2xl rounded-r-full lg:w-[580px] lg:h-[118px] cursor-pointer hover:bg-black lg:text-4xl">
            Carbon Footprint
          </div>
          <div className="bg-[#0000008f] w-[300px] h-[80px] text-white flex justify-center items-center text-2xl lg:w-[580px] lg:h-[118px] cursor-pointer hover:bg-black rounded-l-full lg:text-4xl">
            Awarness
          </div>
        </div>
      </div>

      </Fade>

<Fade>
      <div className="grid grid-cols-1 pt-16 lg:grid-cols-2 pl-6 mx-12">
        <div>
          <Link>
            <img
              src={ad}
              alt="ad"
              className="mb-4 hover:shadow-xl cursor-pointer rounded-xl"
            />
          </Link>
          <Link to="/awarness">
            <img
              src={awarness}
              alt="awarness"
              className="hover:shadow-xl cursor-pointer rounded-xl"
            />
          </Link>
        </div>
        <div>
          <Link to="/complainland">
            <img
              src={complain}
              alt="complain"
              className="mb-4 hover:shadow-xl cursor-pointer rounded-xl"
            />
          </Link>
          <Link to="/game">
            <img
              src={game}
              alt="game"
              className="hover:shadow-xl cursor-pointer rounded-xl"
            />
          </Link>
        </div>
      </div>
      </Fade>

      <Fade>

      <div
      >
      <div className="relative top-52"><h1 className="pt-20 text-xl font-semibold lg:text-2xl ml-8 pl-12 text-black">
          Banish waste worries! Our scheduling feature gives you the power. Just
          click 'schedule,' pick your perfect time, and we'll handle the rest,
          keeping your space clean and green.
        </h1>
        <Link to="/garbagecar">
          <button className="ml-20 text-2xl font-medium bg-[#3D684E] text-white h-[76px] w-[350px] rounded-lg mt-7 hover:bg-lime-950">
            Grbage Car Tracking
          </button>
        </Link></div>
      
      <img src={garbagecar} alt="img" className="h-full w-full object-cover" />
        
      </div>
      </Fade>

<Fade>
      <div>
        <div className="text-center text-3xl font-extrabold text-[#1F3E28] lg:text-5xl py-12">
          Do You Know About The 3R’s?
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6 px-16">
          <div className="bg-white h-[570px] w-[400px] rounded-xl shadow-xl cursor-pointer hover:shadow-2xl">
            <img src={recycle} alt="img" className="mx-auto mt-12 mb-11" />
            <h1 className="text-center text-3xl text-[#44A685]">Recycle</h1>
            <p className="text-center font-light py-3 text-[#1f3e2890] mx-10">
              "Waste Not, Want Not."
            </p>
          </div>
          <div className="bg-white h-[570px] w-[400px] rounded-xl shadow-xl cursor-pointer hover:shadow-2xl">
            <img src={reduce} alt="img" className="mx-auto mt-12 mb-11" />
            <h1 className="text-center text-3xl text-[#44A685]">Reduce</h1>
            <p className="text-center font-light py-3 text-[#1f3e2890] mx-10">
              "Less Waste, More Planet."
            </p>
          </div>
          <div className="bg-white h-[570px] w-[400px] rounded-xl shadow-xl cursor-pointer hover:shadow-2xl">
            <img src={reuse} alt="img" className="mx-auto mt-12 mb-11" />
            <h1 className="text-center text-3xl text-[#44A685]">Reuse</h1>
            <p className="text-center font-light py-3 text-[#1f3e2890] mx-10">
              "Give Old Things New Life."
            </p>
          </div>
        </div>
      </div>
      </Fade>

      <Fade>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-12">
        <div className="py-6">
          <h1 className="text-4xl font-black text-[#1F3E28] lg:text-6xl pt-12 pl-10">
            And What Do You Get From This ?
          </h1>
          <p className="text-[#41A486] pl-10 pt-6 mr-40">
            Explore a world of rewards with us! Begin your journey on our site
            with zero coins, but as you take eco-friendly actions like
            scheduling waste pickups or shopping sustainably, you'll earn coins
            as a token of appreciation for your dedication to a greener planet.
          </p>
        </div>
        <img src={coins} alt="coins" />
      </div>
      </Fade>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-12">
        <img src={shop} alt="coins" />
        <div className="py-6">
          <p className="text-[#41A486] pl-10 pt-12 mr-40">
            Once you've gathered a significant number of coins, and you can shop
            on our e-commerce platform for biodegradable products, all without
            spending a dime from your pocket.
          </p>
          <Link to="/shop"><button className="ml-8 text-2xl font-medium bg-[#3D684E] text-white h-[76px] w-[430px] rounded-lg mt-7 hover:bg-lime-950">
            Shop From Our Store
          </button></Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
