import React from "react";
import authimg from "../assets/authimg.svg";
import { Link, useNavigate } from "react-router-dom";

import userpass from "../assets/userpass.svg";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";

const Password = () => {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise.then((res) => {
        let { token } = res.data;
        localStorage.setItem("token", token);
        navigate("/home");
      });
    },
  });

  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="pl-12 pt-20">
        <h1 className="text-3xl font-medium text-[#3D684E]">
          Hello {apiData?.firstName || apiData?.username}, Start Your
        </h1>
        <p className="pt-2 text-5xl font-bold text-[#3D684E]">
          Go-Green Journey?
        </p>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex pt-24">
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
            className="bg-[#2A8E64] h-[60px] w-[460px] text-white text-center text-3xl rounded-lg shadow-lg mt-10"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <h1 className="text-center text-lg w-[450px] pt-12">
          Forgot Password ? ?{" "}
          <Link to="/recovery">
            <span className="text-[#2A8E64] underline">recover now!</span>
          </Link>
        </h1>
      </div>
      <div>
        <img src={authimg} alt="authimg" />
      </div>
    </div>
  );
};

export default Password;
