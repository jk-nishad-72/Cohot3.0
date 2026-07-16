
import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { useContext } from 'react';
import { MyRecipeStore } from '../context/MyRecipeContext';
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";


const Home = () => {

      const { myrecipe } = useContext(MyRecipeStore);

  return (

          <> 
                

            <div className="w-full  bg-orange-50 py-10 md:py-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

            {/* LEFT CONTENT */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6 text-center md:text-left"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Cook Like a Pro With Our{" "}
                <span className="text-orange-500">Easy</span> and{" "}
                <span className="text-orange-500">Tasty</span> Recipes 🍲
                </h1>

                <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                Explore a world of flavors with our diverse collection of easy-to-follow
                recipes, perfect for home cooks of all skill levels.
                </p>

                {/* CTA Button */}
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{duration:0.2 , ease:"easeIn"}}
                className=" cursor-pointer flex items-center gap-2 mx-auto md:mx-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition"
                >
                <FaUtensils />
                Explore Recipes
                </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 ,cursor:'pointer' , rotate:5 }}
                whileTap={{ scale: 0.9 }} 
                className="flex-1 flex justify-center"
            >
                <img
                src="https://i.pinimg.com/736x/58/04/63/58046306d18ae00be1e677f3da96fd4e.jpg"
                alt="Delicious food"
                className="w-[280px] md:w-[400px] rounded-2xl shadow-xl object-cover"
                />

            </motion.div>
            </div>
        
               {/* All Recipes */}
              <div>
                  <RecipeCard  myrecipe={myrecipe}/>
              </div>
          </>
  )
}

export default Home