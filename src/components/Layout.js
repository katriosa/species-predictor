import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";

function Layout(props) {
  return (
    <>
      <CssBaseline />
      <TopBar {...props} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
