import React from "react";
import { Outlet } from "react-router-dom";

export default function BasicLayout() {
  return (
    <>
      <div>Header de la web</div>
      <Outlet />
      <div>footer</div>
    </>
  );
}
