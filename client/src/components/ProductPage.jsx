import React from "react";
import ProductSubImg from "./ProductSubImg";
import heroImg from "../assets/heroImg.png";
import ncstar from "../assets/ncstar.png";
import cstar from "../assets/cstar.png";
import ProductImage from "./ProductImage";
import ProductCards from "./ProductCards";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";

const ProductPage = () => {
  return (
    <div>
    <Navbersec />
      {/* heading */}
      <div className="my-8 pl-20">
        <div className="w-[452.79px] h-6 justify-start items-center gap-[13.56px] flex flex-row">
          <div className="opacity-50 text-black text-sm font-normal font-[poppins] leading-[21px]">
            Our Store
          </div>
          <span className="opacity-50 ">/</span>
          <div className="opacity-50 text-black text-sm font-normal font-[poppins] leading-[21px]">
            Household
          </div>
          <span className="opacity-50 ">/</span>
          <div className="text-black text-sm font-normal font-[poppins] leading-[21px]">
            Tin-Box as kitchen Organiser
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-row justify-evenly items-center">
        <div className="flex flex-col gap-2">
          <ProductSubImg image={heroImg} />
          <ProductSubImg image={heroImg} />
          <ProductSubImg image={heroImg} />
          <ProductSubImg image={heroImg} />
        </div>
        <div>
          <ProductImage image={heroImg} />
        </div>
        <div className="flex flex-col justify-start gap-3">
          {/* product title */}
          <div className="text-black text-[27.12px] font-semibold font-[inter] leading-[27.12px] tracking-wide">
            Tin-Box as kitchen Organizer
          </div>
          {/* review n stock */}
          <div className="flex flex-row justify-start gap-4 items-center my-2">
            <div className="flex flex-row gap-1">
              <img src={cstar} />
              <img src={cstar} />
              <img src={cstar} />
              <img src={cstar} />
              <img src={ncstar} />
            </div>
            <div className="opacity-50 text-black text-base font-normal font-[poppins] leading-normal">
              (150 Reviews)
            </div>
            <span>|</span>
            <div className="opacity-60 text-[#044C0B] text-base font-bold font-[poppins] leading-normal">
              In Stock
            </div>
          </div>
          {/* price */}
          <div className="text-black text-[27.12px] font-normal font-[inter] leading-[27.12px] tracking-wide">
            ₹192.00
          </div>
          {/* description */}
          <div className="w-[421.46px] text-black text-base font-normal font-[poppins] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            consequat urna. Phasellus at eleifend tortor. Nulla facilisi. Proin
            auctoret justo bibendum, sit amet pharetra ex laoreet.
          </div>
          {/* line */}
          <div className="w-[451.97px] h-[0px] opacity-50 justify-center items-center inline-flex">
            <div className="w-[451.97px] h-[0px] border border-black"></div>
          </div>
          {/* colors */}
          <div className="flex flex-row gap-4">
            <div className="text-black text-[22.60px] font-normal font-[inter] leading-snug tracking-wide">
              Colours:
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-[22.60px] h-[22.60px] left-0 top-0 rounded-full border-2 border-black hover:bg-[#a0bce0]" />
              <div className="w-[22.60px] h-[22.60px] bg-red-400 rounded-full" />
            </div>
          </div>
          {/* size */}
          <div className="flex flex-row gap-4">
            <div className="text-black text-[22.60px] font-normal font-[inter] leading-snug tracking-wide">
              Size:
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="w-[36.16px] h-[36.16px] px-[7.91px] py-[6.78px] rounded border border-black border-opacity-50 justify-center items-center flex">
                <div className="w-[20.34px] h-[22.60px] text-black text-base font-medium font-[poppins] leading-normal">
                  XS
                </div>
              </div>
              <div className="w-[36.16px] h-[36.16px] py-[6.78px] rounded border border-black border-opacity-50 justify-center items-center inline-flex">
                <div className="w-[9.04px] h-[22.60px] text-black text-base font-medium font-[poppins] leading-normal">
                  S
                </div>
              </div>
              <div className="w-[36.16px] h-[36.16px] px-[11.30px] py-[6.78px] bg-[#2A8E64] rounded justify-center items-center inline-flex">
                <div className="w-[13.56px] h-[22.60px] text-neutral-50 text-base font-medium font-[poppins] leading-normal">
                  M
                </div>
              </div>
              <div className="w-[36.16px] h-[36.16px] py-[6.78px] rounded border border-black border-opacity-50 justify-center items-center inline-flex">
                <div className="w-[6.78px] h-[22.60px] text-black text-base font-medium font-['Poppins'] leading-normal">
                  L
                </div>
              </div>
              <div className="w-[36.16px] h-[36.16px] px-[9.04px] py-[6.78px] rounded border border-black border-opacity-50 justify-center items-center inline-flex">
                <div className="w-[18.08px] h-[22.60px] text-black text-base font-medium font-['Poppins'] leading-normal">
                  XL
                </div>
              </div>
            </div>
          </div>

          {/* total items and buy now */}
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-row justify-center items-center">
              <div className="w-[45.20px] h-[49.72px] px-[9.04px] py-[11.30px] rounded-tl rounded-bl border border-black border-opacity-50 flex-col justify-center items-center inline-flex">
                <div className="w-[27.12px] h-[27.12px] relative flex-col justify-start items-start flex">
                  <box-icon name="minus"></box-icon>
                </div>
              </div>
              <div className="w-[90.39px] h-[49.72px] pt-[9.04px] pb-[8.68px] border-t border-b border-black border-opacity-50 justify-center items-center inline-flex">
                <div className="text-black text-[22.60px] font-medium font-[poppins] leading-loose">
                  2
                </div>
              </div>
              <div className="w-[46.33px] h-[49.72px] pl-[10.17px] pr-[9.04px] py-[11.30px] bg-[#2A8E64] rounded-tr rounded-br flex-col justify-center items-center inline-flex">
                <div className="w-[27.12px] h-[27.12px] relative flex-col justify-start items-start flex">
                  <box-icon name="plus" color="#ffffff"></box-icon>
                </div>
              </div>
            </div>
            <div className="w-[186.47px] h-[50.60px] px-[54.24px] py-[11.30px] bg-[#2A8E64] rounded justify-center items-center gap-[11.30px] inline-flex">
              <div className="text-neutral-50 text-base font-medium font-[poppins] leading-normal">
                Buy Now
              </div>
            </div>
            <div className="w-[45.20px] h-[45.20px] p-[4.52px] rounded border border-black border-opacity-50 justify-center items-center inline-flex">
              <div className="w-[36.16px] h-[36.16px] relative justify-center items-center flex">
                <box-icon name="heart"></box-icon>
              </div>
            </div>
          </div>

          {/* delivery */}
          <div className="w-[450.84px] h-[203.38px] relative rounded border border-black border-opacity-50 flex flex-col justify-center items-center mt-10">
            <div className="flex flex-row items-center gap-6 pb-4">
              <box-icon name="truck" type="solid"></box-icon>
              <div className="flex flex-col justify-start gap-2">
                <div className="text-black text-lg font-medium font-[poppins] leading-[27.12px]">
                  Free Delivery
                </div>
                <div className="text-black text-sm font-medium font-[poppins] underline leading-tight">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
            <div className="w-[450.84px] h-[0px] opacity-50 justify-center items-center inline-flex">
              <div className="w-[450.84px] h-[0px] border border-black"></div>
            </div>
            <div className="flex flex-row justify-start items-center gap-6 py-2 pr-16">
              <box-icon name="recycle"></box-icon>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-black text-lg font-medium font-[poppins] leading-[27.12px]">
                  Return Delivery
                </div>
                <div>
                  <span className="text-black text-sm font-medium font-[poppins] leading-tight">
                    Free 30 Days Delivery Returns.{" "}
                  </span>
                  <span className="text-black text-sm font-medium font-[poppins] underline leading-tight">
                    Details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related item */}
      <div className="flex flex-row items-center gap-4 pl-20 mt-20">
        <div className="w-[20.98px] h-[41.96px] relative">
          <div className="w-[20.98px] h-[41.96px] left-0 top-0 absolute bg-[#2A8E64] rounded" />
        </div>
        <div className="text-[#2A8E64] text-base font-semibold font-[poppins] leading-[20.98px]">
          Related Item
        </div>
      </div>
      {/* products */}
      <div className="my-8 pl-6">
        <ProductCards />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
