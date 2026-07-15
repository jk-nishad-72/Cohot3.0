import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MyRecipeStore } from "../context/MyRecipeContext";
import { motion } from "framer-motion";
import { FaClock, FaUserAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const RecipeDetails = () => {

  const { id } = useParams();
  const { myrecipe, setMyRecipe } = useContext(MyRecipeStore);

  // find recipe by id
  const recipe = myrecipe.find((item) => item._id == id);

  console.log(recipe);  
  

  if (!recipe) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500 text-xl">
        Recipe not found 🍲
      </div>
    );
  }

  const toggleFavorite = () => {
    setMyRecipe((prev) =>
      prev.map((item) =>
        item.id === recipe.id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-orange-50 p-6 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden  ">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src={recipe.imageUrl}
            alt={recipe.recipeName}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-4 left-4 bg-white/80 backdrop-blur p-3 rounded-full shadow hover:scale-110 transition"
          >
            {recipe.favorite ? (
              <FaHeart className="text-orange-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-600 text-xl" />
            )}
          </button>

          {/* Category */}
          <span className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm shadow">
            {recipe.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <MdRestaurantMenu className="text-orange-500" />
            {recipe.recipeName}
          </h1>

          {/* Chef */}
          <p className="flex items-center gap-2 text-gray-600">
            <FaUserAlt className="text-orange-400" />
            Chef: {recipe.chefName}
          </p>

          {/* Time */}
          <div className="flex gap-6 text-gray-600">
            <p className="flex items-center gap-2">
              <FaClock className="text-orange-400" />
              Prep: {recipe.prepTime}
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-orange-400" />
              Cook: {recipe.cookTime}
            </p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {recipe.desc || "No description provided."}
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDetails;