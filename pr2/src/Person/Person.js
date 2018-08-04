import React from 'react';
import classes from './Person.css';

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}></input>
        </div>
    );
}

export default Person;