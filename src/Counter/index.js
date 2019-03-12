import React, { Component } from 'react';
import './index.css';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncreaseOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecreaseOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="counter-page">
        <h1 className="count">counter: { counter }</h1>
        <button className="btn-inc" onClick={this.handleIncreaseOne}> + 1 </button>
        <button className="btn-dec" onClick={this.handleDecreaseOne}> - 1 </button>
      </div>
    );
  }
}
export default Counter;
