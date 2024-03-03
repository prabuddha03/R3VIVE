import React from "react";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";

const Navbersec = () => {
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);
  return (
    <div className="flex justify-between p-4 text-center shadow-lg">
      <Link to="/home"><h1 className="text-black text-xl font-semibold pl-8">R3VIVE</h1></Link>
      <div className="flex justify-between gap-20">
        <Link to="/home"><h1 className="cursor-pointer text-black/70 hover:text-black">Home</h1></Link>
        <details className="dropdown dropdown-bottom">
          <summary className="cursor-pointer text-black/70 hover:text-black">
            Services
          </summary>
          <ul>
            <li>Services1</li>
            <li>Services1</li>
          </ul>
        </details>
        <Link to="/shop"><h1 className="cursor-pointer text-black/70 hover:text-black">
          Our Store
        </h1></Link>
        <h1 className="cursor-pointer text-black/70 hover:text-black">Blogs</h1>
        <h1 className="cursor-pointer text-black/70 hover:text-black">
          Contact Us
        </h1>
      </div>

      <Link to="/profile" className="pr-8">
        <img
          src={apiData?.profile || profile}
          alt="profile"
          className="w-9 h-9 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Navbersec;
