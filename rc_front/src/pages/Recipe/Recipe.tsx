import {useParams} from 'react-router-dom';
import React from "react";
import {recipeAPI} from "../../services/RecipeService";
import s from './Recipe.module.scss';

interface Param {
  id: string;
}

const Recipe = () => {
  const params: Param = useParams();

  const {data: recipe, error, isLoading} = recipeAPI.useFetchRecipeQuery(params.id);
  console.log(recipe)

  return (
    <div className={s.recipe}>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <div className={s.top__block}>
        <div className={s.title}>
          {recipe && recipe.title}
        </div>
      </div>
      <div className={s.bottom__block}>
        <div className={s.content}>
          {recipe && recipe.content}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
