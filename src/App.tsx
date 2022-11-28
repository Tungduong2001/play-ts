import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<any>();
  const [numbers, setNumbers] = useState<any>([]);

  const handleSubmit = () => {
    setNumbers((prev: any) => [...prev, number]);
    setNumber("");
  };

  numbers.sort((a: any, b: any) => b - a);
  const newArr = numbers.reduce((a: any, b: any) => {
    if (typeof a[b] == "undefined") {
      a[b] = 1;
    } else {
      a[b] += 1;
    }
    return a;
  }, {});

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e: any) => setNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <p>Mảng: {JSON.stringify(numbers)}</p>
      <p>{JSON.stringify(newArr)}</p>
    </div>
  );
}

export default App;
