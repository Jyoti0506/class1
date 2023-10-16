import React, { Component } from 'react'

class Ex9 extends Component {
    constructor(props) {
        super(props);
        // class property
        this.sample = {
            x:21,
            y:34
        };
        this.title = "welcome to title";
        // state as an object
        this.state = {
            a:20,
            b:30
        }
    }

    render() {
        return (
            <div>
                <h1>States in class components</h1>
                <h4> { this.sample.x } </h4>
                <hr />
                <h4>{ this.state.b } </h4>
                <hr />
                <h4> {this.title} </h4>
            </div>
        )
    }
}

export default Ex9