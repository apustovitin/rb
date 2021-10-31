import React, {FC} from 'react';
import {IRecipe} from "../../../models/IRecipe"
import s from './RecipeItem.module.scss';
import { useHistory } from "react-router-dom";

interface RecipeItemProps {
  recipe: IRecipe;
}

const RecipeItem: FC<RecipeItemProps> = ({recipe}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/recipes/${recipe.id}`);
  };

  return (
    <div onClick={clickHandler} className={s.recipe}>
      {recipe.title}
    </div>
  );
};

export default RecipeItem;
