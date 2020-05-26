import React from 'react';

function Recipes({title, image, ingredients}){
    return(
    <div className="column">
        <div className="bg-box-shadow">
            <h3 className="text-center">{title}</h3>
            <img src={image} alt={ title } className="fluid-img"/>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
        </div>
    </div>
    );
}

export default Recipes;
