
import { ArrowDown,  MoonIcon,  } from "lucide-react";
import logo from "../assets/asset 0.svg"; 



const Home = () => {
  return (
    <div className="w-full">

         <header>

            <nav>
                 <div>
                     <h2> <img src={logo} alt="logo" /> </h2>  
                 </div>

                 <div>
                     <h3>Work</h3>
                     <h3>Services</h3>
                     <h3>About</h3>
                     <h3>Blog</h3>
                     <h3>Pages <ArrowDown /> </h3>
                 </div>

                 <div>
                      <h2> cart 0 </h2>
                      <button> Get in touch </button>
                      <button> <MoonIcon /> </button>
                 </div> 

            </nav> 

         </header>
          
        

    </div>
  )
}

export default Home