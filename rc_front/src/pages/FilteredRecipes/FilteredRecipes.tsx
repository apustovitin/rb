import React from "react";
import {useLocation} from 'react-router-dom';
import {recipeAPI} from "../../services/RecipeService";
import {IRecipe} from "../../models/IRecipe";
import RecipeItem from "../../shared/components/RecipeItem/RecipeItem";

const FilteredRecipes = () => {
  const location = useLocation();
  const search = location.search;
  const query = new URLSearchParams(search);
  const category = query.get('category');
  const {data: recipes, error, isLoading} = recipeAPI.useFetchFiltredRecipesQuery([category]);
  console.log(recipes)

  return (
    <div>
      <div className="recipe__list">
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {recipes && recipes.results.map((recipe: IRecipe) =>
          <RecipeItem key={recipe.id}  recipe={recipe} />
        )}
      </div>
    </div>
  );
}

export default FilteredRecipes;
