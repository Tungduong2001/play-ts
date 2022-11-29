import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    const a = Number(prompt("Nhập a"));
    const b = Number(prompt("Nhập b"));
    const c = Number(prompt("Nhập c"));
    let x = 0;
    let x1 = 0;
    let x2 = 0;

    const delta = b * b - 4 * a * c;

    if (a == 0 && b != 0) {
      x = -c / b;
      alert(`x=${x}`);
      return;
    }
    if (delta > 0) {
      alert(
        `Pt có 2 nghiệm phân biệt ${(x1 =
          (-b + Math.sqrt(delta)) / (2 * a))} và  ${(x2 =
          (-b - Math.sqrt(delta)) / (2 * a))}`
      );
      return;
    }
    if (b == 0) {
      alert("pt vo nghiem");
      if (delta == 0 || b != 0) {
        alert(`Pt có nghiệm kép x1 = x2 = ${(x1 = x2 = (-b / 2) * a)}`);
      }
      return;
    }
    if (delta < 0) {
      alert(`Pt vô nghiệm`);
    }
  };

  return (
    <div className="container">
      <button onClick={handleClick}>Tính PTb2</button>
    </div>
  );
}

export default App;
