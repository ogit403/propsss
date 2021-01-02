import React, { Component } from 'react'

export default class RenderingElements extends Component {
    name = "A";
    age = 18;

    renderInfo = () => {
        return (
            <p>Username: {this.name} - Age: {this.age}</p>
        ); 
    }

    render() {
        return (
            <>
                <h3>RenderingElements</h3>
                {this.renderInfo()}
            </>
        )
    }
}
