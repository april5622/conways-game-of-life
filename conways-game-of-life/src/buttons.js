// buttons fv
import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';


function Buttons(props){
    return (
        <div className="center">
            <ButtonToolbar>
                <button className="btn btn-default" onClick={props.startButton}>Start</button>
                <button className="btn btn-default" onClick={props.stopButton}>Stop</button>
                <button className="btn btn-default" onClick={props.clearButton}>Clear</button> 
                <button className="btn btn-default" onClick={props.random}>Random</button>
           </ButtonToolbar>
        </div>
    )
}


export default Buttons;
