import React, { useState, useEffect } from "react";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import complainbg from "../assets/complainbg.svg";
import convertToBase64 from "../helper/convert";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";

const Fire = () => {
  const { username } = useAuthStore((state) => state.auth);
  const [{ apiData }] = useFetch(`/user/${username}`);
  const [file, setfile] = useState();
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  };
  const [formData, setFormData] = useState({
    name: apiData?.username || "",
    email: apiData?.email || "not available",
    house: "",
    img: "",
    address: apiData?.address || "",
    type: "fire watch",
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
      const response = await fetch("http://localhost:5000/send-com", {
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
    <div>
      <div>
        <Navbersec />
      </div>
      <div
        className="bg-cover bg-center h-auto pb-60 bg-no-repeat"
        style={{ backgroundImage: `url(${complainbg})` }}
      >
        <h1 className="text-center text-5xl lg:text-8xl font-bold text-white pt-20">
          {" "}
          YOUR <span className="text-[#DDFDE6]">PLANET</span> NEEDS YOU
        </h1>
        <h1 className="text-white/60 text-center text-lg lg:text-2xl pt-4">
          Having Any Problem ? Do Let Us Know So That We Can Fix It
        </h1>
        <div className="flex justify-center pt-24 mx-16 lg:mx-32">
          <input
            className="h-[72px] w-full rounded-l-md lg:text-xl pl-6"
            placeholder="Send Direct Complain To Your Nearest Authority"
          />
          <div className="h-[72px] bg-[#4BAB83] rounded-r-md text-center text-white font-bold text-2xl py-5 px-10">
            Proceed
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-12">
        <h1 className="text-center text-3xl font-bold text-[#4BAB83]">
          Report Fire Issue
        </h1>
        <div className="flex justify-center py-12">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-10">
              <label className="font-bold text-black/80">
                Enter Name
                <input
                  type="text"
                  className="bg-white w-full my-2 h-10 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                onChange={handleChange}
                />
              </label>
              <label className="font-bold text-black/80">
                Enter House No
                <input
                  type="text"
                  className="bg-white w-full my-2 h-10 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
                  name="house"
                  placeholder="house no."
                  value={formData.house}
                onChange={handleChange}
                />
              </label>
            </div>
            <label className="font-bold text-black/80">
              Enter Address
              <input
                type="text"
                className="bg-white w-full my-2 h-10 rounded-lg shadow-lg border-2 text-black p-3 font-medium"
                name="address"
                placeholder="address of occurrence"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            <label className="font-bold text-black/80">
              Upload Photo
              <input type="file" name="img" placeholder="upload photo" onChange={onUpload} />
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
      <Footer />
    </div>
  );
};

export default Fire;
