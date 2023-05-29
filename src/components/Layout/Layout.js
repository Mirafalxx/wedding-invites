import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
