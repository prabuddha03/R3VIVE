import React from "react";

const WastebinData = (props) => {
  return (
    <div className="h-[120px] w-full border-2 grid grid-cols-2 p-6">
      <h1 className="text-xl font-bold">Bin No: {props.binno}</h1>
      <h1 className="text-center font-bold text-xl text-[#2A8E64]">
        Status: <span className="text-[#FF0505]">{props.filled} filled</span>{" "}
      </h1>
      <h1 className="font-semibold">S.I no: {props.sino}</h1>
      <div className="text-center bg-[#518F6E] text-white font-semibold rounded-lg mx-9 pt-1 cursor-pointer">
        Locate
      </div>
    </div>
  );
};

export default WastebinData;
