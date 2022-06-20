import React, { Component } from 'react';

class MyClassComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            model:"X5",
            make:"BMW",
            year:"2016",
            color:"Blue"
        }
    }
    handleChange =(event)=>{
        this.setState(
            {
                color:event.target.value
            }
        );
    }
    render() {
        return (
            <div>
                <h1> The car we are talking about is a {this.state.model} from the company {this.state.make}. </h1>
                <h1> The car was made in {this.state.year} and is of the color {this.state.color} </h1>
                <h1>The car was made in {this.props.country}</h1><br></br>
                Type here to change color
                <input type='text' id='color' name='color' onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default MyClassComponent;