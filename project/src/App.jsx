import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Página Carregada!");
    document.title = "Contagem: " + count;
  });

  return (
    <>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Contar</button>
    </>
  );
}

export default App;
