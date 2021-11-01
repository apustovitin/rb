import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IRecipe, IReply, ICategory, IReplyCategory} from "../models/IRecipe";


export const recipeAPI = createApi({
  reducerPath: 'recipeAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.56.109:8000'}),
  tagTypes: ['Recipe', 'Category'],
  endpoints: (build) => ({
    fetchAllRecipes: build.query<IReply, any>({
      query: () => ({
        url: '/recipes'
      }),
      providesTags: result => ['Recipe']
    }),
    fetchRecipesPage: build.query<IReply, Array<number>>({
      query: ([limit, offset]) => ({
        url: '/recipes',
        params: {
          limit: limit,
          offset: offset
        }
      }),
      providesTags: result => ['Recipe']
    }),
    fetchFiltredRecipes: build.query<IReply, Array<string | null>>({
      query: ([category]) => ({
        url: '/recipes',
        params: {
          category: category
        }
      }),
      providesTags: result => ['Recipe']
    }),
    fetchRecipe: build.query<IRecipe, string>({
      query: (id) => ({
        url: "/recipes/" + id,
      }),
      providesTags: result => ['Recipe']
    }),
    fetchAllCategories: build.query<IReplyCategory, any>({
      query: () => ({
        url: "/categories/",
      }),
      providesTags: result => ['Category']
    }),
    fetchCategory: build.query<ICategory, string>({
      query: (id) => ({
        url: "/categories/" + id,
      }),
      providesTags: categories => ['Category']
    }),
    createRecipe: build.mutation<IRecipe, IRecipe>({
      query: (recipe) => ({
        url: '/recipes',
        method: 'POST',
        body: recipe
      }),
      invalidatesTags: ['Recipe']
    }),
    updateRecipe: build.mutation<IRecipe, IRecipe>({
      query: (recipe) => ({
        url: `/recipes/${recipe.id}`,
        method: 'PUT',
        body: recipe
      }),
      invalidatesTags: ['Recipe']
    }),
    deleteRecipe: build.mutation<IRecipe, IRecipe>({
      query: (recipe) => ({
        url: `/recipes/${recipe.id}`,
        method: 'DELETE',
        body: recipe
      }),
      invalidatesTags: ['Recipe']
    }),
  })
})
