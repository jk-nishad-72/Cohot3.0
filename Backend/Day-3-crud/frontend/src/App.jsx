import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <div className=" bg-slate-100 text-black min-h-screen w-full  ">
         <Navbar />
        <AppRoutes />
    </div> 
  )
}

export default App 