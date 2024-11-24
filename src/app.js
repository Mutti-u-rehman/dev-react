import React from "react";
import ReactDom from "react-dom/client";

const element = React.createElement("h1", { id: "title" }, "Hello world");
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element);
