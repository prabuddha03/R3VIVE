import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="w-[306px] h-[387px] bg-white rounded-lg shadow border flex flex-col pt-4 items-center">
            {props.image && <img className="w-[276px] h-[222px] rounded-lg" src={props.image} />}
            <div className="flex flex-row justify-between gap-24 items-center pt-1">
              <div className="opacity-70 text-black text-2xl font-normal font-[poppins]">
                {props.title}
              </div>
              <div className="text-[#2A8E64] text-xl font-normal font-[poppins]">
                {props.price}
              </div>
            </div>
            <div className="opacity-40 text-black text-[8.77px] font-normal font-[poppins] self-start pl-6">
              {props.description}
            </div>
            <div className="self-start pl-6">
              <div className="w-[46.77px] h-[11.39px] px-[4.39px] py-[2.19px] bg-white rounded-sm border border-[#2A8E64] justify-center items-center gap-[10.97px] inline-flex">
                <div className="text-neutral-600 text-[6.58px] font-normal font-[poppins] leading-[6.58px]">
                  {props.tag}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-6 pl-8">
            <div className="w-[99.68px] h-7 bg-white rounded-sm shadow border border-[#2A8E64] flex flex-row gap-1 pl-1 items-center" >
            <box-icon name='shopping-bag' color='#2a8e64' ></box-icon>
            <Link to="/product"><div className="text-[#2A8E64] text-sm font-normal font-[poppins] leading-[13.44px] cursor-pointer">Buy Now</div></Link>
            </div>
            <div className="w-[119.84px] h-7 bg-[#2A8E64] rounded-sm flex flex-row gap-1 pl-1 items-center" >
            <box-icon name='cart' color='#ffffff' ></box-icon>
            <div className="text-white text-sm font-normal font-[poppins] leading-[13.44px]">Add to cart</div>
            </div>
            </div>
          </div>
    </div>
  )
}

export default Card
