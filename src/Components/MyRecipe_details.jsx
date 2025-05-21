import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const MyRecipe_details = ({ recipe, hendleDelete, hendleUpdate }) => {
  const {
    _id,
    title,
    photo,
    category,
    instructions,
    ingredients,
    likeCount,
    time,
    cuisineType,
  } = recipe;


  return (
    <div className="mx-2">
      <div className="flex flex-col lg:flex-row gap-10 items-center py-15 my-8 bg-white shadow-md rounded-2xl overflow-hidden p-6 space-y-6 lg:space-y-0 lg:space-x-6 max-w-5xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          <img
            src={photo}
            alt={title}
            className="rounded-xl w-full object-cover h-64 lg:h-full"
          />
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <div className="flex gap-2 mt-2">
            <span className="bg-base-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              Total Likes: {likeCount}
            </span>
            <span className="bg-base-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              Cuisine type: {cuisineType}
            </span>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => hendleUpdate(_id)}
              className="mt-4 bg-primary hover:bg-secondary text-white px-4 py-1.5 rounded-full font-bold w-fit flex items-center gap-2"
            >
              <GrUpdate size={23} />
              Update
            </button>
            <button
              onClick={() => hendleDelete(_id)}
              className="mt-4 bg-primary hover:bg-secondary text-white px-4 py-1.5 rounded-full font-bold w-fit flex items-center gap-2"
            >
              <MdDelete size={23} />
              Delete
            </button>
          </div>
        </div>

        <div className="h-60 bg-black w-[1px] lg:block hidden"></div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">1. Instructions</h3>
            <p className="text-sm text-gray-800 whitespace-pre-line">
              {instructions}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">2. Ingredients</h3>
            <p className="text-sm text-gray-800">{ingredients}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">3. Preparation Time</h3>
            <p className="text-sm text-gray-800">
              Cooking time: {time} minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">4. Categories</h3>
            <p className="text-sm text-gray-800">{category?.dinner}</p>
            <p className="text-sm text-gray-800">{category?.breakfast}</p>
            <p className="text-sm text-gray-800">{category?.lunch}</p>
            <p className="text-sm text-gray-800">{category?.Dessert}</p>
            <p className="text-sm text-gray-800">{category?.Vegan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe_details;
