import React from 'react';
import './Person.css';

const person = (props) => { //when using class based components we put this.props.
    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
};

export default person;