import React, {useState} from 'react'
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getAllProducts} from "../api/api.jsx";

const Tanstack = () => {


    let limit = 10;
    const [page , setPage] = useState(0)

    let {data ,isPending,isError , isPlaceholderData} = useQuery({
          queryKey:["products",],
          queryFn:()=>getAllProducts(limit , page),
          isPlaceholderData:keepPreviousData,
      })


    console.log(data) 
    return (
        <div>
             <h1> tanstak </h1>
        </div>
    )
}
export default Tanstack
