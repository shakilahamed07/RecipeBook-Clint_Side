import React, { useState } from 'react';
import { useLoaderData, useNavigate} from 'react-router';
import Swal from 'sweetalert2';

const Updaterecipe = () => {
    const navigate = useNavigate();
    const recipe = useLoaderData();
    const {
        _id,
        title,
        photo,
        category,
        instructions,
        ingredients,
        time,
        cuisineType,
    } = recipe;
    
    const [select , setSelect] = useState(cuisineType)
    const hendleSelect = (e)=>{
        setSelect(e.target.value)
    }

    const [isl, setIsL] = useState(category.lunch);
    const [isB, setIsB] = useState(category.breakfast);
    const [isD, setIsD] = useState(category.dinner);
    const [isDe, setIsDe] = useState(category.Dessert);
    const [isV, setIsV] = useState(category.Vegan);

    const hendleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {title, photo, ingredients, instructions, time, CuisineType , ...rest} =  Object.fromEntries(formData.entries())

        const updateRecipe = {
            title,
            photo,
            ingredients,
            instructions,
            time,
            cuisineType: CuisineType,
            category: rest,
        }
        
        // //* Update recipe database
        fetch(`https://recipe-book-server-side-ten.vercel.app/recipes/${_id}`, {
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(updateRecipe)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                Swal.fire({
                    title: "Recipe update successfully!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                  });
                  console.log(data)
                  navigate('/my-recipe')
            }
        })
    }
    


    return (
        <div>
      <div className="md:mx-8 mx-3">
        <h1 className="text-3xl font-bold text-center mb-3 mt-10">
          Update Recipe
        </h1>

        <form onSubmit={hendleUpdate}>
          <div className="grid sm:grid-cols-2 sm:gap-x-10 md:gap-x-20">
            {/*Title*/}
            <fieldset className="fieldset max-w-2xl rounded-box  py-5">
              <label className="text-xl mb-1">Recipe Title</label>
              <input
                type="text"
                name="title"
                className="input w-full   rounded-2xl border-primary focus:outline-none"
                defaultValue={title}
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
                defaultValue={photo}
                required
              />
            </fieldset>
            {/*CuisineType*/}
            <fieldset className="fieldset rounded-box py-5 max-w-2xl ">
              <label className="text-xl mb-1">CuisineType</label>
              <select
                name="CuisineType"
                onChange={hendleSelect}
                value={select}
                className="input w-full rounded-2xl border-primary focus:outline-none"
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
                defaultValue={time}
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
                defaultValue={ingredients}
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
                defaultValue={instructions}
                name="instructions"
                className="input w-full  pt-6 pb-6 rounded-2xl border-primary focus:outline-none"
                placeholder="instructions"
                required
              />
            </fieldset>
            {/* redio */}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl">
              <label className="text-xl mb-1">Category</label>
              <div className="flex md:gap-5 gap-2">
              <label className="flex items-center">
                <input type="checkbox"  name="breakfast" checked={isB} onChange={(e) => setIsB(e.target.checked)} value="Breakfast" className="mr-2" />
                Breakfast
              </label>

              <label className="flex items-center">
                <input type="checkbox" checked={isl} onChange={(e) => setIsL(e.target.checked)}  name="lunch" value="Lunch" className="mr-2" />
                Lunch
              </label>

              <label className="flex items-center">
                <input type="checkbox" name="dinner" value="Dinner" checked={isD} onChange={(e) => setIsD(e.target.checked)} className="mr-2" />
                Dinner
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="Dessert" checked={isDe} onChange={(e) => setIsDe(e.target.checked)} value="Dessert" className="mr-2" />
                Dessert
              </label>
              <label className="flex items-center">
                <input type="checkbox" name="Vegan" checked={isV} onChange={(e) => setIsV(e.target.checked)} value="Vegan" className="mr-2" />
                Vegan
              </label>
              </div>
            </fieldset>
          </div>
          <div className="text-center mt-9">
            <button
              type="submit"
              className="border  border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-2 md:px-50 px-28 mb-10"
            >
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Updaterecipe;