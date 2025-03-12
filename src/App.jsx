import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Animal from './components/Animal/Animal';
import Calm from './components/Calm/Calm';
import Couple from './components/Couple/Couple';
import Football from './components/Football/Football';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dark from './components/Dark/Dark';
import Home from './components/Home/Home';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/animals", element: <Animal /> },
        { path: "/calm", element: <Calm /> },
        { path: "/couples", element: <Couple /> },
        { path: "/dark", element: <Dark/> },
        { path: "/football", element: <Football /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    { path: "*", element: <h1>ERROR</h1> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
