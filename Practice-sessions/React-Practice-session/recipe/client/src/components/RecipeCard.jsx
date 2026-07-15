import React, { useContext } from "react";
import { MyRecipeStore } from "../context/MyRecipeContext";
import { motion } from "framer-motion";
import { FaClock, FaUserAlt } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

const RecipeCard = ({myrecipe}) => {



  const navigate = useNavigate()
  let  { handleAddToFav} = useContext(MyRecipeStore);

//   console.log(myrecipe);
  

  if (myrecipe.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg">
        No recipes found 🍲
      </div>
    );
  }

  return ( 

     <> 

    <h1 className=" text-2xl font-bold my-3  text-center w-full   text-orange-500 ">  All Recipes </h1>

       <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 p-6">

      {myrecipe.map((recipe) => (
        <motion.div
          key={recipe._id}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={recipe.imageUrl}
              alt={recipe.recipeName}
              className="w-full h-48 object-cover"
            />

             {/* Favorite Button */}
                <button
                onClick={()=>handleAddToFav(recipe._id)}
                className="absolute top-3 left-3 bg-white/80 backdrop-blur p-2 rounded-full cursor-pointer shadow-md hover:scale-110 transition"
                >
                {recipe.favorite ? (
                    <FaHeart className="text-orange-500 text-lg" />
                ) : (
                    <FaRegHeart className="text-gray-600 text-lg" />
                )}
                </button>


            <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
              {recipe.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <MdRestaurantMenu className="text-orange-500" />
              {recipe.recipeName}
            </h2>

            {/* Chef */}
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FaUserAlt className="text-orange-400" />
              {recipe.chefName}
            </p>

            {/* Time */}
            <div className="flex justify-between text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <FaClock className="text-orange-400" />
                Prep: {recipe.prepTime}
              </p>
              <p className="flex items-center gap-1">
                <FaClock className="text-orange-400" />
                Cook: {recipe.cookTime}
              </p>
            </div>

            {/* Button */}
            <button 

             onClick={()=>navigate(`/recipe/${recipe._id}`)}
             className="w-full mt-3 bg-orange-500 hover:bg-orange-600 cursor-pointer text-white py-2 rounded-lg transition">
              View Recipe →
            </button>
          </div>
        </motion.div>
      ))} 

    </div>



     </>
  );
};

export default RecipeCard;