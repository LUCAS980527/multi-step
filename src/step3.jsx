import { useState } from "react";
import React from "react";

export default function Page3({ increaseStep, reduseStep }) {
  const [step, setStep] = useState("");

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="logo"></div>
          <div className="content">
            <h1>Join Us! 😎</h1>
            <p className="font">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="inputs">
            <p3>Date of Birth</p3>
            <input type="date" placeholder="" />

            <div>
              <p3>Profile image</p3>
              <span className="od">*</span>
            </div>
            <input type="image" className="pic" />
          </div>

          <div className="buttons">
            <button className="button2" onClick={reduseStep}>
              Back
            </button>
            <button className="button1" onClick={increaseStep}>
              Continue 3/3
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
