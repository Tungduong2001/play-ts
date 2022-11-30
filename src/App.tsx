import React, { useState } from "react";
import "./App.css";

function App() {
  //Bai 6
  const [hours, setHours] = useState<any[]>([]);
  for (let index = 1; index <= 24; index++) {
    for (let j = 0; j <= 50; j += 10) {
      hours.push(index + ":" + j);
    }
  }

  //Bai 10
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

  //Bai 4
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
      <div>
        <p>Bài 6</p>
        <select name="" id="">
          {hours.map((item: any, index: number) => (
            <option key={index} value="">
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>Bài 4</p>
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
      <div>
        <p>Bài 10</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Tính</button>

        <p>
          Giai thừa : {expression} {factorial}
        </p>
      </div>
    </div>
  );
}

export default App;
