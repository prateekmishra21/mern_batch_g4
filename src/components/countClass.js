import React from "react";

class Count extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, first_name: "Raect", last_name: "Js" };
  }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You Clicked {this.state.count}</p>
        <button onClick={this.onIncrement}>Subscribe Me</button>
      </div>
    );
  }
}

export default Count;
