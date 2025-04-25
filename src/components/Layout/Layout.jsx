import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Alert from "../Alert/Alert";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Alert />
      <Outlet />
    </>
  );
}
