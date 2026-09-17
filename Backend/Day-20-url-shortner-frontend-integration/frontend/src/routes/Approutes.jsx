import { Route, Routes } from "react-router"
import Home from "../pages/Home"



const Approutes = () => {
  return (
    <div>
         
         <Routes>
            <Route path="/" element={<Home />} /> 
         </Routes>
    </div>
  )
}

export default Approutes