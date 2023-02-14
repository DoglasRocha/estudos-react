import logo from "./components/img/ferrari-logo.png";

function App() {
  const nome = "Doglas";
  const curso = "Curso de React";

  return (
    <main>
      <header>
        <p>{"Nome: " + nome}</p>
        <br />
        <p>{curso}</p>
      </header>
      <section>
        <img src={logo}></img>
        <img src="img/ferrari-car.jpg" />
      </section>
    </main>
  );
}

export default App;
