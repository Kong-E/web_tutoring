import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let c = 0;
const App = () => {
  const [a, setA] = useState(0);
  let b = 0;

  return (
    <div>
      <div onClick={() => setA((prev) => prev + 1)}>a : {a} state 변수</div>
      <div onClick={() => b++}>a : {b} 일반 변수</div>
      <div onClick={() => c++}>a : {c} global 변수</div>
    </div>
  );
};

export default App;
