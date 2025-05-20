import React from 'react';
import { Link } from 'react-router';

const RecipeCard = () => {

    return (
        <div className="max-w-[372px] shadow-md rounded-2xl">
        <div className="">
          <img
            className="h-[198px] rounded-t-2xl"
            src="https://i.ibb.co/xqnMX6TB/Beanar.jpg"
            alt=""
          />
        </div>
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold mb-6">
            This is a recipe Title for the recipe books.
          </h1>
          <div className="flex gap-6 mb-10">
            <span className="bg-base-200 px-3 py-1 rounded-full font-medium">Like : 12</span>
            <span className="bg-base-200 px-3 py-1 rounded-full font-medium">Type: American</span>
          </div>
          <div className="text-center mb-8">
            <Link
              to={``}
              className="border border-primary text-primary bg-none font-bold rounded-full hover:bg-primary hover:text-white py-2 px-25"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    );
};

export default RecipeCard;