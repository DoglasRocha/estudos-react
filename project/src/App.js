import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", course: "", year: "" });

  const handlerOnChange = (component) => {
    if (component.target.getAttribute("name") === "name") {
      setForm({
        name: component.target.value,
        course: form.course,
        year: form.year,
      });
    } else if (component.target.getAttribute("name") === "course") {
      setForm({
        name: form.name,
        course: component.target.value,
        year: form.year,
      });
    } else if (component.target.getAttribute("name") === "year") {
      setForm({
        name: form.name,
        course: form.course,
        year: component.target.value,
      });
    }
  };

  return (
    <>
      <label>Digite seu nome: </label>
      <input
        type="text"
        name="name"
        onChange={(e) => handlerOnChange(e)}
        value={form.name}
      />
      <br />
      <label>Digite seu Curso: </label>
      <input
        type="text"
        name="course"
        onChange={(e) => handlerOnChange(e)}
        value={form.course}
      />
      <br />
      <label>Digite seu Ano: </label>
      <input
        type="text"
        name="year"
        onChange={(e) => handlerOnChange(e)}
        value={form.year}
      />
      <br />
      <p>Nome digitado: {form.name}</p>
      <p>Curso digitado: {form.course}</p>
      <p>Ano digitado: {form.year}</p>
    </>
  );
}

export default App;
