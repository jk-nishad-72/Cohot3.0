import { useContext } from "react";
import { MyStoreContext } from "../context/MyContext";

const Navbar = () => {

    let {toggle ,setToggle ,carts} = useContext(MyStoreContext)     

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
        Shop
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => setToggle(true)}
          className="hover:text-blue-500 cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => setToggle(false)}
          className="hover:text-blue-500 cursor-pointer relative"
        >
        
           Cart🛒 <span className="absolute -top-2 right-0  text-red-600  px-2 py-1 rounded-full">{carts.length} </span>  
        </button>
      </div>
    </nav>
  );
};

export default Navbar