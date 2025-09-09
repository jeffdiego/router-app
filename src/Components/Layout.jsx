import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="d-flex justify-content-center align-items-center vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
