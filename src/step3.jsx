import { useState } from "react";
import React from "react";

export default function Page3({ increaseStep, reduseStep }) {
  const [step, setStep] = useState("");
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setUrl(newUrl);
    }
  };

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
            <div className="flex">
              <p>Date of Birth</p>
              <span className="od">*</span>
            </div>
            <input type="date" placeholder="xxa" src="" alt="add picture" />

            <div>
              <p3>Profile image</p3>
              <span className="od">*</span>
            </div>
            <input type="file" className="pic" onChange={handleInputChange} />
            <img
              src={url}
              alt="your image"
              style={{ width: "100%", borderRadius: "8px" }}
            />
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
