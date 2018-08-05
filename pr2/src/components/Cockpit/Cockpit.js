import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (      
        <div className={classes.App}>
            <h1>Hallo there, look at sese persons pls!</h1>
            <p className={assignedClasses.join(' ')}>Hmm assignedClasses</p>
            <p>Counter: {props.counter}</p>
            <button className={btnClass} onClick={props.clickMe}>Klick mi!</button>
            <p>Show Persons: </p>
            <button className="button-cstm" onClick={props.togglePersons}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;