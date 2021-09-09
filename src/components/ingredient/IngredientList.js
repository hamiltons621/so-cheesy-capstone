import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "./Ingredient.css"


export const IngredientList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()

  ), [])

  return (
    <>
      <section className="ingredient__list">
        
        {
          ingredients.map(ingredient => {

            return <IngredientCard
              ingredientType={ingredient.type}
              key={ingredient.id}
              ingredient={ingredient}
            />

          })
        }
      </section>
    </>
  )
}