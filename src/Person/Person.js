import React from 'react';

const person = (props) => { //when using class based components we put this.props.
    return (
        <div>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p> 
            <p>{props.children}</p>
        </div>
    )
};

export default person;