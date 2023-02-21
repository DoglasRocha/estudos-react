import { useState } from "react";
import Number from "./components/Number";
import "./App.css";

function App() {
  const [num, setNum] = useState(10);

  return (
    <>
      <Number num={num} setNum={setNum} />
    </>
  );
}

export default App;
