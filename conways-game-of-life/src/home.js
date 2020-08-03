import React, { Component } from 'react';
import Grid from './grid';
import Buttons from './buttons'
import './index.css';

const directions = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

export default class home extends Component {
    constructor(){
        super();
        this.speed = 100; // how fast it should be running
        this.rows = 50; // how many rows are in the grid
        this.columns = 70; // columns in the grid

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => 
                Array(this.columns).fill(false) // false because every grid cell is off
            )
        }
    } // constructor

    selectCell = (row, column) => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[row][column] = !gridCopy[row][column];
        this.setState({
            gridFull: gridCopy
        });
    } 

    random = () => {
        const gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.columns; j++){
                if (Math.floor(Math.random() * 4) === 1){
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        });
    }

    startButton = () => {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.rule, this.speed);
    }

    stopButton = () => {
        clearInterval(this.intervalId);
    }

    slowButton = () => {
        this.speed = 1000;
        this.startButton();
    }

    fastButton = () => {
        this.speed = 100;
        this.startButton();
    }

    clearButton = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
		this.setState({
			gridFull: grid,
			generation: 0
		});
	}

    rule = () => {
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
               let neighbor = 0;
                directions.forEach(([x, y]) => {
                  const newI = i + x;
                  const newJ = j + y;
                  if(newI >= 0 && newI < this.rows && newJ >= 0 && newJ < this.columns){
                      neighbor += g[newI][newJ]
                  };
              });
                if (g[i][j] && (neighbor < 2 || neighbor > 3)) g2[i][j] = false;
                if (!g[i][j] && neighbor === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
          });
    };

    gridSize = (size) => {
        switch (size){
            case "small":
                this.columns= 20;
                this.rows = 10;
            break;
            case "medium":
                this.columns=50;
                this.rows=30;
            break;
            default:
                this.columns=60;
                this.rows=50;
            
        }
        this.clearButton();
    };

    componentDidMount() {
        this.random();
        this.startButton();
    }

    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Buttons
                    startButton={this.startButton}
                    stopButton={this.stopButton}
                    clearButton={this.clearButton}
                    slowButton={this.slowButton}
                    fastButton={this.fastButton}
                    random={this.random}
                    gridSize={this.gridSize}
                />
                <Grid 
                    gridFull = {this.state.gridFull} // these are passed as props 
                    rows = {this.rows}              // so we can use in grid component
                    columns = {this.columns}
                    selectCell={this.selectCell}
                />
                <h2>Generations: {this.state.generation}</h2>

                <div className="about">
                    <h3>About</h3>
                    <p>
                        The Game of Life is a cellular automaton devised by British mathematician John
                        Horton Coway in 1970. It is a zero-player game, which means it evolution is 
                        determined by its initial stae, requiring no further input. One interacts with
                        the Game of Life by creating an initial configuration and observing how it evolves.
                        It is a Turing complete and can simulate a univeral constructor or any other 
                        Turing machine.
                    </p>
                </div>

                <div className="rules">
                    <h3>Rules: </h3>
                        <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                        <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                        <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                        <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
                </div>
            </div>
        )
    }
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}