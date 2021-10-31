import React, {useState} from "react";
import {recipeAPI} from "../../../../services/RecipeService";
import RecipeItem from "../../../../shared/components/RecipeItem/RecipeItem";
import {IRecipe} from "../../../../models/IRecipe";

const RecipeContainer = () => {
  const [options, setOptions] = useState<Array<number>>([10, 0])
  const {data: recipes, error, isLoading, refetch} = recipeAPI.useFetchRecipesPageQuery(options);
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
};

export default RecipeContainer;
