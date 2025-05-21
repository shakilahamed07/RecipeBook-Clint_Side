import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import MyRecipe_details from "../Components/MyRecipe_details";
import Swal from "sweetalert2";

const MyRecipe = () => {
  const [myRecipe, setMyRecipe] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/myrecipe/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyRecipe(data));
  }, [myRecipe]);

  const hendleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF6000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/recipes/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if (data) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
                timer: 2000
              });
            }
        });
      }
    });
    //* Like set db
  };

  return (
    <div className="">
      {myRecipe.map((recipe) => (
        <MyRecipe_details
          recipe={recipe}
          hendleDelete={hendleDelete}
          key={recipe._id}
        />
      ))}
    </div>
  );
};

export default MyRecipe;
