import React, { useState } from "react";
import "./App.css";
import Led from "./components/Led";

function App() {
  const [isOn, setOn] = useState(false);

  const cancelar = (obj) => {
    return obj.preventDefault();
  };

  return (
    <>
      <h1>Boa tarde</h1>
      <Led isOn={isOn} setOn={setOn} />
      <a
        href="https://ecosia.org/"
        target="_blank"
        onClick={(e) => cancelar(e)}
      >
        Ecosia
      </a>
    </>
  );
}

export default App;
