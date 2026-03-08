import { useRef, useState } from "react";
import { ImageUpload } from "../icons/ImageUpload";
import { PineconeLogo } from "../icons/PineconeLogo";
import { ImageDelete } from "../icons/ImageDelete";
import { ChevronRight } from "../icons/ChevronRight";
import { ChevronLeft } from "../icons/ChevronLeft";

export function Step3({ decreaseStep, increaseStep }) {
  const [step3Data, setStep3Data] = useState({
    dob: "",
    image: null,
  });

  const [error, setError] = useState({
    dob: "",
    image: "",
  });

  const inputFileRef = useRef(null);

  const handleChange = (field, value) => {
    setStep3Data((prev) => ({ ...prev, [field]: value }));

    // Clear error when user changes value
    setError((prev) => ({ ...prev, [field]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange("image", URL.createObjectURL(file));
    }
  };

  const handleDeleteBtn = () => {
    handleChange("image", null);
    if (inputFileRef.current) inputFileRef.current.value = "";
  };

  const handleContinue = () => {
    let hasError = false;
    const newErrors = { dob: "", image: "" };

    if (!step3Data.dob) {
      newErrors.dob = "Date of birth is required";
      hasError = true;
    }

    if (!step3Data.image) {
      newErrors.image = "Profile image is required";
      hasError = true;
    }

    setError(newErrors);

    if (!hasError) {
      increaseStep();
    }
  };

  return (
    <div>
      <div className="background">
        <div className="container">
          <div className="flex flex-col gap-7">
            {/* header */}
            <div className="flex flex-col w-104 items-start gap-2">
              <PineconeLogo />
              <div className="joinUs">Join Us! 😎</div>
              <div className="description">
                Please provide all current information accurately.
              </div>
            </div>

            {/* Date of birth */}
            <div className="inputBigDiv flex justify-between">
              <div className="flex flex-row">
                <p className="inputTitle">Date of birth</p>
                <p className="star">*</p>
              </div>
              <div className="relative">
                <input
                  type="date"
                  className={`input ${error.dob ? "borderRed" : "borderGray"}`}
                  value={step3Data.dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                />
              </div>
              {error.dob && <div className="error-message">{error.dob}</div>}
            </div>

            {/* Profile image */}
            <div className="inputBigDiv">
              <div className="flex flex-row">
                <p className="inputTitle">Profile image</p>
                <p className="star">*</p>
              </div>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  ref={inputFileRef}
                  id="fileInput"
                  onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className="imageInput">
                  {step3Data.image ? (
                    <div className="relative">
                      <img
                        src={step3Data.image}
                        alt="preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <ImageUpload />
                      <span>Add Image</span>
                    </div>
                  )}
                </label>

                {step3Data.image && (
                  <button
                    className="absolute top-1 right-2 rounded-[99px] w-5 h-5 bg-[#202124] z-10 flex items-center justify-center"
                    onClick={handleDeleteBtn}
                  >
                    <ImageDelete />
                  </button>
                )}
              </div>
              {error.image && (
                <div className="error-message">{error.image}</div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row mt-auto gap-2">
            <button onClick={decreaseStep} className="backBtn">
              <ChevronLeft />
              Back
            </button>
            <button onClick={handleContinue} className="continueBtn w-70">
              Submit 3/3 <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
