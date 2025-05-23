import React, { use } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const AddRecipe = () => {

    const {user} = use(AuthContext);
    const navigate =useNavigate()

    const hendleAddRecipe = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {title, photo, ingredients, instructions, time, CuisineType , ...rest} =  Object.fromEntries(formData.entries())

        const newRecipe = {
            email: user.email,
            title,
            photo,
            ingredients,
            instructions,
            time,
            cuisineType: CuisineType,
            category: rest,
            likeCount: 0
        }
        
        //* POST database
        fetch('https://recipe-book-server-side-ten.vercel.app/recipes', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                  });
                  navigate('/')
            }
        })
    }


  return (
    <div className="shadow-xl md:px-8 rounded-2xl md:mx-5 mx-2 px-2 my-2 pt-2 mb-10">
      <div className="mx-3">
        <h1 className="text-3xl font-bold text-center mb-3 mt-10 ">
          Add Recipe
        </h1>

        <form onSubmit={hendleAddRecipe}>
          <div className="grid sm:grid-cols-2 sm:gap-x-10 md:gap-x-20">
            {/*Title*/}
            <fieldset className="fieldset max-w-2xl rounded-box  py-5">
              <label className="text-xl mb-1">Recipe Title</label>
              <input
                type="text"
                name="title"
                className="input w-full   rounded-2xl border-primary focus:outline-none"
                placeholder="Recipe title.."
                required
              />
            </fieldset>
            {/*Image url*/}
            <fieldset className="fieldset  max-w-2xl  rounded-box  py-5">
              <label className="text-xl mb-1">Image URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full   rounded-2xl border-primary focus:outline-none"
                placeholder="Image URL"
                required
              />
            </fieldset>
            {/*CuisineType*/}
            <fieldset className="fieldset rounded-box py-5 max-w-2xl ">
              <label className="text-xl mb-1">CuisineType</label>
              <select
                name="CuisineType"
                className="input w-full  rounded-2xl border-primary focus:outline-none"
              >
                <option value="">--Select one--</option>
                <option value="Americano">Americano</option>
                <option value="Chains">Chains</option>
                <option value="Bengali">Bengali</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
              </select>
            </fieldset>
            {/*PreparationTime*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">PreparationTime</label>
              <input
                type="number"
                name="time"
                className="input w-full rounded-2xl border-primary focus:outline-none"
                placeholder="Time in number"
                required
              />
            </fieldset>
            {/*ingredients*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Ingredients</label>
              <input
                type="text"
                name="ingredients"
                className="input w-full  pt-6 pb-6 rounded-2xl border-primary focus:outline-none"
                placeholder="ingredients"
                required
              />
            </fieldset>
            {/*instructions*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Instructions</label>
              <input
                type="text"
                name="instructions"
                className="input w-full  pt-6 pb-6 rounded-2xl border-primary focus:outline-none"
                placeholder="instructions"
                required
              />
            </fieldset>
            {/* redio */}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl">
              <label className="text-xl mb-1">Category</label>
              <div className="flex md:gap-5 gap-2 flex-wrap">
              <label className="flex items-center">
                <input type="checkbox" name="breakfast" defaultChecked value="Breakfast" className="mr-2" />
                Breakfast
              </label>

              <label className="flex items-center">
                <input type="checkbox" name="lunch" value="Lunch" className="mr-2" />
                Lunch
              </label>

              <label className="flex items-center">
                <input type="checkbox" name="dinner" value="Dinner" className="mr-2" />
                Dinner
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="Dessert" value="Dessert" className="mr-2" />
                Dessert
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="Vegan" value="Vegan" className="mr-2" />
                Vegan
              </label>
              </div>
            </fieldset>
          </div>
          <div className="text-center mt-9">
            <button
              type="submit"
              className="border  border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-2 md:px-50 px-25 mb-10"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
