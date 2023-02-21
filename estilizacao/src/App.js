import "./App.css";
import Clock from "./components/Clock";

function App() {
  const textoDestaque = {
    color: "#00f",
    fontSize: "3rem",
  };

  return (
    <section className="container">
      <Clock />
      <h1 style={{ color: "#0f0", fontSize: "5rem" }}>Boa tarde</h1>
      <h2 style={textoDestaque}>Meu nome é Doglas</h2>
      <p className="texto">Olá</p>
    </section>
  );
}

export default App;
