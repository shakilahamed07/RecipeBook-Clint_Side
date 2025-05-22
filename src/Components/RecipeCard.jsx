import React from 'react';
import { Link } from 'react-router';

const RecipeCard = ({recipe}) => {

    const{title, photo, likeCount, cuisineType}= recipe;

    return (
        <div className="max-w-[372px] mx-auto shadow-xl rounded-2xl">
        <div className="">
          <img
            className="h-[198px] w-full rounded-t-2xl"
            src={photo}
            alt=""
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold mb-6 ">
            {title}
          </h1>
          <div className="flex gap-3 mb-10">
            <span className="bg-base-200 px-3 py-1 rounded-full">Like : {likeCount}</span>
            <span className="bg-base-200 px-3 py-1 rounded-full">Type: {cuisineType}</span>
          </div>
          <div className="text-center mb-8">
            <Link
              to={`/recipe-details/${recipe._id}`}
              className="border border-primary text-primary bg-none font-bold rounded-full hover:bg-primary hover:text-white py-2 px-19"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    );
};

export default RecipeCard;