import { useEffect, useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"
import Complain from "./pages/Complain";
import CartRequest from "./pages/CartRequest";
import GarbageBin from "./pages/GarbageBin";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login />} />
           <Route path="/complain" element={<Complain />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/car-request" element={<CartRequest />} />
            <Route path="/bins" element={<GarbageBin />}/>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
