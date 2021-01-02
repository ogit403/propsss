import React, { Component } from 'react'

export default class Car extends Component {

    constructor(props){
        super(props);
        this.state = {
            link: "./img/imgRedCar.jpg",
        }
    }
    
    Handle = (item) => {
        this.setState({
            link: `./img/img${item}Car.jpg`,
        })
    }
    renderHTML = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="img-fluid" src={this.state.link} alt=""></img>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger mr-3" onClick={() => this.Handle("Red")}>Red Color</button>
                            <button className="btn btn-dark mr-3" onClick={() => this.Handle("Black")}>Black Color</button>
                            <button className="btn btn-light" onClick={() => this.Handle("Silver")}>Silver Color</button>
                        </div>  
                    </div>
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
