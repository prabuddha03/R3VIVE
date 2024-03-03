import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import extend from "../styles/Profile.module.css";
import useFetch from "../hooks/fetch.hook";
import { updateUser } from "../helper/helper";

import authimg from "../assets/authimg.svg";


const Profile = () => {
  const [file, setfile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || "",
      lastName: apiData?.lastName || "",
      email: apiData?.email || "",
      mobile: apiData?.mobile || "",
      address: apiData?.address || "",
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating...",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setfile(base64);
  };

  // logout handler function
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="pl-12 pt-20">
        <h1 className="text-3xl font-medium text-[#3D684E]">
          Let's Start Your
        </h1>
        <p className="pt-2 text-5xl font-bold text-[#3D684E]">
          Go-Green Journey!
        </p>

        <form  onSubmit={formik.handleSubmit}>
          <div className="flex pt-6 pl-32">
            <label htmlFor="profile">
              <img
                src={apiData?.profile || file || avatar}
                className={`${styles.profile_img} ${extend.profile_img}`}
                alt="avatar"
              />
            </label>

            <input
              onChange={onUpload}
              type="file"
              id="profile"
              name="profile"
            />
          </div>

          <div className="textbox flex flex-col pt-6 gap-6">
            <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("firstName")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="FirstName"
              />
              <input
                {...formik.getFieldProps("lastName")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="LastName"
              />
            </div>

            <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("mobile")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Mobile No."
              />
              <input
                {...formik.getFieldProps("email")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="Email*"
              />
            </div>

            <input
              {...formik.getFieldProps("address")}
              className={`${styles.textbox} ${extend.textbox}`}
              type="text"
              placeholder="Address"
            />
            <button
              className="bg-[#2A8E64] h-[60px] w-[460px] text-white text-center text-3xl rounded-lg shadow-lg mt-6"
              type="submit"
            >
              Go Green!
            </button>
          </div>

          <div className="text-center text-lg w-[450px] py-6">
            <span className="text-gray-500">
              come back later?{" "}
              <button onClick={userLogout} className="text-[#2A8E64] underline" to="/">
                Logout
              </button>
            </span>
          </div>
        </form>
      </div>
      <div>
        <img src={authimg} alt="authimg" />
      </div>
    </div>
  );
};

export default Profile;
