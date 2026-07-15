import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";
import { useForm } from "react-hook-form";
import {nanoid} from 'nanoid'

import {
  FaUtensils,
//   FaUserChef,
  FaClock,
  FaImage,
  FaClipboardList,
} from "react-icons/fa6";
import { toast } from "react-toastify";
import { MyRecipeStore } from "../context/MyRecipeContext";
import { useNavigate } from "react-router";



const RecipeForm = () => {

    const navigate = useNavigate()
      let { myrecipe , setMyRecipe } = useContext(MyRecipeStore)


     let {  register ,
            handleSubmit ,
            formState:{errors} ,
            reset , } =         useForm({

                             mode:"onchange",
     })


        // console.log(errors);
                    
                  
const handleSubmitFun = (data)=>{

    // console.log(data);

    let newArr = [...myrecipe , {...data , _id:nanoid() , favorite:false} ]

    setMyRecipe(newArr)
    localStorage.setItem('myrecipe' , JSON.stringify(newArr));
    
    reset()
    toast.success('Recipe added successfully')
    navigate('/')
}



  return (
    <div className=" min-h-screen bg-orange-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-4">
            <FaUtensils size={28} />
          </div>

          <h1 className="text-4xl font-bold text-gray-800">
            Add New Recipe
          </h1>

          <p className="text-gray-500 mt-2">
            Share your favorite recipe with everyone.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleSubmitFun)} className="space-y-6">


          {/* Recipe Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Recipe Name
            </label>

            <div className="relative">
              <FaUtensils className="absolute left-4 top-4 text-orange-400" />

              <input
                type="text"
                placeholder="Enter recipe name"
                {...register('recipeName',{
                    required:'Recipe name is required',
                    minLength:{
                        value:3,
                        message:'Recipe name must be at least 3 characters long',
                    },
                    maxLength:{
                        value:100,
                        message:'Recipe name must be at most 100 characters long',
                    }
                    
                })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
               
               {errors.recipeName &&  
                
               <p className="text-red-500">{errors.recipeName.message}</p>
               }



            </div>
          </div>

          {/* Chef Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Chef Name
            </label>

            <div className="relative">
              <SiCodechef className="absolute left-4 top-4 text-orange-400" />

              <input
                type="text"
                placeholder="Chef's name"
                {...register('chefName',{
                    required:'Chef name is required',
                    minLength:{
                        value:3,
                        message:'Chef name must be at least 3 characters long',
                    },
                    maxLength:{
                        value:50,
                        message:'Chef name must be at most 50 characters long',
                    }
                    
                })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              {errors.chefName && 
              
               <p className="text-red-500">{errors.chefName.message}</p>} 
            </div>
          </div>

          {/* Time Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Prep Time
              </label>

              <div className="relative">
                <FaClock className="absolute left-4 top-4 text-orange-400" />

                <input
                  type="text"
                  placeholder="15 mins" 

                  {...register('prepTime',{
                    required:'Preparation time is required'
                  })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                />
                 {errors.prepTime && 
                
                 <p className="text-red-500">{errors.prepTime.message}</p>}
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Cook Time
              </label>

              <div className="relative">
                <FaClock className="absolute left-4 top-4 text-orange-400" />

                <input
                  type="text"
                  placeholder="30 mins"
                   {...register('cookTime',{
                    required:'Cooking time is required'
                  })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                />
                {errors.cookTime && 
                
                 <p className="text-red-500">{errors.cookTime.message}</p>}
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Recipe Category
            </label>

            <select 
             {...register('category' ,{
                 required:'Category is required'
             })}
             className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none">
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
              <option>Dessert</option>
              <option>Breakfast</option>
              <option>Drinks</option>
            </select>
          </div> 
          {
            errors.category && 
            <p className=" text-red-500"> {errors.category.message} </p>
          }

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Recipe Image URL
            </label>

            <div className="relative">
              <FaImage className="absolute left-4 top-4 text-orange-400" />

              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                 {...register('imageUrl' ,{
                    required:'Image url is required',
                 })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              {
                errors.imageUrl && 
                
                <p className='text-red-500'>{errors.imageUrl.message}</p> 
              }
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Recipe Description
            </label>

            <div className="relative">
              <FaClipboardList className="absolute left-4 top-5 text-orange-400" />

              <textarea
                rows={5}
                placeholder="Describe your recipe..."
                {...register('desc' ,{

                    required:'Description is required',
                    minLength:{
                        value:20,
                        message:'Description must be at least 20 characters long'
                    },
                    maxLength:{
                        value:500,
                        message:'Description must be at most 500 characters long'
                    }
                    
                })  }
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none resize-none"
              />
              {
                errors.desc && 
                
                <p className='text-red-500'>{errors.desc.message}</p> 
              }
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg transition"
          >
            🍽️ Add Recipe
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RecipeForm;