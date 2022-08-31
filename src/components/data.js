import React from "react";

class MyData extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: -1,
      isShowAll: false,
      data: [
        {
          id: 1,
          userID: 2,
          title: "Basic React",
          details: "YOu will learn about react Js",
        },

        {
          id: 1,
          userID: 2,
          title: "Basic Node",
          details: "YOu will learn about node Js",
        },
      ],
    };
  }

  getData = () => {
    this.setState({ isShowAll: !this.state.isShowAll, flag: -1 });
  };

  render() {
    return (
      <React.Fragment>
        <p>Here I have my data</p>
        <button onClick={this.getData}>Show</button>
        {this.state.data.map((value, index) => {
          return (
            <p
              onClick={() => {
                this.setState({ flag: index });
              }}
            >
              {value.title}
              <br />
              {this.state.flag === index || this.state.isShowAll === true
                ? value.details
                : null}
            </p>
          );
        })}
      </React.Fragment>
    );
  }
}

export default MyData;
