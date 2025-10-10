import { useState } from "react";
import React from "react";
import "./App.css";

export default function Page2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
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
            <h5>Email</h5>
            <input
              type="text"
              placeholder="placeholder"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Phone number</p>
            <input
              type="text"
              placeholder="placeholder"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p>Password</p>
            <input
              type="text"
              pattern="[A-Z]"
              placeholder="placeholder"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <p>Confirm password</p>
            <input
              type="text"
              pattern="[A-Z]"
              placeholder="placeholder"
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button className="button2" onClick={reduceStep}>
              Back
            </button>
            <button className="button1" onClick={increaseStep}>
              Continue 2/3{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
