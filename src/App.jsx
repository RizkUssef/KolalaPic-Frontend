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
import SuccessMsg from "./context/SuccessMsg";
import ErrorMsg from "./context/ErrorMsg";
import UploadImage from "./components/UploadImage/UploadImage";
import Auth from "./context/Auth";
import Guard from "./components/Guard/Guard";

const queryClientObj = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/animals",
          element: (
            <Guard>
              <Animal />
            </Guard>
          ),
        },
        {
          path: "/calm",
          element: (
            <Guard>
              <Calm />
            </Guard>
          ),
        },
        {
          path: "/couples",
          element: (
            <Guard>
              <Couple />
            </Guard>
          ),
        },
        {
          path: "/dark",
          element: (
            <Guard>
              <Dark />
            </Guard>
          ),
        },
        {
          path: "/football",
          element: (
            <Guard>
              <Football />
            </Guard>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        { path: "/register", element: <Register /> },
        {
          path: "/edit profile",
          element: (
            <Guard>
              <EditProfile />
            </Guard>
          ),
        },
        { path: "/forget password", element: <ForgotPassword /> },
        {
          path: "/one photo/:id",
          element: (
            <Guard>
              <Onephoto />
            </Guard>
          ),
        },
        { path: "/otp", element: <Otp /> },
        {
          path: "/profile",
          element: (
            <Guard>
              <Profile />
            </Guard>
          ),
        },
        {
          path: "/upload",
          element: (
            <Guard>
              <UploadImage />
            </Guard>
          ),
        },
      ],
    },
    { path: "*", element: <h1>ERROR</h1> },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClientObj}>
        <Auth>
          <ErrorMsg>
            <SuccessMsg>
              <RouterProvider router={router} />
            </SuccessMsg>
          </ErrorMsg>
        </Auth>
      </QueryClientProvider>
    </>
  );
}
