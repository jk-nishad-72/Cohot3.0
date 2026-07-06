

import {React , useState} from 'react'

const Counter = () => {


console.log('Rerendering Counter ');
    //* Batching 
    const [count, setcount] = useState(0)

     console.log(count);
     
  return (

    <div>
         
         <h1> {count} </h1>

         <button onClick={()=>{

            //* ye sab  same setFunction hone ke karan ek hi bar chalega [meaning sam setFunctions ko remove kro our ek bar chalao ] Ise Batching kahte hai
         
            // setcount(count+1) 
            // setcount(count+1)
            // setcount(count+1)  

            
            // * agar setcount ko call karke values ko change karna chahte ho to iska use karo 

            setcount((prev)=>{

                console.log(prev);
                //prev matlab count ki current value usme click hone pr plus one kardo 
                return prev+1
                
            })

            //* yha pe setCount function  render sirf ek bar karega lekin prev + 1 + 3 bhi hoga jo ki Batching me nahi ho rha tha 

            setcount((prev)=>{

                console.log(prev); 
                
                return prev + 3
                
            })


         } }> Increament </button>


    </div>
  )
}

export default Counter