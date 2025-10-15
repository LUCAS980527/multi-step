import React, { useState } from "react";
import "./App.css";

import Page1 from "./step1";
import Page2 from "./step2";
import Page3 from "./step3";
import Page4 from "./step4";

export function Step() {
  const [page, setPage] = useState(1);
  function increaseStep() {
    setPage(page + 1);
  }
  function reduceStep() {
    setPage(page - 1);
  }
  return (
    <div>
      {page === 3 && <Page1 increaseStep={increaseStep} />}
      {page === 2 && (
        <Page2 increaseStep={increaseStep} reduceStep={reduceStep} />
      )}
      {page === 1 && (
        <Page3 increaseStep={increaseStep} reduseStep={reduceStep} />
      )}
      {page === 4 && <Page4 />}
    </div>
  );
}
