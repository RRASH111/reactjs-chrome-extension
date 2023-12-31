import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import ContentScript from "./contentScript";
import TableGeneral from "./tableGeneral";
import SearchUtils from "./SearchUtils";
function init() {
    const existingContainer = document.getElementById('rhs');
  
    if (!existingContainer) {
      throw new Error("Can't find existingContainer with ID 'rhs'");
    }
  
    const appContainer = document.createElement('div');
    appContainer.className = 'popper-content'; // Optional: apply a class for styling
  
    existingContainer.appendChild(appContainer);
  
    const root = createRoot(appContainer);
    console.log(appContainer);
    root.render(<ContentScript />);
  }
  

  function Search() {
    const appContainer = document.createElement("div"); // Change to a generic container type
    appContainer.id = "RP0xob"; // Set the ID if needed
  
    if (!appContainer) {
      throw new Error("Can't find appContainer");
    }
  
    document.body.appendChild(appContainer);
    const root = createRoot(appContainer);
    console.log(appContainer);
    root.render(<SearchUtils />);
  }
Search();
init();