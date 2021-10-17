import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
            <div>
            <button onClick={this.props.onReset} className="btn btn-primary">Reset</button>
            {this.props.countrs.map(countr => 
                <Counter key={countr.id} 
                onDelete={this.props.onDelete} 
                onIncrement={this.props.onIncrement} 
                counter = {countr}>

                <h1>Conter #{countr.id}</h1>
                </Counter>
                )}
            </div>
            );
    }
}
 
export default Counters;