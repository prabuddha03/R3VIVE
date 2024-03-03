import React from "react";
import EnvironmentalPlanning from "../assets/EnvironmentalPlanning.png";
import Art from "../assets/Art.png";
import Garden from "../assets/Garden.png";
import Man from "../assets/Man.png";
import Waitress from "../assets/Waitress.png";
import Tie from "../assets/Tie.png";
import ProductCards from "./ProductCards";

const Category = () => {
  return (
    <div>
      {/* search bar */}
      <div className="py-8 flex flex-row justify-center items-center gap-4">
        <div className="pt-2 relative shadow-md text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[1084px]"
            type="search"
            name="search"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="pt-3">
          <box-icon name="heart"></box-icon>
        </div>
        <div className="pt-3">
          <box-icon name="cart-alt"></box-icon>
        </div>
      </div>

      {/* heading */}
      <div className="flex flex-row items-center gap-4 pl-6">
        <div className="w-[20.98px] h-[41.96px] relative">
          <div className="w-[20.98px] h-[41.96px] left-0 top-0 absolute bg-[#2A8E64] rounded" />
        </div>
        <div className="text-[#2A8E64] text-base font-semibold font-[poppins] leading-[20.98px]">
          Categories
        </div>
      </div>

      {/* subheading */}
      <div className="flex flex-row items-center px-6 justify-between">
        <div className="text-black text-[37.76px] font-semibold font-[poppins] leading-[50.35px] tracking-wider">
          Browse By Category
        </div>
        <div className=" flex flex-row gap-2">
          <div className="rounded-full w-[42px] h-[42px] bg-neutral-100 items-center flex justify-center">
            <box-icon name="left-arrow-alt"></box-icon>
          </div>
          <div className="rounded-full w-[42px] h-[42px] bg-neutral-100 items-center flex justify-center">
            <box-icon name="right-arrow-alt"></box-icon>
          </div>
        </div>
      </div>

      {/* boxes */}
      <div className="flex flex-row justify-evenly items-center gap-4 my-20">
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={EnvironmentalPlanning} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Household
          </div>
        </div>
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={Art} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Art & Craft
          </div>
        </div>
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={Waitress} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Women
          </div>
        </div>
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={Man} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Men
          </div>
        </div>
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={Garden} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Gardening
          </div>
        </div>
        <div className="w-[172px] h-[156px] border border-black border-opacity-25 rounded-md bg-white flex justify-center items-center flex-col">
          <img src={Tie} alt="" />
          <div className="text-black text-2xl font-medium font-[poppins] leading-loose tracking-wide">
            Accessories
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="my-8 flex flex-col gap-8">
        <ProductCards />
        <ProductCards />
      </div>

      <div className="my-20 flex justify-center">
        <div className="w-[264.52px] h-[64.17px] px-[54.26px] py-[18.09px] bg-green-900 bg-opacity-90 rounded justify-center items-center gap-[11.30px] inline-flex">
          <div className="text-neutral-50 text-base font-medium font-[poppins] leading-normal">
            View All Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
