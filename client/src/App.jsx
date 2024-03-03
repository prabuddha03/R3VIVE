import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

/** import all components */
import Username from "./pages/Username";
import Password from "./pages/Password";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Recovery from "./pages/Recovery";
import Reset from "./pages/Reset";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import WaterAtm from "./pages/WaterAtm";

/** auth middleware */
import { AuthorizeUser, ProtectRoute } from "./middleware/auth";
import Garbagecar from "./pages/Garbagecar";
import ComplainLand from "./pages/ComplainLand";
import Trash from "./pages/Trash";
import Litter from "./pages/Litter";
import Fire from "./pages/Fire";
import Shop from "./pages/Shop";
import ProductPage from "./components/ProductPage";
import Game from "./pages/Game";
import Awarness from "./pages/Awarness";
import ChatbotBubble from "./components/ChatbotBubble";
import RewardBubble from "./components/RewardBubble";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: (
      <ProtectRoute>
        <Password />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthorizeUser>
        <Profile />
      </AuthorizeUser>
    ),
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "/home",
    element: (
      <AuthorizeUser>
        <Home />
      </AuthorizeUser>
    ),
  },
  {
    path: "/wateratm",
    element: (
      <Wrapper>
        <AuthorizeUser>
          <WaterAtm />
        </AuthorizeUser>
      </Wrapper>
    ),
  },
  {
    path: "/garbagecar",
    element: (
      <Wrapper>
        <AuthorizeUser>
          <Garbagecar />
        </AuthorizeUser>
      </Wrapper>
    ),
  },
  {
    path: "/complainland",
    element: (
      <Wrapper>
        {" "}
        <AuthorizeUser>
          <ComplainLand />
        </AuthorizeUser>
      </Wrapper>
    ),
  },
  {
    path: "/trash",
    element: (
      <AuthorizeUser>
        <Trash />
      </AuthorizeUser>
    ),
  },
  {
    path: "/litter",
    element: (
      <AuthorizeUser>
        <Litter />
      </AuthorizeUser>
    ),
  },
  {
    path: "/fire",
    element: <Fire />,
  },
  {
    path: "/shop",
    element: (
      <Wrapper>
        <Shop />
      </Wrapper>
    ),
  },
  {
    path: "/product",
    element: (
      <Wrapper>
        <ProductPage />
      </Wrapper>
    ),
  },
  {
    path: "/game",
    element: (
      <Wrapper>
        <AuthorizeUser>
          <Game />
        </AuthorizeUser>
      </Wrapper>
    ),
  },
  {
    path: "/awarness",
    element: (
      <Wrapper>
        {" "}
        <AuthorizeUser>
          <Awarness />
        </AuthorizeUser>
      </Wrapper>
    ),
  },
]);

export default function App() {
  return (
    <main>
    <RewardBubble />
      <ChatbotBubble />
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
