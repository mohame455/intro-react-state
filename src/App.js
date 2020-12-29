import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      isShow: false,
    };
  }

  increase = () => {
    this.setState({
      inputValue: this.state.inputValue + 1,
    });
  };

  decrease = () => {
    this.setState({
      inputValue: this.state.inputValue - 1,
    });
  };

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isShow: true,
      });
    },10000);
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleShow}
          className={this.state.isShow ? "red" : "green"}
        >
          {!this.state.isShow ? "display counter" : "hide counter"}
        </button>
        {this.state.isShow ? (
          <div>
            <button onClick={this.decrease}>-</button>
            <input
              type="number"
              placeholder="0"
              value={this.state.inputValue}
            />
            <button onClick={this.increase}>+</button>
          </div>
        ) : (
          <p>click on the button to show the counter</p>
        )}
      </div>
    );
  }
}

export default App;
