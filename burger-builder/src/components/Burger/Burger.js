import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingKey + i} type={ingKey} />;
                });
        })
        .reduce((allIngredients, currIngredient) => {
            return allIngredients.concat(currIngredient);
        }, []);

    return (
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top"/>
            {transformedIngredients.length ? transformedIngredients: "Yo WTF put some cheese in there or smth!"}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;