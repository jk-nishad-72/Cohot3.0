

const form = document.querySelector('form')

const nameInp = document.querySelector('#name')
const passInp = document.querySelector('#password')


// console.log(form);


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

    //* check userName already exist 

   let res =   registerUser.find((obj)=>{
                  return obj.name === name
      })
      if(res !== undefined){

        // console.log(res);
        alert `User Already Exist`
        return
      }
    //   console.log(res);
      
    // console.log(name , password);

    let newUser = {
        name,
        password,
        "uCurrency":'₹',
        'uTransactions':[],
        'uCurrentBal':0,
       
    }

    registerUser.push(newUser) 

    localStorage.setItem('registeredUser',JSON.stringify(registerUser))


    // console.log(registerUser);
    
      form.reset()
      alert `Register Succesfully 🎉 now u Can log In` 
      
      window.location.href = "login.html"
      return
})






