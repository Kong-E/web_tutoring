import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let b = 0;
const App = () => {
  const [c, setC] = useState(0);
  let a = 0;

  return (
    <div>
      <div onClick={() => b++}>a : {a} 일반 변수</div>
      <div onClick={() => a++}>b : {b} global 변수</div>
      <div onClick={() => setC((prev) => prev + 1)}>c : {c} state 변수</div>
    </div>
  );
};

export default App;
