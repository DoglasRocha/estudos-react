import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const saveItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const queryItem = (key) => {
    alert(localStorage.getItem(key));
  };

  const deleteItem = (key) => {
    localStorage.removeItem(key);
  };

  return (
    <>
      <label htmlFor="name">Digite um nome: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          saveItem("ls_name", name);
        }}
      >
        Gravar Nome
      </button>
      <button
        onClick={() => {
          queryItem("ls_name");
        }}
      >
        Ver nome
      </button>
      <button
        onClick={() => {
          deleteItem("ls_name");
        }}
      >
        Remover nome
      </button>
    </>
  );
}

export default App;
