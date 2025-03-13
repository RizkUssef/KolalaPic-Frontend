import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Animal from "./components/Animal/Animal";
import Calm from "./components/Calm/Calm";
import Couple from "./components/Couple/Couple";
import Football from "./components/Football/Football";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dark from "./components/Dark/Dark";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import EditProfile from "./components/EditProfile/EditProfile";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Onephoto from "./components/Onephoto/Onephoto";
import Otp from "./components/Otp/Otp";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClientObj = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/animals", element: <Animal /> },
        { path: "/calm", element: <Calm /> },
        { path: "/couples", element: <Couple /> },
        { path: "/dark", element: <Dark /> },
        { path: "/football", element: <Football /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/edit profile", element: <EditProfile /> },
        { path: "/forget password", element: <ForgotPassword /> },
        { path: "/one photo/:id", element: <Onephoto /> },
        { path: "/otp", element: <Otp /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    { path: "*", element: <h1>ERROR</h1> },
  ]);
  return (
    <>
        <QueryClientProvider client={queryClientObj}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  );
}
