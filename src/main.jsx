import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Step } from "./step.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Step />
  </StrictMode>
);
