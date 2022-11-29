import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [hours, setHours] = useState<any[]>([]);
  for (let index = 1; index <= 24; index++) {
    for (let j = 0; j <= 50; j += 10) {
      hours.push(index + ":" + j);
    }
  }

  return (
    <div className="container">
      <p>chọn giờ</p>
      <select name="" id="">
        {hours.map((item: any) => (
          <option key={item} value="">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
