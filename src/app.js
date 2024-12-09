import React from "react";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutUs from "./components/About-us";
import ContactUs from "./components/contact-us";

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
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

// const appRoutes =
