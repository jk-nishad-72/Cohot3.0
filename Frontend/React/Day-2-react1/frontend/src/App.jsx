
import Card from "./Components/Card"

const App = () => {
  return (
    <div className="parent">
      
      {/* it's very similar to normal function call with arguments  Card(user = 'jk' , age = 20 ) */} 

       <Card user='jk nishad ' age={22}  /> 

       <Card user='sarthak ' age={25}  />
       
    </div> 
  )
}

export default App