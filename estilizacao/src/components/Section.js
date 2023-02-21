import React from "react";
import Data from "./Data";

export default function Body() {
  const curso = () => "ala o curso";
  const somar = (v1, v2) => v1 + v2;

  return (
    <main>
      <h2>Curso de React</h2>
      <p>Boa tarde</p>
      <Data
        canal="Doglas Rocha"
        youtube="youtube.com"
        curso={curso}
        somar={somar}
      />
    </main>
  );
}
