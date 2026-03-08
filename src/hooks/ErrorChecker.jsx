export function checkStepError({
  step,
  name,
  error,
  setError,
  email,
  phone,
  password,
  conPass,
  emailError,
  phoneError,
  passError,
  conPassError,
  setEmailError,
  setPhoneError,
  setPassError,
  setConPassError,
  dob,
  preview,
  setDobError,
  setImageError,
}) {
  if (step === 1) {
    const isEmpty = Object.values(name).some((val) => val.trim() === "");
    const isError = Object.values(error).some((cur) => cur.length !== 0);

    if (isError || isEmpty) {
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
      return true;
    }
  }

  if (step === 2) {
    const step2Data = { email, phone, password, conPass };
    const isStep2Empty = Object.values(step2Data).some(
      (val) => val.trim() === "",
    );

    if (isStep2Empty) {
      setEmailError(email.trim() === "" ? "Email is required" : emailError);
      setPhoneError(phone.trim() === "" ? "Phone number is required" : phoneError);
      setPassError(password.trim() === "" ? "Password is required" : passError);
      setConPassError(
        conPass.trim() === "" ? "Confirm password is required" : conPassError,
      );
      return true;
    }
  }

  if (step === 3) {
    let hasError = false;

    if (!dob) {
      setDobError("Date of birth is required");
      hasError = true;
    }

    if (!preview) {
      setImageError("Profile image is required");
      hasError = true;
    }

    if (hasError) {
      return true;
    }
  }

  return false;
}
