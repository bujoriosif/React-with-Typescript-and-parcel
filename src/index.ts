import * as React from "react";
import * as ReactDOM from "react-dom";
import AppComponent from "./Components/AppComponent";

export class App {
  constructor() {
    this.render();
  }
  render() {
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById("root")
    );
  }
}

new App();
