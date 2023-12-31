import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import ContentScript from "./contentScript";
import TableGeneral from "./tableGeneral";
import RelatedKeywords from "../components/RelatedKeywords";

function init() {
  const appContainer = document.createElement("rhs");
  if (!appContainer) {
    throw new Error("Can't find appContainer");
  }
  document.body.appendChild(appContainer);
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<ContentScript />);

  const element = document.getElementById("div");
  document.body.appendChild(element);
  const root1 = createRoot(element);
  root.render(<TableGeneral />);
}

init();