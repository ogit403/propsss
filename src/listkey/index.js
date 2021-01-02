import React, { Component } from 'react'

export default class ListKey extends Component {
    
    constructor(props){
       super(props);
       this.state = {
            arr: [
                {name: "A", age: 1},
                {name: "B", age: 2},
                {name: "C", age: 3},
                {name: "D", age: 4}
            ],
       }    
    }

    renderItem = () => {
        const {arr} = this.state;
        return arr.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.age}
                    </td>
                </tr>
            );
        })
    }

    renderHTML = () => {
        return (
            <>
            <div className="container">
            <table className="table">
                    <thead>
                        <tr>
                            <td>Key</td>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItem()}
                    </tbody>
                </table>
            </div>
            </>
        );
    }
    
    
    
    render() {
        return (
            <>
                {this.renderHTML()}  
            </>
        )
    }
}
