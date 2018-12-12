import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello React!"
    };
    this.onChange = this.changeValue.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-link">Hello React!</h1>
          <div className="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text">Text:</span>
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.message}
              onChange={this.onChange}
            />
          </div>
          <h1 className="bg-primary text-white text-center m-2 p-2">
            Typed Content: {this.state.message}
          </h1>
        </header>
      </div>
    );
  }

  // The first way
  // changeValue(event) {
  //   console.log(event.target.value);
  //   this.setState({
  //     message: event.target.value
  //   })
  // };

  // The second way
  changeValue = event => {
    console.log(event.target.value);
    this.setState({
      message: event.target.value
    });
  };
}

export default App;
