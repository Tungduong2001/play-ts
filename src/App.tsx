import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ];

  let others = [
    { x: 1, y: 1 },
    { x: 1, y: 2 },
  ];

  const union = [...objects, ...others];
  const filter = union.reduce(
    (filter: any, item) =>
      filter.some(
        (filterItem: any) => JSON.stringify(filterItem) === JSON.stringify(item)
      )
        ? filter
        : [...filter, item],
    []
  );
  console.log(filter);

  return (
    <div className="container">
      <p>{`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];`}</p>
      <p>{`var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];`}</p>
      <p>{`Output : [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`}</p>
      Bài 12, kết quả ở console.log anh nhé :v
    </div>
  );
}

export default App;
