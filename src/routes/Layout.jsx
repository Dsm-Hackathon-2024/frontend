import React from "react";
import { Outlet } from "react-router-dom";
import { HomeButton } from "../components/HomeButton";

function Layout() {
  return (
    <>
      <HomeButton />
      <Outlet />
    </>
  );
}

export default Layout;
