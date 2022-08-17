import React, { Component } from "react";
class Home extends React.Component {
  constructor(props) {
    super();
    this.name = "React and Node";
  }

  render() {
    return (
      <div>
        <p>
          This is my Home {this.name} - {this.props.name}{" "}
        </p>
      </div>
    );
  }
}

class Home2 extends React.Component {
  render() {
    return (
      <div>
        <p>This is my Home Two</p>
      </div>
    );
  }
}
export default Home;
export { Home2 };
