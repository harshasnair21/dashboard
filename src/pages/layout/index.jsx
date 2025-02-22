import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    <div>
      <Box display={isNonMobile ? "flex" : "block"}></Box>
      <Sidebar isNonMobile={isNonMobile} drawerWidth="250px" />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
