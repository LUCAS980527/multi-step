import { PineconeLogo } from "../icons/PineconeLogo";
import { ChevronRight } from "../icons/ChevronRight";
import { Input } from "../hooks/Input";
import { useState } from "react";

export function Step1({ increaseStep }) {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleError = (field, value) => {
    setName((prev) => ({ ...prev, [field]: value }));

    let message = "";

    if (!/^[a-zA-Z]+$/.test(value)) {
      message = "Only letters allowed.";
    } else if (value.length < 2) {
      message = "Name must be at least 2 characters.";
    } else if (value.length > 30) {
      message = "Name must be under 30 characters.";
    }

    setError((prev) => ({ ...prev, [field]: message }));
  };

  const handleContinue = () => {
    const isEmpty = Object.values(name).some((val) => val.trim() === "");
    const isError = Object.values(error).some((val) => val !== "");

    if (isEmpty || isError) {
      setError({
        firstName:
          name.firstName.trim() === ""
            ? "First name is required"
            : error.firstName,
        lastName:
          name.lastName.trim() === ""
            ? "Last name is required"
            : error.lastName,
        userName:
          name.userName.trim() === ""
            ? "User name is required"
            : error.userName,
      });
      return;
    }
    increaseStep();
    localStorage.setItem("data", JSON.stringify(name));
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
              <div className="description ">
                Please provide all current information accurately.
              </div>
            </div>
            {/* all three input's div */}
            <div className="flex flex-col gap-3 items-start">
              {/* first name big div */}
              <Input
                label="First name"
                name="firstName"
                value={name.firstName}
                onChange={handleError}
                error={error.firstName}
                required
              />
              {/* last name big div */}
              <Input
                label="Last name"
                name="lastName"
                value={name.lastName}
                onChange={handleError}
                error={error.lastName}
                required
              />
              {/* user name big div */}
              <Input
                label="User name"
                name="userName"
                value={name.userName}
                onChange={handleError}
                error={error.userName}
                required
              />
            </div>
          </div>
          <button onClick={handleContinue} className="continueBtn  w-[416px] ">
            Continue 1/3
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
