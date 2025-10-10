import { useState } from "react";
import React from "react";

export default function Page1({ increaseStep }) {
  const [step, setStep] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const nameRegex = /^[a-zA-Z]+$/;

  const [firsterror, setFirsterror] = useState("");
  const [lasterror, setLasterror] = useState("");
  const [usererror, setUsererror] = useState("");

  const handleFirst = () => {
    if (!nameRegex.test(first)) {
      setFirsterror("First name cannot contain special characters or numbers.");
    } else {
      setFirsterror("");
    }
  };
  const handleLast = () => {
    if (!nameRegex.test(last)) {
      setLasterror("Last name cannot contain special characters or numbers.");
    } else {
      setLasterror("");
    }
  };
  const handleUser = () => {
    if (!nameRegex.test(user)) {
      setUsererror("Username can only contain letters.");
    } else {
      setUsererror("");
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
            <h5>Firstname</h5>
            <input
              type="text"
              placeholder="placeholder"
              value={first}
              onChange={(e) => {
                setFirst(e.target.value), handleFirst();
              }}
            />
            {firsterror && <div className="error-message">{firsterror}</div>}
            <p>Lastname</p>
            <input
              type="text"
              placeholder="placeholder"
              value={last}
              onChange={(e) => {
                setLast(e.target.value), handleLast();
              }}
            />
            {lasterror && <div className="error-message">{lasterror}</div>}
            <p>Username</p>
            <input
              type="text"
              pattern="[A-Z]"
              placeholder="placeholder"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {usererror && <div className="error-message">{usererror}</div>}
          </div>
          <div>
            <button className="button" onClick={increaseStep}>
              Continue 1/3{" "}
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
