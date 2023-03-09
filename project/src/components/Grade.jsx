import React from "react";

export default function Nota(props) {
  return (
    <div>
      <legend>Informe a nota {props.num}: </legend>
      <input
        type="text"
        name="nota"
        value={props.grade}
        onChange={(e) => props.setGrade(e, props.num - 1)}
      />
    </div>
  );
}
