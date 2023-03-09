import React, { useState } from "react";
import Grade from "./components/Grade";
import Result from "./components/Result";

function App() {
  const [grades, setGrades] = useState([0, 0, 0, 0]);
  const gradesHandler = (e, num) => {
    let newGrades = grades.map((element, index) => {
      if (index === num) return e.target.value;
      else return element;
    });
    console.log(newGrades);
    setGrades(newGrades);
  };

  return (
    <>
      <Grade num={1} grade={grades[0]} setGrade={gradesHandler} />
      <Grade num={2} grade={grades[1]} setGrade={gradesHandler} />
      <Grade num={3} grade={grades[2]} setGrade={gradesHandler} />
      <Grade num={4} grade={grades[3]} setGrade={gradesHandler} />
      <Result
        gradeSum={
          grades.reduce((sum, current) => sum + parseFloat(current), 0) /
          grades.length
        }
      />
    </>
  );
}

export default App;
