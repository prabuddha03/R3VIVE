import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authimg from "../assets/authimg.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      const data = await response.json();

      if (data.role !== "admin") {
        throw new Error("Only admin users can login.");
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div className="pl-12 pt-20">
        <h1 className="text-3xl font-medium text-[#3D684E]">Ready For Your</h1>
        <p className="pt-2 text-5xl font-bold text-[#3D684E]">Admin Journey?</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 pt-24">
            <input
              className="h-[60px] w-[400px] rounded-lg shadow-lg pl-4 border-green-500 border-2 bg-white"
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="h-[60px] w-[400px] rounded-lg shadow-lg pl-4 bg-white border-green-500 border-2"
            />
          </div>

          <button
            className="bg-[#2A8E64] h-[60px] w-[460px] text-white text-center text-3xl rounded-lg shadow-lg mt-10"
            type="submit"
          >
            Lets Go
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <div>
        <img src={authimg} alt="authimg" />
      </div>
    </main>
  );
};

export default Login;
