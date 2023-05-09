import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          placeholder="Please Enter Password"
          ref={(ref) => {
            this.input = ref;
          }}
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>Check</button>
      </div>
    );
  }
}

export default ValidationSample;
