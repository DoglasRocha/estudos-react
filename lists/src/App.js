import React from "react";

const carros = ["Onix", "Polo", "Ka", "Mobi", "Kwid", "Focus"];

function App() {
  const listaCarros = carros.map((carro, index) => {
    return <li key={index}>{carro}</li>;
  });

  return <ul>{listaCarros}</ul>;
}

export default App;
