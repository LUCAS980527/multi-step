import { useState } from "react";
import React from "react";
import "./App.css";

const emailregex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const pnregex = /^\d{8}$/;
const passwordregex = /^.{8,}$/;

export default function Page2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpassError, setConfirmpassError] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmpass") {
      setConfirmpass(value);
    }
  };
  const handeErrors = () => {
    const errors = {};
    if (!emailregex.test(email) || email.length === 0) {
      errors.email = "Email buruu bn";
    }
    if (!pnregex.test(phone) || phone.length === 0) {
      errors.phone = "utasnii dugaar buruu shalgaad dahin orruul!";
    }
    if (!passwordregex.test(password) || password.length === 0) {
      errors.password = "password hangaltgvi temdegt ashiglana uu";
    }
    if (!passwordregex.test(confirmpass) || confirmpass.length === 0) {
      errors.confirmpass = "adil utga oruulna uu";
    }

    setEmailError(errors.email || "");
    setPhoneError(errors.phone || "");
    setPasswordError(errors.password || "");
    setConfirmpassError(errors.confirmpass || "");

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
              <p>Email</p>
              <span className="od">*</span>
            </div>
            <input
              type="text"
              name="email"
              placeholder="placeholder"
              value={email}
              onChange={handleInputChange}
            />
            {emailError && <div className="od">{emailError}</div>}
            <div className="flex">
              <p>Phone number</p>
              <span className="od">*</span>
            </div>
            <input
              type="text"
              name="phone"
              placeholder="placeholder"
              value={phone}
              onChange={handleInputChange}
            />
            {phoneError && <div className="od">{phoneError}</div>}
            <div className="flex">
              <p>Password</p>
              <span className="od">*</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="placeholder"
              value={password}
              onChange={handleInputChange}
            />
            {passwordError && <div className="od">{passwordError}</div>}
            <div className="flex">
              <p>Confirm Password</p>
              <span className="od">*</span>
            </div>
            <input
              type="password"
              name="confirmpass"
              placeholder="placeholder"
              value={confirmpass}
              onChange={handleInputChange}
            />
            {confirmpassError && <div className="od">{confirmpassError}</div>}
          </div>
          <div className="buttons">
            <button className="button2" onClick={reduceStep}>
              Back
            </button>
            <button className="button1" onClick={handleSubmitButton}>
              Continue 2/3{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
