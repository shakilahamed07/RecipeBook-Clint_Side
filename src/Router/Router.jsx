import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorElement from "../Pages/ErrorElement";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import All_Recipe from "../Pages/All_Recipe";
import AddRecipe from "../Pages/AddRecipe";
import MyRecipe from "../Pages/MyRecipe";
import RecipeDetails from "../Pages/RecipeDetails";
import PriveteRoute from "./PriveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all-recipe",
        Component: All_Recipe,
      },
      {
        path: "/add-recipe",
        element: (
          <PriveteRoute>
            <AddRecipe></AddRecipe>
          </PriveteRoute>
        ),
      },
      {
        path: "/my-recipe",
        element: (
          <PriveteRoute>
            <MyRecipe></MyRecipe>
          </PriveteRoute>
        ),
      },
      {
        path: "/add-recipe",
        element: (
          <PriveteRoute>
            <RecipeDetails></RecipeDetails>
          </PriveteRoute>
        ),
      },
    ],
  },
]);
