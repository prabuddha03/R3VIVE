import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import authimg from "../assets/authimg.svg";
import user from "../assets/user.svg";

const Username = () => {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate("/password");
    },
  });

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="pl-12 pt-20">
        <h1 className="text-3xl font-medium text-[#3D684E]">Ready For Your</h1>
        <p className="pt-2 text-5xl font-bold text-[#3D684E]">
          Go-Green Journey?
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex pt-24">
            <div className="bg-[#97ffd482] w-[63px] shadow-lg rounded-l-lg ">
              <img src={user} alt="user" className="mx-auto mt-3" />{" "}
            </div>
            <input
              {...formik.getFieldProps("username")}
              className="h-[60px] w-[400px] rounded-r-lg shadow-lg pl-4 bg-white"
              type="text"
              placeholder="Username"
            />
          </div>

          <button
            className="bg-[#2A8E64] h-[60px] w-[460px] text-white text-center text-3xl rounded-lg shadow-lg mt-10"
            type="submit"
          >
            Lets Go
          </button>
        </form>
        <h1 className="text-center text-lg w-[450px] pt-12">
          New Here ?{" "}
          <Link to="/register">
            <span className="text-[#2A8E64] underline">
              create an acoount !
            </span>
          </Link>
        </h1>
        <div>
          <h1 className="text-center w-[450px] text-gray-600 text-lg pt-12">
            Signup With :
          </h1>
          <div className="w-[450px] flex justify-between"></div>
        </div>
      </div>
      <div>
        <img src={authimg} alt="authimg" />
      </div>
    </div>
  );
};

export default Username;
