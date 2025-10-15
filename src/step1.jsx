import { useState } from "react";
import React from "react";

export default function Page1({ increaseStep }) {
  const [step, setStep] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [user, setUser] = useState("");
  const nameRegex = /^[a-zA-Z]+$/;

  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [userError, setUserError] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "first") {
      setFirst(value);
    } else if (name === "last") {
      setLast(value);
    } else {
      setUser(value);
    }
  };
  const handeErrors = () => {
    const errors = {};
    if (!nameRegex.test(first) || first.length === 0) {
      errors.first = "Last name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(last) || last.length === 0) {
      errors.last = "Last name cannot contain special characters or numbers.";
    }
    if (!nameRegex.test(user) || user.length === 0) {
      errors.user =
        "This username is already taken. Please choose another one.";
    }

    setFirstError(errors.first || "");
    setLastError(errors.last || "");
    setUserError(errors.user || "");

    return errors;
  };

  const handleSubmitButton = () => {
    const errors = handeErrors();

    console.log(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      increaseStep();
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
              <h5>Firstname</h5>
              <span className="od">*</span>
            </div>
            <input
              type="text"
              name="first"
              placeholder="placeholder"
              value={first}
              onChange={handleInputChange}
            />
            {firstError && <div className="od">{firstError}</div>}
            <div className="flex">
              <p>Lastname</p>
              <span className="od">*</span>
            </div>
            <input
              type="text"
              name="last"
              placeholder="placeholder"
              value={last}
              onChange={handleInputChange}
            />
            {lastError && <div className="od">{lastError}</div>}
            <div className="flex">
              <p>Username</p>
              <span className="od">*</span>
            </div>
            <input
              type="text"
              name="user"
              pattern="[A-Z]"
              placeholder="placeholder"
              value={user}
              onChange={handleInputChange}
            />
            {userError && <div className="od">{userError}</div>}
          </div>
          <div>
            <button className="button" onClick={handleSubmitButton}>
              Continue 1/3{" "}
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
