import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(1);

  const red = { color: "#f00" };
  const green = { color: "#0f0" };
  const blue = { color: "#00f" };

  const returnColor = (c) => {
    switch (c) {
      case 0:
        return red;

      case 1:
        return green;

      case 2:
        return blue;
    }
  };

  const changeColor = () => {
    setColor((color + 1) % 3);
  };

  setInterval(changeColor, 500);

  return (
    <>
      <h1 style={returnColor(color)}>Doglas Rocha</h1>
      <button onClick={() => changeColor()}>Muda cor</button>
    </>
  );
}

export default App;
