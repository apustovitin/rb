import {AppDispatch} from "../store";
import axios from "axios";
import {IRecipe} from "../../models/IRecipe";
import {recipeSlice} from "./RecipeSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchRecipes = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(recipeSlice.actions.recipesFetching())
//     const response = await axios.get<IRecipe[]>('http://192.168.56.109:8000/recipes')
//     dispatch(recipeSlice.actions.recipesFetchingSuccess(response.data))
//   } catch (e: any) {
//     dispatch(recipeSlice.actions.recipesFetchingError(e.message))
//   }
// }

export const fetchRecipes = createAsyncThunk(
  'recipe/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IRecipe[]>('http://192.168.56.109:8000/recipes')
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить рецепты")
    }
  }
)
