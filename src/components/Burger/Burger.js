import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  // before we can 'map' over our ingredients state from BurgerBuilder, we have to convert
  // ingredients from an object to an array so props.ingredients is {salad:1, bacon:1, cheese:2, meat: 2}
  // Object.keys(props.ingredients) becomes ["salad", "bacon", "cheese", "meat"]
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return  arr.concat(el)
    }, [])
    // console.log("[Burger.js] what is transformedIngredients", transformedIngredients)
    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;