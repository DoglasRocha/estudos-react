import React from "react";

export default function Number(props) {
  return (
    <div>
      <p>Valor do state num em NUMERO: {props.num}</p>
      <button onClick={() => props.setNum(props.num + 1)}>Adicionar 1</button>
    </div>
  );
}
