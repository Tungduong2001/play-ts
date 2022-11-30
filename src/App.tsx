import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState<any[]>([]);
  for (let index = 10; index <= 200; index++) {
    if (index % 7 == 0 && index % 5 != 0) {
      number.push(index);
    }
  }

  return (
    <div className="container">
      <p>{number.join(", ")}</p>
    </div>
  );
}

export default App;
