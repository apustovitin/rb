import React from 'react';
import s from './Header.module.scss';
import {ReactComponent as HeaderLogo} from '../../asserts/icons/food-svgrepo-com.svg';
import Select from 'react-select';
import {recipeAPI} from "../../services/RecipeService";
import {ICategory} from "../../models/IRecipe";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface IOptionsItem {
  value: number;
  label: string;
}


export const Header = () => {
  const history = useHistory();
  const {data: categories} = recipeAPI.useFetchAllCategoriesQuery('');
  console.log(categories)
  const options: Array<IOptionsItem> = [];
  categories && categories.results.forEach((category: ICategory) => {
    options.push({value: category.id, label: category.category});
  })

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: '#B4B1B1',
      width: '194px',
      heigth: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
  };

  const selectHandler = (e: any) => {
    console.log(e)
    const id: number = e.value
    history.push(`/recipes?category=${id}`);
  }

  const clickHandler = () => {
    history.push(`/`);
  };

  const clickSwagerHandler = () => {
    history.push(`/openapi/`);
  };

  return (
    <header className={s.header}>
      <div className={s.logo_wrapper}>
        <div className={s.logo}>
          <HeaderLogo className={s.logo_svg}/>
        </div>
        <div className={s.title}>Recipes App</div>
      </div>
      <div className={s.selector_wrapper}>
        <div className={s.swagger_button}>
          <Button onClick={clickSwagerHandler} variant="outline-dark">Swagger</Button>
        </div>
        <div className={s.home_button}>
          <Button onClick={clickHandler} variant="outline-dark">Home</Button>
        </div>
        <div className={s.selector}>
          <Select onChange={selectHandler} styles={colourStyles} options={options} />
        </div>
      </div>
    </header>
  );
};
