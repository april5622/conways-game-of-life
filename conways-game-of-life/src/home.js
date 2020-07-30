import React, { useState, useRef, useEffect } from 'react';
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


function Home(){
    const [speed, setSpeed] = useState(100);
    const [rows, setRows] = useState(50);
    const [columns, setColumns] = useState(70)
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(
        Array(rows).fill().map(() =>  // creating an array as big as rows var and fill that with map
        Array(columns).fill(false) // where an inner array of columns var. false because every grid cell is off
    ));   

    const selectCell = (row, column) => {
        let gridCopy = arrayClone(gridFull); // not updating the state, rather a copy of it
        gridCopy[row][column] = !gridCopy[row][column];
        setGridFull(gridCopy);
    } 

    const rule = () => {
        let g = gridFull;
        let g2 = arrayClone(gridFull);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
               let neighbor = 0;
                directions.forEach(([x, y]) => {
                  const newI = i + x;
                  const newJ = j + y;
                  if(newI >= 0 && newI < rows && newJ >= 0 && newJ < columns){
                      neighbor += g[newI][newJ]
                  }
              });
                if (g[i][j] && (neighbor < 2 || neighbor > 3)) g2[i][j] = false;
                if (!g[i][j] && neighbor === 3) g2[i][j] = true;
            }
        }
        setGridFull(g2);
        setGeneration(generation + 1);
    };

    const random = () => {
        const gridCopy = arrayClone(gridFull);
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < columns; j++){
                if (Math.floor(Math.random() * 4) === 1){
                    gridCopy[i][j] = true;
                }
            }
        }
        setGridFull(gridCopy);
    };

    let intervalId = useRef(null);

    const startButton = () => {
        clearInterval(intervalId);
        intervalId = setInterval(rule, speed);
    }; 

    const stopButton = () => {
        clearInterval(intervalId);
    };


    const clearButton = () => {
        const grid = Array(rows).fill().map(() => Array(columns).fill(false));
        setGridFull(grid);
        setGeneration(0);
    };

    const gridSize = (size) => {
        switch (size){
            case "small":
                setColumns(20);
                setRows(10);
            break;
            case "medium":
                setColumns(50);
                setRows(30);
            break;
            default:
                setColumns(60);
                setRows(50);
            
        }
        clearButton();
    };

 
    // useEffect(() => {
    //     random();
    //     startButton();
    // },[]);


    return(
        <div>
            <h1>The Game of Life</h1>
            <Buttons 
                startButton={startButton}
                stopButton={stopButton}
                clearButton={clearButton}
                random={random}
                gridSize ={gridSize}
            />
            <Grid 
                gridFull = {gridFull} 
                rows = {rows}         
                columns = {columns}
                selectCell={selectCell}
            />
            
            <h2>Generations: {generation}</h2>

            <div className="about">
                <h3>About</h3>
                <p>The Game of Life is a cellular automaton devised by British mathematician John
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

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default Home;