import React, { useState } from 'react';
import Grid from './grid';
import Buttons from './buttons'
import './index.css';

function Home(){
    const [speed, setSpeed] = useState(100);
    const [rows, setRows] = useState(30);
    const [columns, setColumns] = useState(50)
    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(
        Array(rows).fill().map(() => 
        Array(columns).fill(false) // false because every grid cell is off
    ));


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
               
            />
            <h2>Generations: {generation}</h2>

            <h3>About</h3>
            <h3>Rules:</h3>
        </div>
    )

}

export default Home;