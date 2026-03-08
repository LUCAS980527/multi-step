import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";

export function App() {
  // app.jsx
  const [step, setStep] = useState(1);

  function increaseStep() {
    setStep(step + 1);
  }
  function decreaseStep() {
    setStep(step - 1);
  }
  return (
    <div>
      {step === 1 && <Step1 increaseStep={increaseStep} />}
      {step === 2 && (
        <Step2 increaseStep={increaseStep} decreaseStep={decreaseStep} />
      )}
      {step === 3 && (
        <Step3 decreaseStep={decreaseStep} increaseStep={increaseStep} />
      )}
      {step === 4 && <Step4 />}
    </div>
  );
}

export default App;
