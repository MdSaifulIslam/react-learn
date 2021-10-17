import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

class App extends Component {
  state = {
    countrs: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.countrs.filter((c) => c.id !== counterID);
    this.setState({ countrs: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.countrs];

    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ countrs: counters });
  };

  handleReset = () => {
    const counters = this.state.countrs.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ countrs: counters });
  };


  render() {
    return (
      <React.Fragment>
        <Navbar 
        total = {(this.state.countrs.length >0) ? this.state.countrs.map(c=> c.value).reduce((d,e )=> d+e) : 0}
        />
        <main className="container">
          <Counters 
          countrs = {this.state.countrs}
          onReset = {this.handleReset}
          onDelete  = {this.handleDelete}
          onIncrement = {this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
