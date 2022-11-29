import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const checked = (text: string, a: string, b?: number) => {
    if (text.endsWith(a) || text.endsWith(a, b)) {
      return true;
    } else {
      return false;
    }
  };
  console.log(checked("abcd", "b", 4));
  console.log(checked("abcd", "d"));

  return <div className="container"></div>;
}

export default App;
