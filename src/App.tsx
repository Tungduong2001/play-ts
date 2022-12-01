import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  //Bai2:
  const [numb, setNumb] = useState<any>("");
  const [numbs, setNumbs] = useState<any>([]);

  const clickSubmit = () => {
    const string = numb.split(",");
    setNumbs((prev: any) => string);

    setNumb("");
  };

  const newArr = numbs.reduce((a: any, b: any) => {
    if (typeof a[b] == "undefined") {
      a[b] = 1;
    } else {
      a[b] += 1;
    }
    return a;
  }, {});
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
  const onSubmitt = () => {
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

  // Bai12

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

  // Bai 3
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
  // Bai7
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const updateCal = (e: any) => {
    setCal(cal.concat(e.target.name));
  };

  const clear = () => {
    setCal("");
    setResult("");
  };

  const del = () => {
    setCal(cal.substring(0, cal.length - 1));
  };

  const results = () => {
    try {
      setResult(eval(cal).toString());
    } catch {
      setResult("Error");
    }
  };

  // Bai 8

  const arrNum: any = [];
  for (let index = 10; index <= 200; index++) {
    if (index % 7 == 0 && index % 5 != 0) {
      arrNum.push(index);
    }
  }

  // Bai9

  const btnClick = () => {
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

  // Bai11

  const [tex, setTex] = useState<any>("");
  const [texts, setTexts] = useState<any>([]);
  const [a, setA] = useState<any>();
  const handleSubmit = () => {
    setTexts((prev: any) => {
      const newText = tex;
      const jsonText = JSON.parse(newText);
      const objectFlip = Object.fromEntries(
        Object.entries(jsonText).map((a) => a.reverse())
      );
      setA(JSON.stringify(objectFlip));

      return newText;
    });
    setTex("");
  };

  // Bài 5:
  const [string, setSring] = useState<any>("");
  const [condition, setCondition] = useState<any>("");
  const [condition2, setCondition2] = useState<any>("");
  const [c, setC] = useState<any>("");

  const checked = (text: string, a: string, b?: number) => {
    if (text.endsWith(a) || text.endsWith(a, b)) {
      setC("true");
    } else {
      setC("false");
    }
  };
  return (
    <>
      <div className="container mx-auto">
        {/* Bai2 */}
        <div className="content">
          <p>Bai2:</p>
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={numb}
            onChange={(e: any) => setNumb(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-6"
            onClick={clickSubmit}
          >
            Add
          </button>
          <p>Mảng: {JSON.stringify(numbs)}</p>
          <p className="mt-4">Kết quả: {JSON.stringify(newArr)}</p>
        </div>
        {/* Bai6 */}
        <div className="content">
          <p className="mb-4">Bài 6: In ra giờ cách nhau 10p vào thẻ select</p>
          <select
            className="mx-auto block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            name=""
            id=""
          >
            {hours.map((item: any, index: number) => (
              <option key={index} value="">
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* Bai4 */}
        <div className="content">
          <p>Bài 4</p>
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={`hello ${template}`}
            onChange={(e: any) => setTemplate(e.target.value)}
          />
          <br />
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={data}
            onChange={(e: any) => setData(e.target.value)}
          />
          <br />

          <p>Template: {templates}</p>
          <p>Data: {datas}</p>
          <p>{templates + " " + datas}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-6"
            onClick={onSubmitt}
          >
            Submit
          </button>
        </div>
        {/* Bai10 */}
        <div className="content">
          <p>Bài 10</p>
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-6"
            onClick={handleClick}
          >
            Tính
          </button>

          <p>
            Giai thừa : {expression} {factorial}
          </p>
        </div>
        {/* Bai12 */}
        <div className="content">
          <p>Bai12</p>
          <p>{`var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];`}</p>
          <p>{`var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];`}</p>
          <p>{`Output : [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]`}</p>
          <p className="mt-6">Kết quả: {JSON.stringify(filter)}</p>
        </div>
        {/* Bai3 */}
        <div className="content">
          <p>Bai 3: camelCase</p>
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />{" "}
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded "
            onClick={onSubmit}
          >
            Submit
          </button>
          <p>Chuỗi trả về: {newText} </p>
        </div>
        {/* Bai8 */}
        <div className="content">
          <p>Bai 8</p>
          <p>
            các số chia hết cho 7 nhưng không phải bội số của 5, nằm trong đoạn
            10 và 200 (tính cả 10 và 200) là:
          </p>
          <p>{arrNum.join(", ")}</p>
        </div>
        {/*  Bai9  */}
        <div className="content">
          <p>Bai 9</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-6"
            onClick={btnClick}
          >
            Tính PTb2
          </button>
        </div>
        {/*  Bai11  */}
        <div className="content">
          <p>Bai 11</p>
          <p>{`Ví dụ: { "a": 3, "b": 2, "c": 1 }`}</p>
          <input
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={tex}
            onChange={(e: any) => setTex(e.target.value)}
          />
          <br />
          {tex ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded "
              onClick={handleSubmit}
            >
              Click
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              disabled
              onClick={handleSubmit}
            >
              Click
            </button>
          )}

          <p>Kết quả: {a}</p>
        </div>
        {/* Bai 5 */}

        <div className="content">
          <p className="mb-6">Bai 5: ends With</p>
          <input
            type="text"
            value={string}
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSring(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={condition2}
            onChange={(e) => setCondition2(e.target.value)}
          />
          <br />
          <p className="mb-4"> Kết quả: {c}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            onClick={() => checked(string, condition, condition2)}
          >
            Check
          </button>
        </div>
      </div>
      {/* Bai 7 */}
      <p className="text-center mt-7">Bài 7</p>
      <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-[#000000] border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div className="">
          <div className="p-5 text-white text-center text-3xl bg-[#04387A]-900">
            Calculator
          </div>
          <div className="pt-8  p-5 pb-0 text-white text-right text-3xl bg-[#000000]">
            {cal || 0}
          </div>
          <div className="p-5 text-white text-right text-3xl bg-[#000000]">
            <span className="text-orange-500">{result || ""}</span>
          </div>

          <div className="flex items-stretch bg-[#000000] h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                onClick={del}
              >
                DEL
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="("
                onClick={updateCal}
              >
                (
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name=")"
                onClick={updateCal}
              >
                )
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="/"
                onClick={updateCal}
              >
                ÷
              </button>
            </div>
          </div>

          <div className="flex items-stretch bg-[#000000] h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="7"
                onClick={updateCal}
              >
                7
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="8"
                onClick={updateCal}
              >
                8
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="9"
                onClick={updateCal}
              >
                9
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="*"
                onClick={updateCal}
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex items-stretch bg-[#000000] h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="4"
                onClick={updateCal}
              >
                4
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="5"
                onClick={updateCal}
              >
                5
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="6"
                onClick={updateCal}
              >
                6
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="-"
                onClick={updateCal}
              >
                -
              </button>
            </div>
          </div>

          <div className="flex items-stretch bg-[#000000] h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="1"
                onClick={updateCal}
              >
                1
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="2"
                onClick={updateCal}
              >
                2
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="3"
                onClick={updateCal}
              >
                3
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="+"
                onClick={updateCal}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-stretch bg-[#000000] h-24 mb-4">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                onClick={clear}
              >
                AC
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="0"
                onClick={updateCal}
              >
                0
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                name="."
                onClick={updateCal}
              >
                .
              </button>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                onClick={results}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
