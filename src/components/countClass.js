import React from "react";

class CountClass extends React.Component {
  increment = () => {
    this.setState({ count: this.state.count + this.state.by });
  };
  decrement = () => {
    this.setState({ count: this.state.count - this.state.by });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  by = (num) => {
    this.setState({ by: num });
  };

  constructor() {
    super();
    this.state = { count: 0, by: 1, photos: [] };
    console.log("constructor");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 10000 });
    }, 5000);
  }

  render() {
    return (
      <div>
        <div>
          <p>You clicked me {this.state.count}</p>
        </div>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
        <button onClick={this.reset}>Reset</button>
        <br />
        <p>Increment or Decrement By - {this.state.by} ?</p>
        {[2, 3, 4, 5, 10, 15, 50].map((num) => {
          return <button onClick={() => this.by(num)}>{num}</button>;
        })}

        {this.state.photos.map((photo, index) => {
          return (
            <div>
              <img src={photo.url} width={40} />
              {index + 1} - {photo.title}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountClass;
