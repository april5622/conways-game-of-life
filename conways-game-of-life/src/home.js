import React, { useState, useRef } from 'react';
import Grid from './grid';
import Buttons from './buttons'
import './index.css';

function Home(){
    const [speed, setSpeed] = useState(100); // how fast program will run
    const [rows, setRows] = useState(30);
    const [columns, setColumns] = useState(50)
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(
        Array(rows).fill().map(() =>  // creating an array as big as rows var and fill that with map
        Array(columns).fill(false) // where an inner array of columns var. false because every grid cell is off
    ));

    const selectCell = (row, column) => {
        let gridCopy = arrayClone(gridFull);
        gridCopy[row][column] = !gridCopy[row][column];
        setGridFull(gridCopy);
    } // selectCell


    return(
        <div>
            <h1>The Game of Life</h1>
            <Buttons
                startButton={startButton}
                stopButton={stopButton}
                clearButton={clearButton}
                random={random}
            />
            <Grid 
                gridFull = {gridFull} // these are passed as props 
                rows = {rows}         // so we can use in grid component
                columns = {columns}
                selectCell={selectCell}
            />
            <h2>Generations: {generation}</h2>

            <h3>About</h3>
            <h3>Rules:</h3>
        </div>
    )

}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default Home;