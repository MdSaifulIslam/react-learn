import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount(){
    console.log(this.props);
    
  }
  render() {
    return (
      <div>
        {this.props.children}
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="m-2 btn btn-danger" onClick={()=> this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value ;
  }
}

export default Counter;
