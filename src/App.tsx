import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<any>("");
  const [texts, setTexts] = useState<any>([]);
  const handleSubmit = () => {
    setTexts((prev: any) => {
      const newText = text;
      const jsonText = JSON.parse(newText);
      const objectFlip = Object.fromEntries(
        Object.entries(jsonText).map((a) => a.reverse())
      );
      console.log(objectFlip);
      return newText;
    });
    setText("");
  };

  return (
    <div className="container">
      <input value={text} onChange={(e: any) => setText(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default App;
