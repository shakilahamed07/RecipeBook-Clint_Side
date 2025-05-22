import React, { use, useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const RecipeDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const {user} = use(AuthContext);

  useEffect(() => {
    fetch(`https://recipe-book-server-side-ten.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [details, id]);
  console.log(details)

  const [showLike, setShowLike] = useState(false);

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
    email
  } = details;

  const hendelLike = (id) => {
    if(email === user.email){
        return
    }
    setShowLike(true);
    const updateLike = { likeCount: likeCount + 1 };
    console.log(user.email);

    //* Like set db
    fetch(`https://recipe-book-server-side-ten.vercel.app/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateLike),
    })
      .then((res) => res.json())
      .then(() => {
      });
  };
  console.log();

  return (
    <div className="mx-2">
      <div className="flex flex-col lg:flex-row gap-10 items-center py-15 my-8  shadow-md rounded-2xl overflow-hidden p-6 space-y-6 lg:space-y-0 lg:space-x-6 max-w-5xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col ">
          <img
            src={photo}
            alt={title}
            className="rounded-xl w-full object-cover h-64 lg:h-full"
          />
          <h2 className="text-2xl font-bold mt-4">{title}</h2>
          <div className="flex gap-2 mt-2">
            <span className="bg-base-200 text-base-300 px-3 py-1 rounded-full text-sm">
              Total Likes: {likeCount}
            </span>
            <span className="bg-base-200 text-base-300 px-3 py-1 rounded-full text-sm">
              Cuisine type: {cuisineType}
            </span>
          </div>
          <button
            onClick={() => hendelLike(_id)}
            className="mt-4 bg-primary hover:bg-secondary text-white px-4 py-1.5 rounded-full font-bold w-fit flex items-center gap-2"
          >
            {showLike ? <AiFillLike size={24} /> : <AiOutlineLike size={23} />}{" "}
            Like
          </button>
        </div>

        <div className="h-60 bg-base-300 w-[1px] lg:block hidden"></div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">1. Instructions</h3>
            <p className="text-sm  whitespace-pre-line">
              {instructions}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">2. Ingredients</h3>
            <p className="text-sm ">{ingredients}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">3. Preparation Time</h3>
            <p className="text-sm ">
              Cooking time: {time} minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">4. Categories</h3>
            <p className="text-sm text-base-300">{category?.dinner}</p>
            <p className="text-sm text-base-300">{category?.breakfast}</p>
            <p className="text-sm text-base-300">{category?.lunch}</p>
            <p className="text-sm text-base-300">{category?.Dessert}</p>
            <p className="text-sm text-base-300">{category?.Vegan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
