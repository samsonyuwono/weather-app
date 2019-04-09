import React, { Component } from "react";
import Column from "./Column";
import "./panel.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          day: "Monday",
          image: "test.com",
          high: 78,
          low: 67
        },
        {
          day: "Tuesday",
          image: "test.com",
          high: 83,
          low: 66
        },
        {
          day: "Wednesday",
          image: "test.com",
          high: 77,
          low: 65
        },
        {
          day: "Thursday",
          image: "test.com",
          high: 78,
          low: 64
        },
        {
          day: "Friday",
          image: "test.com",
          high: 77,
          low: 62
        },
        {
          day: "Saturday",
          image: "test.com",
          high: 70,
          low: 60
        },
        {
          day: "Sunday",
          image: "test.com",
          high: 73,
          low: 60
        }
      ]
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="panel">
        <div className="panel-cards" />
        {this.state.columns.map((column, columnIndex) => {
          return (
            <Column
              column={column}
              columnIndex={columnIndex}
              key={columnIndex}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
