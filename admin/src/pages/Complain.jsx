import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const Complain = () => {
  const [comData, setComData] = useState([]);

  useEffect(() => {
    fetchComData();
  }, []);

  const fetchComData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-com-data");
      if (response.ok) {
        const jsonData = await response.json();
        setComData(jsonData.data);
        console.log(comData);
      } else {
        throw new Error("Failed to fetch complaint data");
      }
    } catch (error) {
      console.error("Error fetching complaint data:", error);
    }
  };

  return (
    <main>
      <div className="flex h-screen">
        <Sidebar />
        <div className="px-6">
          <p className="text-3xl font-semibold pt-3 text-black/60 pb-6">
            Complaints received
          </p>
          <div className="flex flex-col gap-7">
            {comData.map((item, index) => (
              <div key={index} className="border-2 rounded-lg p-4 w-[1000px]">
                <p className="text-lg font-semibold">
                  Name: <span className="text-[#2A8A81]">{item[0]}</span>
                </p>
                <p className="text-lg font-semibold">
                  E mail: <span className="text-[#02605C]">{item[1]}</span>
                </p>
                <p className="text-lg font-semibold">House No: {item[2]}</p>
                <p className="text-lg font-semibold">
                  Address: <span className="font-normal">{item[4]}</span>
                </p>
                <p className="text-lg font-semibold">
                  Complaint type:{" "}
                  <span className="text-[#970707]">{item[5]}</span>
                </p>
                <p>Description: {item[3]}</p>
                <button className="bg-[#2A8E64] h-[60px] w-[260px] text-white text-center text-2xl rounded-lg  mt-10">
                  Take Action
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Complain;
