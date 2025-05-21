import React, { useState } from "react";
import { useLoaderData } from "react-router";
import RecipeCard from "../Components/RecipeCard";

const All_Recipe = () => {
  const allRecipe = useLoaderData();
  const [filterRecipe, setFilterRecipe] = useState(allRecipe);

  const hendleFilter = (e)=>{
    const cuisineType = e.target.value;
    if(!cuisineType){
        return setFilterRecipe(allRecipe);
    }
    const filterData = allRecipe.filter(recipe => recipe.cuisineType === cuisineType)
    setFilterRecipe(filterData)
  }

  return (
    <div className="mb-10">
        <div className="flex items-center justify-center w-fit mx-auto py-2 px-4 rounded-xl bg-secondary text-white mt-5 ">
            <h2 className="text-xl font-medium mr-2">Filter:</h2>
            <select name="" onChange={hendleFilter} id="" className="border py-1 px-3  rounded-xl bg-white text-black">
                <option value="">Select All</option>
                <option value="Bengali">Bengali</option>
                <option value="Chains">Chains</option>
                <option value="Mexican">Mexican</option>
                <option value="Americano">Americano</option>
                <option value="Indian">Indian</option>
            </select>
        </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-6 max-w-[1350px] mx-auto  justify-center-safe  px-2 mt-10">
        {
            filterRecipe.map(recipe=> <RecipeCard recipe={recipe} key={recipe._id} />)
        }
      </div>
    </div>
  );
};

export default All_Recipe;
