import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "", todos: [] };
  }
  render() {
    return (
      <div>
        <h1>hello controlled components</h1>
        <ul>
          {this.state.todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
        <input value={this.state.value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button onClick={() => this.handleClick()}>submit</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.value]
    });
    this.setState({
      value: ""
    })
  }
}

export default App;
