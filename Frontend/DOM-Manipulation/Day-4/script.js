

const form = document.querySelector('form')

const inp1 = document.querySelector('.inp-name')
const inp2 = document.querySelector('.inp-email')
const inp3 = document.querySelector('.inp-image')
const sbmitBtn = document.querySelector('button')

const usersBox = document.querySelector('.users')


//* User JSON Data 
let userArray = [
  {
    _id: 1,
    uName: 'James Carter',
    uEmail: 'james.carter@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 2,
    uName: 'Sophia Patel',
    uEmail: 'sophia.patel@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 3,
    uName: 'Liam Johnson',
    uEmail: 'liam.johnson@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 4,
    uName: 'Emma Williams',
    uEmail: 'emma.williams@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 5,
    uName: 'Noah Brown',
    uEmail: 'noah.brown@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 6,
    uName: 'Olivia Davis',
    uEmail: 'olivia.davis@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 7,
    uName: 'Ethan Martinez',
    uEmail: 'ethan.martinez@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 8,
    uName: 'Ava Wilson',
    uEmail: 'ava.wilson@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 9,
    uName: 'Mason Taylor',
    uEmail: 'mason.taylor@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60'
  },
  {
    _id: 10,
    uName: 'Isabella Anderson',
    uEmail: 'isabella.anderson@gmail.com',
    usrImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60'
  }
];


//* User Rendering 
function Ui(){
    usersBox.innerHTML = ''
userArray.forEach(function(user , index){

     usersBox.innerHTML += `<div id ="${index}" class="user">
                 <div class="image">
                <img src="${user.usrImage}" alt="profile">
              </div>
              <h2>Name: <span>${user.uName }</span> </h2>
              <h2>Email: <span>${user.uEmail} </span> </h2>
              <div class="btns">
                <button onclick="editCart(${index})" >Edit  <i class="ri-edit-line"></i>  </button>
                <button onclick="deleteCart(${index})"   >Delete  <i class="ri-delete-bin-6-line"></i> </button>
              </div>
            </div> `

     
})

}

Ui()

//* submit Handler
form.addEventListener('submit',function(event){

    event.preventDefault()

     let uName = inp1.value;
     let uEmail = inp2.value;
     let uProfile = inp3.value;

    //  console.log(uName , uEmail , uProfile )



    if(uName === '' && uEmail === '' && uProfile === '') return   
    userArray.push({

        uName:uName,
        uEmail:uEmail,
        usrImage:uProfile
    })

    Ui()
     this.reset() //form.reset()
     
})


//* Delete Handler
let deleteCart = function(index){
    userArray.splice(index , 1)
    Ui()
}


//* Edit Handler 
let editCart = function(index){

    //  let userFind = userArray.find((obj ,indx)=>{return indx === index })

    // let {uName , uEmail , usrImage} = userFind;
    //  console.log(uName , uEmail , usrImage); 

    //  let editedName = prompt('Update Name: ' , uName)

    //    userFind.uName = editedName 

       
     
  let newUsers =  userArray.map((obj ,idx)=>{

         if(idx === index){
             let {uName , uEmail , usrImage} = obj;
     console.log(uName , uEmail , usrImage); 

    //  let editedName = prompt('Update Name: ' , uName)

     let editedName = prompt('Update Name: ' ,uName)
     let editEmail = prompt('Update Name: ' ,uEmail)
     let editImage = prompt('Update Name: ' ,usrImage)


     if(editedName === '' || editedName === null||
        editEmail === '' || editEmail === null||
        editImage === '' || editImage === null ) {
    
        obj.uName = uName 
       obj.uEmail = uEmail 
       obj.usrImage = usrImage 

     }
       else{
        obj.uName = editedName 
       obj.uEmail = editEmail 
       obj.usrImage = editImage 

       }
         }
       return obj

     })
     userArray = [...newUsers]
    Ui();
}


