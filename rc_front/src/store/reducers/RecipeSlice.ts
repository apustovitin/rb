import {IRecipe} from "../../models/IRecipe";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchRecipes} from "./ActionCreator";


export interface RecipeState {
  recipes: IRecipe[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: RecipeState = {
  recipes: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const recipeSlice = createSlice ({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRecipes.fulfilled.type]: (state, action: PayloadAction<IRecipe[]>) => {
      state.isLoading = false;
      state.error = '';
      state.recipes = action.payload;
    },
    [fetchRecipes.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default recipeSlice.reducer;
