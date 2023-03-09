import React from "react";

export default function Result(props) {
  return (
    <div>
      <p>Soma das notas: {props.gradeSum}</p>
      <p>{props.gradeSum >= 60 ? "Aprovado" : "Reprovado"}</p>
    </div>
  );
}
