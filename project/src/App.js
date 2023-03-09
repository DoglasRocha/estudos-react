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

  return <></>;
}

export default App;
