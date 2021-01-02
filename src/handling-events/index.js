import React, { Component } from 'react'
import Example from './example';

export default class HandlingEvents extends Component {

    PrintSomething = () => {
        console.log(123);
    }

    PrintParams = (i) => {
        console.log(i);
    }

    render() {
        return (
            <>
                {/* <button className="btn btn-success" onClick={this.PrintSomething}>Click</button>
                <button className="btn btn-danger" onClick={() => {this.PrintParams("Nguyen Van A")}}>Click Params</button> */}
                <Example/>
            </>
        )
    }
}
