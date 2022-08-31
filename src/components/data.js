import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: -1,
      isOpenAll: false,
      content: [
        { title: "Basic React", description: "you will learn about react" },
        { title: "React Hooks", description: "we will work on hooks" },
      ],
    };
  }

  render() {
    return (
      <div>
        <p>Course Content</p>
        {this.state.flag} -{" "}
        <button
          onClick={() => {
            this.setState({ isOpenAll: !this.state.isOpenAll });
          }}
        >
          Expand All
        </button>
        {this.state.content.map((value, index) => {
          return (
            <div>
              <p
                onClick={() => {
                  this.setState({ flag: index, isOpenAll: false });
                }}
              >
                {value.title} - {index}
              </p>
              {this.state.flag === index || this.state.isOpenAll === true
                ? value.description
                : null}{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Toggle;
