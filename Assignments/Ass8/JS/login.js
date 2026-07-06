

const form = document.querySelector('form')

const nameInp = document.querySelector('#name')
const passInp = document.querySelector('#password')





let registerUser = JSON.parse(localStorage.getItem("registeredUser")) || [] 

// console.log(registerUser);

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    // let name = e.target[0].value
    // let password = e.target[1].value 

    let name = nameInp.value.trim();
    let password = passInp.value;


    // * handle space name 

    if(name === ''){
        alert`Please Fill Valid Name`
        return
    }

    //* finding User  

   let findedUser =   registerUser.find((obj)=>{
                  return obj.name === name
      })

    //*If user Not found 

      if(findedUser === undefined){
        alert `User Doesn't Exist register first`
        window.location.href = "register.html"
        return
      }

    console.log(findedUser);

    //* If user fount check name and Password 

    if(findedUser.name === name && findedUser.password !== password ){
         alert `Invalid Password ❌ `
         return
    }
   
    
    localStorage.setItem('loggedUser',JSON.stringify(findedUser))
      form.reset()
      alert `Login Succesfully 🎉` 
      window.location.href = "index.html"
    
})



