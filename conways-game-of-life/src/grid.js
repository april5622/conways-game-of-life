import React from 'react';
import Cell from "./cell";
import './index.css';

function Grid(props) {
    const width = props.columns * 14;
        const rowsArr = []; // empty array to add everything that will show up in the grid

        const cellClass = ""; // use while creating the array
        for (var i = 0; i < props.rows; i++){   // will have nested for loop to go through rows & columns
            for (var j = 0; j < props.columns; j++){
                const cellId = i + "_" + j; // id to go along with each box element

                const cellClass = props.gridFull[i][j] ? "cell alive" : "cell dead" // true if cell is alive or dead
                rowsArr.push( //pushing a cell component 
                    <Cell 
                        cellClass={cellClass}
                        key={cellId}
                        cellId={cellId}
                        row={i}
                        columns={j}
                        selectCell={props.selectCell}
                    /> //Cell
                ) // rowsArr.push
            } //for loop for j
        } // for loop for  i

    return (
        <div className="grid" style={{width: width}}>{rowsArr}</div> // width will changing depending on grid
    )
}

export default Grid;