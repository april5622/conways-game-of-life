import React from 'react'
import './index.css';

function Cell(props){
// creating own selectCell fn and calling fn from props
// then we pass pass rows & columns 
// since theres no way to pass anything to stop props if
// its inside the render method
    const selectCell = () => {
        props.selectCell(props.rows, props.columns) 
    }                                              
    return (
        <div 
            className ={props.cellClass} 
            id ={props.id}
            onClick = {selectCell}
         >                
        </div>
    );
}

export default Cell;