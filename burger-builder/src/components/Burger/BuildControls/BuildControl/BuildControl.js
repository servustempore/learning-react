import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button disabled={props.disableRemoveButton} onClick={props.removeIngredient} className={classes.Less}>Less</button>
        <button onClick={props.addIngredient} className={classes.More}>More</button>
    </div>
);

export default BuildControl;