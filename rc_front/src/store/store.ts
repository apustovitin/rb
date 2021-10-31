import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/RecipeSlice"
import {recipeAPI} from "../services/RecipeService"


const rootReducer = combineReducers({
  recipeReducer,
  [recipeAPI.reducerPath]: recipeAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(recipeAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
