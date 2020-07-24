import React, { Component } from 'react';
import Grid from './grid';
import Buttons from './buttons'
//import Box from './box';
import './index.css';


export default class home extends Component {
    constructor(){
        super();
        this.speed = 100; // how fast it should be running
        this.rows = 30; // how many rows are in the grid
        this.columns = 50 // columns in the grid

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => 
                Array(this.columns).fill(false) // false because every grid cell is off
            )
        }
    } // constructor


    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Buttons
                    startButton={this.startButton}
                    stopButton={this.stopButton}
                    clearButton={this.clearButton}
                    random={this.random}
                />
                <Grid 
                />
                <h2>Generations: {this.state.generation}</h2>

                <h3>About</h3>
                <h3>Rules:</h3>
            </div>
        )
    }
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

