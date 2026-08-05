import { useQuery } from "@tanstack/react-query";
import { getAllCotegories, getProductsApi, getProductsByCategory } from "../api/productApi";
import { useEffect, useState } from "react";




export const useAllProductHook =  () => {

      const [search  , setSearch]  = useState("")
      const [debouncedSearch  ,setDebouncedSearch]  = useState("")


// handling debouncing 

    useEffect(()=>{

        let timeout = setTimeout(() => {
            setDebouncedSearch(search) 
        }, 1000);

        return ()=> clearTimeout(timeout)
    },[search])

  let {data ,isPending , error}= useQuery({

        queryKey:["products",debouncedSearch],
        queryFn:()=>getProductsApi(debouncedSearch),
        staleTime:5000,
     })

    //   console.log('tanstack query->' ,data);
      
     return {
        data,
        isPending,
        error,
        search,
        setSearch
     }
    
}

export  const useCategoriesHook = ()=>{

    return useQuery({
        queryKey:['Categories'],
        queryFn:getAllCotegories,
    })

}

export const  useProductsByCategory = ()=>{

     const [category  , setCategory]  = useState("All")

     let {data} = useQuery({
        queryKey:["getProductsByCategory", category],
        queryFn:()=>getProductsByCategory(category),
     })

     return {
        data,
        category,
        setCategory
     }
}