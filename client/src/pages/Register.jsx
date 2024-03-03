import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";

import authimg from "../assets/authimg.svg";
import user from "../assets/user.svg";
import usermail from "../assets/usermail.svg";
import userpass from "../assets/userpass.svg";

const Register = () => {
  const navigate = useNavigate();
  const [file, setfile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating....",
        success: <b>Register Successfully</b>,
        error: <b>Could not register</b>,
      });
      registerPromise.then(function () {
        navigate("/");
      });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  };

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="pl-12 pt-20">
        <h1 className="text-3xl font-medium text-[#3D684E]">
          Take A Leap Towards Your
        </h1>
        <p className="pt-2 text-5xl font-bold text-[#3D684E]">
          Go-Green Journey!
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex pt-6 pl-32">
            <label htmlFor="profile">
              <img
                src={file || avatar}
                alt="avatar"
                className={styles.profile_img}
              />
            </label>
            <input
              type="file"
              id="profile"
              name="profile"
              onChange={onUpload}
            />
          </div>

          <div className="flex pt-8">
            <div className="bg-[#97ffd482] w-[63px] shadow-lg rounded-l-lg ">
              <img src={usermail} alt="user" className="mx-auto mt-3" />{" "}
            </div>
            <input
              {...formik.getFieldProps("email")}
              className="h-[60px] w-[400px] rounded-r-lg shadow-lg pl-4 bg-white"
              type="email"
              placeholder="Email*"
            />
          </div>

          <div className="flex pt-6">
            <div className="bg-[#97ffd482] w-[63px] shadow-lg rounded-l-lg ">
              <img src={user} alt="user" className="mx-auto mt-3" />{" "}
            </div>
            <input
              {...formik.getFieldProps("username")}
              className="h-[60px] w-[400px] rounded-r-lg shadow-lg pl-4 bg-white"
              type="text"
              placeholder="Username*"
            />
          </div>

          <div className="flex pt-6">
            <div className="bg-[#97ffd482] w-[63px] shadow-lg rounded-l-lg ">
              <img src={userpass} alt="user" className="mx-auto mt-3" />{" "}
            </div>
            <input
              {...formik.getFieldProps("password")}
              className="h-[60px] w-[400px] rounded-r-lg shadow-lg pl-4 bg-white"
              type="password"
              placeholder="Password"
            />
          </div>

          <button
            className="bg-[#2A8E64] h-[60px] w-[460px] text-white text-center text-3xl rounded-lg shadow-lg mt-6"
            type="submit"
          >
            Proceed
          </button>
        </form>

        <h1 className="text-center text-lg w-[450px] py-6">
          Already registered?
          <Link to="/">
            <span className="text-[#2A8E64] underline">Login Now!</span>
          </Link>
        </h1>
      </div>

      <div>
        <img src={authimg} alt="authimg" />
      </div>
    </div>
  );
};

export default Register;
