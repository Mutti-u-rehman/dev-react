import React from "react";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import Header from "./components/Header";
import Body from "./components/body";

export default AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
