
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";


const Login = () => {

    const {
      navigate,
      register,
      handleSubmit,
      errors,
      loginForm,
    }    = useAuth();
  



   
   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.form
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}

        onSubmit={handleSubmit(loginForm)}
       
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            {...register('email',{
              required:'email is Required',
              pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:'Invalid email address'
              },
            })}

            
          />
        </div>
        {errors.email && <p className=" text-sm text-red-500 mb-4"> {errors.email.message} </p>}



        {/* Password */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-6">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            {...register('password',{
              required:'Password is Required',
              minLength:{
                value:6,
                message:'Minimum 6 char is required',
              },
              maxLength:{
                value:15,
                message:'Maximum 15 char is required',
              }
            })}
            
          />
        </div>
        {errors.password && <p className=" text-sm text-red-500 mb-4"> {errors.password.message} </p>}


   
        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Login
        </motion.button>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account?{" "}
          <span 

            onClick={()=>navigate('/register')}
           className="text-blue-500 cursor-pointer">Register</span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;