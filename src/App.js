import React, { Component } from "react";
import Titulo from "./components/Titulo/Titulo";
import Notas from "./components/Notas/Notas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className="conteudo">
        <Titulo criarNota={this.criarNota.bind(this)} />
        <Notas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
