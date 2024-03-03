import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";


const GarbagecarForm = () => {
  const { username } = useAuthStore(state => state.auth)
  const [{ apiData }] = useFetch(`/user/${username}`)
  const [formData, setFormData] = useState({
    type: "Community car",
    name: apiData?.username || "Unknown",
    email: apiData?.email || "not available",
    date: "",
    time: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.alert("Your request is submitted!");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      console.log(error);
      window.alert("Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border-2 rounded-lg drop-shadow-xl w-[600px] h-[580px]">
      <div className="text-center py-6 px-2 border-2">
        <h1>
          Personal Cart Service is jbdjncjksdn sbxsabncsj nxjnaskmcd Extra
          charges are charged for the service.Personal Cart is jbdjncjksdn.
        </h1>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <label className="text-black/80 font-semibold">Cart type</label>
          <div className="flex gap-6 py-3">
            <div className="bg-[#8FEA8D] h-[40px] w-[200px] text-center text-black py-2 rounded-lg cursor-pointer active:border-black active:border-2">
              Personal Cart
            </div>
            <div className="bg-[#518F6E] h-[40px] w-[200px] text-center text-white py-2 rounded-lg cursor-pointer active:border-black active:border-2">
              Community Cart
            </div>
          </div>
          <div className="flex gap-6 py-6">
            <label className="font-bold text-black/80">
              Select Date
              <input
                type="date"
                className="bg-white w-full my-2 h-10 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
            <label className="font-bold text-black/80">
              Select Time
              <input
                type="time"
                className="bg-white w-full my-2 h-10 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className="font-bold  text-black/80">
            Select Address
            <input
              type="text"
              className="bg-white w-full my-2 h-12 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
              placeholder="address"
              name="address"
                value={formData.address}
                onChange={handleChange}
            />
          </label>
          <div className="flex justify-center pb-12">
            <button
              type="submit"
              className="bg-[#518F6E] h-[55px] w-[200px] text-center text-white my-10 rounded-lg cursor-pointer active:border-black active:border-2 hover:bg-[#0d3b22]"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GarbagecarForm;
