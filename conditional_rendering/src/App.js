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
        break;

      case 1:
        return green;
        break;

      case 2:
        return blue;
        break;
    }
  };

  const changeColor = () => {
    setColor((color + 1) % 3);
  };

  setInterval(changeColor, 1000);

  return (
    <>
      <h1 style={returnColor(color)}>Doglas Rocha</h1>
    </>
  );
}

export default App;
