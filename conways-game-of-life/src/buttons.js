import React from 'react';
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';


function Buttons(props){
    const handleSelect = (evt) => {
        props.gridSize(evt);
    }

    return (
        <div className="center">
            <ButtonToolbar>
                <button className="btn btn-default" onClick={props.startButton}>Start</button>
                <button className="btn btn-default" onClick={props.stopButton}>Stop</button>
                <button className="btn btn-default" onClick={props.clearButton}>Clear</button> 
                <button className="btn btn-default" onClick={props.random}>Random</button>
                <DropdownButton title="Grid Size" id="size-menu" onSelect={handleSelect}>
                    <Dropdown.Item eventKey="small">Small</Dropdown.Item>
                    <Dropdown.Item eventKey="medium">Medium</Dropdown.Item>
                    <Dropdown.Item eventKey="large">Large</Dropdown.Item>
                </DropdownButton>
           </ButtonToolbar>
        </div>
    )
}


export default Buttons;
