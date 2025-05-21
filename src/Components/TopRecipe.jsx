import React from "react";
import { Link } from "react-router";

const TopRecipe = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center">Top Recipe</h1>
      <p className="text-base-300 mt-6 text-center mb-16 max-w-[900px] mx-auto sm:px-0 px-3 ">
        Discover our top recipes, handpicked for flavor and ease. From quick
        weeknight dinners to impressive desserts, these crowd-pleasers are
        tested, trusted, and sure to satisfy every craving.
      </p>

      <div className="grid grid-cols-3 gap-8 max-w-[1210px] mx-auto">
        
      </div>

      <div className="text-center mt-15">
        <Link
          to={``}
          className="border border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-2 px-12"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

export default TopRecipe;
