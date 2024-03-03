import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const CartRequest = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-data");
      if (response.ok) {
        const jsonData = await response.json();
        setFormData(jsonData.data);
      } else {
        throw new Error("Failed to fetch form data");
      }
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  return (
    <main>
      <div className="flex h-screen">
        <Sidebar />
        <div className="px-6">
          <p className="text-3xl font-semibold pt-3 text-black/60 pb-6">
            Pending Cart Requests
          </p>
          <div className="grid grid-cols-3 gap-6">
            {formData.map((item, index) => (
              <div
                key={index}
                className="border-2 rounded-lg p-5 border-green-600/35 hover:bg-green-600 hover:text-white transition delay-150 cursor-pointer"
              >
                <p className="font-bold text-lg">
                  Requirement: <span className="text-red-600">{item[0]}</span>
                </p>
                <div className="flex gap-4">
                  <p className="text-lg font-semibold">Date: {item[3]}</p>
                  <p className="text-lg font-semibold">Time: {item[4]}</p>
                </div>
                <p className="font-semibold">Address: {item[5]}</p>
                <p>User: {item[1]}</p>
                <p>Email: {item[2]}</p>
                <button className="bg-[#0c4b31f1] h-[60px] w-full text-white text-center text-2xl rounded-lg  mt-10">
                  Approve
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartRequest;
