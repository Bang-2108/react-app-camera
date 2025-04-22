import React, { Component } from 'react';

class StateDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                name: "Zoan Thi Bang",
                age: 19
            }
        }
    }
    render() {
        return (
            <div>
                <h1>My name is: {this.state.fields.name}</h1>
            </div>
        );
    }
}

export default StateDemo;