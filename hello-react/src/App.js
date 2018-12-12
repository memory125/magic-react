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
        </header>
        <div>
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

          <h3 className="bg-info m-1">Multiple Inputs</h3>
          <div class="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">First and last name</span>
            </div>
            <input
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>

          <h3 className="bg-info m-1">Multiple Addons</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <div className="input-group-append">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
          </div>

          <h3 className="bg-info m-1">Button Addons</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Button
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" id="button-addon3">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with two button addons"
              aria-describedby="button-addon3"
            />
          </div>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div class="input-group-append" id="button-addon4">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>

          <h3 className="bg-info m-1">Segmented Buttons</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button type="button" className="btn btn-outline-secondary">
                Action
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#1">
                  Action
                </a>
                <a className="dropdown-item" href="#2">
                  Another action
                </a>
                <a className="dropdown-item" href="#3">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#4">
                  Separated link
                </a>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-outline-secondary">
                Action
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#1">
                  Action
                </a>
                <a className="dropdown-item" href="#2">
                  Another action
                </a>
                <a className="dropdown-item" href="#3">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#4">
                  Separated link
                </a>
              </div>
            </div>
          </div>

          <h3 className="bg-info m-1">Custom Select</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                Options
              </label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <select
              class="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>

          <h3 className="bg-info m-1">Custom File Input </h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" for="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
              />
              <label
                className="custom-file-label"
                for="inputGroupFile02"
                aria-describedby="inputGroupFileAddon02"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroupFileAddon02">
                Upload
              </span>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon03"
              >
                Button
              </button>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile03"
                aria-describedby="inputGroupFileAddon03"
              />
              <label className="custom-file-label" for="inputGroupFile03">
                Choose file
              </label>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <label className="custom-file-label" for="inputGroupFile04">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // The first way
  // changeValue(eve
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
