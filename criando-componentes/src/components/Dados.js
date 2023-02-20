import React from "react";

export default function Data(props) {
  return (
    <section>
      <p>Canal: {props.canal}</p>
      <p>Youtube: {props.youtube}</p>
      <p>Curso: {props.curso}</p>
    </section>
  );
}
