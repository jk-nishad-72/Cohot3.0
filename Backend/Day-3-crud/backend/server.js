

const express = require('express')
const cors = require('cors');
const app = express();


//middleware 
app.use(express.json());  
// for All the Origine the requests (Frontend to Backend ) 
app.use(cors());


// Read the data 

let clients = []

app.get('/clients',(req, res)=>{
     res.json({
        Message:'Client Data',
        client:clients || 'no client' 
     })
})

// Create the data 

app.post('/create-client',(req, res)=>{

      const {id ,name , age , profession} = req.body;

      console.log(name, age , profession);
      clients.push({
        id,
        name,
        age,
        profession,
      })
      
    // localStorage.setItem('clients',JSON.stringify(clients))

    res.json({
        Message:"Client Created Successfully",
        Name:name.toUpperCase(),
        
    })
})


// delete 

app.delete('/delete-client/:id',(req, res)=>{
     let id = req.params.id; 

     console.log(id);

     clients = clients.filter((val)=> val.id !== id)     
    //  localStorage.setItem('clients',JSON.stringify(clients))
     res.json({
         Message:"Client Deleted Successfully",
         client:clients || 'no client'
     })

})

// update 

app.put('/update-client/:id',(req, res)=>{
    
    let id = req.params.id;
    
    let {name , age , profession} = req.body;

    clients = clients.map((val)=>{
        if(val.id === id){
            return { ...val,name, age , profession}
        }
        return val 
    })

    // localStorage.setItem('clients',JSON.stringify(clients))
    res.json({
        Message:"Client Updated Successfully",
        Name:name.toUpperCase(),
    })

})






let PORT = 3000;

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})