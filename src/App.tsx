import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [template, setTemplate] = useState<any>("");
  const [templates, setTemplates] = useState<any>("");
  const [data, setData] = useState<any>("");
  const [datas, setDatas] = useState<any>("");

  const onSubmit = () => {
    setTemplates((prev: any) => {
      const newTemplate = template;

      return newTemplate;
    });

    setDatas((prev: any) => {
      const newData = data;

      return newData;
    });
    setTemplate("");
    setData("");
  };

  return (
    <div className="container">
      <input
        type="text"
        value={`hello ${template}`}
        onChange={(e: any) => setTemplate(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={data}
        onChange={(e: any) => setData(e.target.value)}
      />
      <br />

      <p>Template: {templates}</p>
      <p>Data: {datas}</p>
      <p>{templates + " " + datas}</p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
