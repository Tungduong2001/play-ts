import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<any>("");
  const [factorial, setFactorial] = useState<any>();
  const [expression, setExpression] = useState<any>("");
  const handleClick = () => {
    setNumber((prev: any) => {
      let check = 1;
      let expression = "";
      for (let i = 1; i <= number; i++) {
        check *= i;
        if (i < number) {
          expression = expression + i + "*";
        } else {
          expression = expression + i + "=";
        }
      }
      setExpression(expression);
      setFactorial(check);
      return number;
    });
    setNumber("");
  };

  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>Tính</button>

      <p>
        Giai thừa : {expression} {factorial}
      </p>
    </div>
  );
}

export default App;
