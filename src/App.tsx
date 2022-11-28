import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState<any>("");
  const [newText, setnewText] = useState();

  const onSubmit = () => {
    setText((prev: any) => {
      const camelize = (text: any) => {
        const a = text
          .toLowerCase()
          .replace(/[-_\s.]+(.)?/g, (word: any, index: any) =>
            index ? index.toUpperCase() : ""
          );
        return a.substring(0, 1).toLowerCase() + a.substring(1);
      };
      setnewText(camelize(text));
      return newText;
    });
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: any) => setText(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
      <p>Chuỗi trả về: {newText} </p>
    </div>
  );
}

export default App;
