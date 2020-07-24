import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';


export default class buttons extends Component {
    handleSelect = e => {
        this.props.gridSize(e)
    }
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <button className="btn btn-default" onClick={this.props.startButton}>Start</button>
                    <button className="btn btn-default" onClick={this.props.stopButton}>Stop</button>
                    <button className="btn btn-default" onClick={this.props.clearButton}>Clear</button>
                    <button className="btn btn-default" onClick={this.props.random}>Random</button>
                </ButtonToolbar>
            </div>
        )
    }
}
