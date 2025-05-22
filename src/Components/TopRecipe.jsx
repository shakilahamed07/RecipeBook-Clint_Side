import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import RecipeCard from "./RecipeCard";

const TopRecipe = () => {

  const [topRecipe, setTopRecipe] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/toprecipe`)
      .then((res) => res.json())
      .then((data) => setTopRecipe(data));
  }, []);


  return (
    <div className="mt-20 mb-15">
      <h1 className="text-3xl font-bold text-center">Top Recipe</h1>
      <p className="text-base-300 mt-6 text-center mb-16 max-w-[900px] mx-auto sm:px-0 px-3 ">
        Discover our top recipes, handpicked for flavor and ease. From quick
        weeknight dinners to impressive desserts, these crowd-pleasers are
        tested, trusted, and sure to satisfy every craving.
      </p>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 px-2 gap-8 max-w-[1050px] mx-auto">
        {
          topRecipe.map(recipe => <RecipeCard recipe={recipe} key={recipe._id} />)
        }
      </div>

      <div className="text-center mt-15">
        <Link
          to={`/all-recipe`}
          className="border border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-2 px-12"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

export default TopRecipe;
