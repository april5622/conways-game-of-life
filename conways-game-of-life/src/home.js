import React, { Component } from 'react';
import Grid from './grid';
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
    }

    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Grid 
                    gridFull = {this.state.gridFull} // these are passed as props 
                    rows = {this.rows}              // so we can use in grid component
                    columns = {this.columns}
                    selectBox={this.selectBox}
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        )
    }
}

