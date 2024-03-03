import React from "react";

const ProductImage = (props) => {
  return (
    <>
      <div className="w-[564.96px] h-[677.95px] pl-[41.02px] pr-[42.94px] pt-[24.88px] pb-[24.58px] bg-neutral-100 rounded shadow flex-col justify-center items-center inline-flex">
        {props.image && (
          <img className="w-[481px] h-[628.49px]" src={props.image} />
        )}
      </div>
    </>
  );
};

export default ProductImage;
