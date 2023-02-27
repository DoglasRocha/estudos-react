import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("Onix");

  const handlerOnChange = (component, setter) => {
    setter(component.target.value);
  };

  return (
    <>
      <label>Digite seu nome: </label>
      <input
        type="text"
        name="name"
        onChange={(e) => handlerOnChange(e, setName)}
        value={name}
      />
      <p>Nome digitado: {name}</p>
      <select value={car} onChange={(e) => handlerOnChange(e, setCar)}>
        <option value="Onix">Onix</option>
        <option value="Polo">Polo</option>
        <option value="Kwid">Kwid</option>
        <option value="Focus">Onix</option>
      </select>
      <p>Carro selecionado: {car}</p>
    </>
  );
}

export default App;
