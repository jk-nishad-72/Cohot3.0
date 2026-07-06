
import React ,{useState}from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Card from './components/Card';
import Home from './components/Home';



const App = () => { 


const [toggle, setToggle] = useState(false);


const [formData, setFormData] = useState({

})
const [users, setUsers] = useState([])
const [logged, setLogged] = useState(false)


console.log(users);


return (

    <div className=' w-screen h-screen flex items-center justify-center bg-blue-100'>

      
    { toggle ? 

     (  logged ? 

       < Home  users = {users} />  : 
      < Login setLogged = {setLogged} users ={users} formData ={formData} setToggle = {setToggle} setFormData={setFormData} />   ) : 

     (  < Register setToggle = {setToggle} formData = {formData}  setFormData={setFormData}  users={users} setUsers = {setUsers} /> )}
      

    </div>
  )
}

export default App