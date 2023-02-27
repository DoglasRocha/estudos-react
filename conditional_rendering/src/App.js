import React, { useState } from "react";

const cumprimento = () => {
  const hora = new Date().getHours();

  if (hora >= 0 && hora < 13) return <p>Bom dia!</p>;
  else if (hora < 18) return <p>Boa tarde!</p>;

  return <p>Boa noite!</p>;
};

const msgLogin = () => {
  return "Usuário logado!";
};

const msgLogoff = () => {
  return "Por favor, logar.";
};

function App() {
  const [log, setLog] = useState(false);

  return (
    <>
      <h1>Doglas Rocha</h1>
      {cumprimento()}
      <p>{log ? msgLogin() : msgLogoff()}</p>
      <button onClick={() => setLog(!log)}>{log ? "Logoff" : "Login"}</button>
    </>
  );
}

export default App;
