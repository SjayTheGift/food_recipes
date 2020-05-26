import React,{useState, useEffect} from 'react';
import './App.css';
import SearchRecipes from "./searchRecipes";
import Recipes from './Recipes';

function App() {

  const APP_ID = "b5bdbf38";
  const App_KEY = "448e10d364a4aceab82f9fe57287c259";

  const [query, setQuery] = useState('chicken');
  const API_REQUEST = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
      console.log("effect active");
      getRecipes();
      
  },[query]);

  const getRecipes = async () =>{
      const response = await fetch(API_REQUEST);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  }

  return (
    <div className="container">
       <h1 className="text-center">
         Food Recipes
         <SearchRecipes value={setQuery}/>
         </h1>

      <div className="row">
          {recipes.map(recipe => (
              <Recipes title={recipe.recipe.label} 
                      image={recipe.recipe.image} 
                      ingredients={recipe.recipe.ingredients}
                      key={recipe.recipe.label}
              />
          ))}

      </div>
    </div>
  );
}

export default App;
