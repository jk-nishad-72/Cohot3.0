import React from "react";
import { Outlet } from "react-router";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      <Nav />

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>

    </div>
  );
};

export default MainLayout;