import React, { Component } from 'react'


export default class Example extends Component {
    
    isLogin = false;

    HandleClick = () => {
        // console.log(this.isLogin);
        this.isLogin = !this.isLogin;
        // console.log(this.isLogin);
    }
    
    renderHTML = () => {
        return (
            <>
                {this.isLogin === true ? <h1>Hello A</h1> : <button className="btn btn-success" onClick={this.HandleClick}>Hello</button>}
            </>
        );
    }

    render() {
        return (
            <div className="example">
                {/* <h3>Hello</h3> */}
                {this.renderHTML()}
            </div>
        )
    }
}
