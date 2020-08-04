import React, { Component } from "react";

//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutri: [],
    };
  }

  componentDidMount() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts").then(
      (response) => {
        response.json().then((json) => {
          let state = this.state;
          state.nutri = json;
          this.setState(state);
          // console.log(json);
        });
      }
    );
  }

  render() {
    return (
      <div className="conttainer">
        {this.state.nutri.map((item) => {
          return (
            <article>
              <strong> {item.titulo}</strong>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;
