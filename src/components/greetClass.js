import React from "react";

class GreetClass extends React.Component {
  constructor(props) {
    super();
    this.state = { count: 0, click: 1 };
  }

  onIncrement = () => {
    for (var i = 0; i < 5; i++) {
      // this.setState({ click: this.state.click + i });
      this.setState((prevState) => {
        return { click: prevState.click + 1 };
      });
    }
  };

  render() {
    console.log("Rendering");
    return (
      <div>
        {/* <p>I am render - {this.props.tech}</p> */}
        <p>You Clicked me {this.state.click} Times</p>
        <button onClick={this.onIncrement}>Click</button>
      </div>
    );
  }
}

export default GreetClass;
