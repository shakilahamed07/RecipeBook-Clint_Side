import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import MyRecipe_details from "../Components/MyRecipe_details";

const MyRecipe = () => {

  const [myRecipe, setMyRecipe] = useState([]);
  const {user} = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/myrecipe/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyRecipe(data));
  }, []);
  console.log(myRecipe)
  
  return (
    <div className="">
        {
            myRecipe.map(recipe=> <MyRecipe_details recipe={recipe} key={recipe._id} />)
        }
    </div>
  );
};

export default MyRecipe;
