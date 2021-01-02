import React, { Component } from 'react'


export default class State extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
        }
    }
    
    HandleClick = () => {
        this.setState({
            isLogin: true
        }, () => {
            console.log(this.state)
        });
    }
    
    renderHTML = () => {
        return (
            <>
                {this.state.isLogin ? <h1>Hello A</h1> : <button className="btn btn-success" onClick={this.HandleClick}>Hello</button>}
            </>
        );
    }

    render() {
        return (
            <div className="example">
                {this.renderHTML()}
            </div>
        )
    }
}
