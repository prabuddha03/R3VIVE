import React from "react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";

const Navbar = () => {
  const { username } = useAuthStore(state => state.auth)
  const [{ apiData}] = useFetch(`/user/${username}`)
  return (
   
      <div className="flex justify-between px-12 pt-8 w-full">
        <Link to="/home"><h1 className="text-3xl font-bold cursor-pointer text-black">R3VIVE</h1></Link>
        <Link to="/home"><div className="text-lg font-semibold lg:text-xl cursor-pointer text-[#36461E]">Home</div></Link>
          <div className="text-lg font-semibold lg:text-xl cursor-pointer text-[#36461E]">Services</div>
          <Link to="/shop"><div className="text-lg font-semibold lg:text-xl cursor-pointer text-[#36461E]">Our Store</div></Link>
          <div className="text-lg font-semibold lg:text-xl cursor-pointer text-[#36461E]">Blogs</div>
          <div className="text-lg font-semibold lg:text-xl cursor-pointer text-[#36461E]">Contact Us</div>
          <Link to="/profile"><img src={apiData?.profile || profile} alt="profile" className="w-12 h-12 cursor-pointer" /></Link>
        </div>
      

      
  );
};

export default Navbar;                                                       
