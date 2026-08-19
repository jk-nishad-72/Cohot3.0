
import { clientFormHook } from "../hooks/clentFormHook";

const Form = () => { 


    const {
      register,
      handleSubmit,
      errors,
      clientData,
    } = clientFormHook()
 

  return (


    <div className=" flex items-center justify-center w-full   ">

        <form onSubmit={handleSubmit(clientData)} className=' flex flex-col gap-4 bg-white p-10 rounded-lg shadow-lg  w-[35%] ' > 

             <div className="flex justify-center font-bold text-2xl "> Create A Client  </div>
             <div className=" flex flex-col gap-3">
                 <label htmlFor="name">Name </label> 
                 <input
                  {...register("name",{
                     required:"Name is required",
                     minLength:{
                        value:3,
                        message:"Name should be at least 3 characters",
                     },
                     maxLength:{
                        value:10,
                        message:"Name should not be more than 10 characters",
                     },
                     pattern:{
                        value:/^[a-zA-Z]+$/,
                        message:"Name should be only alphabets",
                     },
                  })} 
                  placeholder="client.." className='  outline-none border border-gray-400 rounded-lg px-3 py-2 ' type="text" id="name" />

                  {errors.name && <p className=" text-red-500 text-sm "> {errors.name.message} </p>}
             </div>
             <div className=" flex flex-col gap-3 ">
                <label htmlFor="age">Age </label>
                <input 
                 {...register('age' , {
                    required:"Age is required",
                    min:{
                       value:18,
                       message:"Age should be at least 18",
                    },
                    max:{
                       value:100,
                       message:"Age should not be more than 100",
                    },
                    pattern:{
                       value:/^[0-9]+$/,
                       message:"Age should be only numbers",
                    },
                 })}
                 placeholder="18.." className='  outline-none border border-gray-400 rounded-lg px-3 py-2 ' type="number" id="age" />

                 {errors.age && <p className=" text-red-500 text-sm "> {errors.age.message} </p>}
            </div>

            <div className=" flex flex-col gap-3 ">
                <label htmlFor="profession">Profession</label>
                <input
                 {...register('profession' , {
                    required:"Profession is required",
                    minLength:{
                       value:3,
                       message:"Profession should be at least 3 characters",
                    },
                    maxLength:{
                       value:10,
                       message:"Profession should not be more than 10 characters",
                    },
                    pattern:{
                       value:/^[a-zA-Z]+$/,
                       message:"Profession should be only alphabets",
                    },
                 })}
                 placeholder="student , engineer , labour etc..." className='  outline-none border border-gray-400 rounded-lg px-3 py-2 ' type="text" id="profession" />

                 {errors.profession && <p className=" text-red-500 text-sm "> {errors.profession.message} </p>}
            </div> 
            <button className=" active:scale-95 transition-all duration-200  px-4 py-2 bg-blue-500  text-white  rounded-lg  text-xl cursor-pointer" type="submit">Submit</button> 
        </form>

    </div>
  )
}

export default Form