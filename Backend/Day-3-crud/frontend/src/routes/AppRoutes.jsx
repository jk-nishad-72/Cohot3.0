import { Routes , Route } from "react-router";
import Home from "../pages/Home";
import CreateClient from "../pages/CreateClient";
import About from "../pages/About";
import Clients from "../pages/Clients";
const AppRoutes = () => {



  return (
    <div>
        
        <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/create-client" element={<CreateClient />} />
         <Route path="/about" element={<About />} />
         <Route path="/clients" element={<Clients />} />
        </Routes>

    </div>
  )
}

export default AppRoutes