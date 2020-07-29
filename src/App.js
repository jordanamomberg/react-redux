import React from "react";
import "./App.css";
import Numeros from "./components/Numeros";
import Multi from "./components/Multi";
import Soma from "./components/Soma";
import Sub from "./components/Sub";
import Divisao from "./components/Divisao";

function App() {
  return (
    <div className="App">
      <h1>Exercícios React-Redux</h1>
      <div className="linha">
        <Numeros></Numeros>
      </div>
      <div className="linha">
        <Multi></Multi>
        <Soma></Soma>
        <Sub></Sub>
        <Divisao></Divisao>
      </div>
    </div>
  );
}

export default App;
