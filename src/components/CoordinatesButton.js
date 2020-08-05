// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{

    handleCoordinates = (e) => {
        let coordinatesArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render(){
        return(
            <button onClick={this.handleCoordinates}>Coordinates Button</button>
        )
    }
}

