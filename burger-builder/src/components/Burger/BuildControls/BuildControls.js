import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
]; 

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => 
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                addIngredient={() => props.addIngredient(ctrl.type)} 
                removeIngredient={() => props.removeIngredient(ctrl.type)} 
                disableRemoveButton={props.disableRemoveButton[ctrl.type]}
            />)
        }
        <button disabled={!props.purchaseable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;