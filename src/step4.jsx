import { useState } from "react";
import React from "react";

export default function Page4() {
  const [step, setStep] = useState("");

  return (
    <>
      <div className="container">
        <div className="card1">
          <div className="logo"></div>
          <div className="content">
            <h1>You're All Set 🔥</h1>
            <p className="font">We have received your submission. Thank you!</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
