import React, { Component } from "react";
import "./App.css";

//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    };
  }

  componentDidMount() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts").then((r) => {
      r.json().then((json) => {
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        //console.log(json);
      });
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <strong>React Nutri</strong>
        </header>
        {this.state.nutri.map((item) => {
          return (
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img className="capa" src={item.capa} alt={item.titulo} />
              <p className="subtitulo">{item.subtitulo}</p>
              <a href="https://www.pudim.com.br" className="botao">
                Veja mais
              </a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;
