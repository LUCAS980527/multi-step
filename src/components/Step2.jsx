import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ChevronRight } from "../icons/ChevronRight";
import { ChevronLeft } from "../icons/ChevronLeft";
import { Input } from "../hooks/Input";
export function Step2({ increaseStep, decreaseStep }) {
  const [step2Data, setStep2Data] = useState({
    email: "",
    phone: "",
    password: "",
    conPass: "",
  });
  const [error, setError] = useState({
    email: "",
    phone: "",
    password: "",
    conPass: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]+$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d).*$/;

  const handleChange = (field, value) => {
    setStep2Data((prev) => ({ ...prev, [field]: value }));

    let message = "";
    switch (field) {
      case "email":
        if (!emailRegex.test(value)) message = "Invalid email.";
        break;
      case "phone":
        if (!phoneRegex.test(value)) message = "Phone must be 8 digits.";
        break;
      case "password":
        if (!passRegex.test(value))
          message = "Password needs letters & numbers";
        else if (value.length < 6) message = "Password must be 6+ chars";
        break;
      case "conPass":
        if (value !== step2Data.password) message = "Passwords do not match";
        break;
      default:
        break;
    }
    setError((prev) => ({ ...prev, [field]: message }));
  };
  const handleContinue = () => {
    const isEmpty = Object.values(step2Data).some((val) => val.trim() === "");
    const isError = Object.values(error).some((val) => val !== "");

    if (isEmpty || isError) {
      setError((prev) => ({
        email: step2Data.email.trim() === "" ? "Email is required" : prev.email,
        phone: step2Data.phone.trim() === "" ? "Phone is required" : prev.phone,
        password:
          step2Data.password.trim() === ""
            ? "Password is required"
            : prev.password,
        conPass:
          step2Data.conPass.trim() === ""
            ? "Confirm password is required"
            : prev.conPass,
      }));
      return;
    }
    increaseStep();
  };

  return (
    <div>
      <div className="background">
        {/* container */}
        <div className="container">
          {/* main */}
          <div className="flex flex-col gap-7">
            {/* header */}
            <div className="flex flex-col w-104 items-start gap-2">
              <PineconeLogo />
              <div className="joinUs">Join Us! 😎</div>
              <div className="description">
                Please provide all current information accurately.
              </div>
            </div>
            {/* all four input's div */}
            <div className="flex flex-col gap-3 items-start">
              <Input
                label="Email"
                name="email"
                value={step2Data.email}
                onChange={handleChange}
                error={error.email}
                required
              />
              <Input
                label="Phone number"
                name="phone"
                value={step2Data.phone}
                onChange={handleChange}
                error={error.phone}
                required
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={step2Data.password}
                onChange={handleChange}
                error={error.password}
                required
              />
              <Input
                label="Confirm password"
                name="conPass"
                type="password"
                value={step2Data.conPass}
                onChange={handleChange}
                error={error.conPass}
                required
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row  mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn ">
              <ChevronLeft />
              Back
            </button>

            <button onClick={handleContinue} className="continueBtn w-70">
              Continue 2/3
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
