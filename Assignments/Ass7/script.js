
//*Create Task btn 
const createBtn = document.querySelector('.creatBtn')
//* Tasks list Div

const tasksList = document.querySelector('#task-list')


//* Form div 
const formDiv = document.querySelector('.form')
const crossBtn = document.querySelector('.crossBtn')
const addBtn = document.querySelector('.addBtn')
const form = document.querySelector('form')
const inpTitle  = document.querySelector('.title') 
const inpCatgry  = document.querySelector('.catgry') 

//*Theme change 
function themeChange(){
    
const themeBox = document.querySelector('.right')
const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')
let themeFlag = 0;
let rootElement = document.documentElement;

themeBox.addEventListener('click',function(event){

    // 0 == dark  to light
    if(themeFlag === 0){
    rootElement.style.setProperty('--pri','#100504')
    rootElement.style.setProperty('--sec','white')
    rootElement.style.setProperty('--bgBlur','white')
    
    lightBtn.style.display = 'block'
    darkBtn.style.display = 'none'
    themeFlag = 1;
    }

    else  if(themeFlag === 1){
    rootElement.style.setProperty('--pri','white')
    rootElement.style.setProperty('--sec','#100504')
    rootElement.style.setProperty('--bgBlur','#4743437e')
     lightBtn.style.display = 'none'
    darkBtn.style.display = 'block'
    themeFlag = 0;
    }

    

    
})

}

//*sec-2
const pendingTaskList = document.querySelector('.pendingTaskList')

//*sec-2
const completedTaskList = document.querySelector('.completedTaskList')

//*Tasks Array 

let tasksArr = [
    { 
        id:1,
        status:'pending',
        category:'medium',
        title:'class attend karna hai'
    },
    { 
        id:2,
        status:'completed',
        category:'hard',
        title:'pani pina hai'
    },
     { 
        id:3,
        status:'pending',
        category:'easy',
        title:'project complete karna hai'
    },
];


//*Update flag 

let updatTask = null;

function renderUi(){

    tasksList.innerHTML = ''

    tasksArr.forEach(function(elem , index){
       
 tasksList.innerHTML += `<div class="task-card" data-id="${elem.id}" data-status="${elem.status}" data-category="${elem.category}" >

                            <div class="tastCard-tp">
                                <h4 class="${elem.category}" >${elem.category}</h4>   <img class="${elem.status}" src="./Assets/check.png" alt="">
                            </div> 

                            <div class="tastCard-center">
                                <h1> ${elem.title} </h1>
                            </div>
                            <div class="tastCard-btm">
                                <button id="checking" onclick ="checkHandler('${elem.status}' , ${index})" > <i class="ri-check-line"></i></button>
                                <button id="edit" onclick = "editHandler(${index})" >  <i class="ri-edit-box-line"></i></i></button>
                                <button id="del" onclick = "deleteHandler(${index})" >  <i class="ri-delete-bin-6-line"></i></i></button>
                            </div>
                    </div>`

    })
}

createBtn.addEventListener('click' , function(){
    // Appear form div 
    formDiv.style.display = 'flex'

})

crossBtn.addEventListener('click' , function(){
    // DisAppear form div 
    formDiv.style.display = 'none'

})

//* Form Submit Handling 

form.addEventListener('submit',function(event){

    //Prevent Reloading
    event.preventDefault();

//*Difference Between input.values vs  input.getAttribute('value')

    // const title = event.target[0].value
    // const category = event.target[1].value

    //*or 

//*->input.getAttribute('value')  // null 

    // const title = inpTitle.getAttribute('value');
    // const category = inpCatgry.getAttribute('value');

    //  console.log(title,category);

     
//*input.values

    const title = inpTitle.value;
    const category = inpCatgry.value;

    //  console.log(title,category);

    const id = Date.now();
    const status = 'pending'

    if(title.trim() === '' || 
 category.trim() === ''){

    alert`Please Fill all the Inputs `
    return;
 }

    if(updatTask !==  null ){  
       tasksArr[updatTask].title = title;
       tasksArr[updatTask].category = category;
       renderUi();
       

    }else{

      let task = {
        id,
        status,
        category,
        title,
    }

    tasksArr.push(task)
    renderUi()
    pendingTaskRender()
    completedTaskRender()

    }

    // console.log(title ,category ) 
    
    form.reset();

      // DisAppear form div 
    formDiv.style.display = 'none'

})

//*check Completed or not  Handler

const checkHandler = function(status , idx){
     if(status === 'pending'){
        // console.log(status , idx)

        tasksArr[idx].status = 'completed'
        renderUi();
        pendingTaskRender()
        completedTaskRender()
     }else{
        alert`Already Completed ✅ `
        return;
     } 
     
}

//* Update Handler 


const editHandler = function(idx){
    //*Object Destructuring 
    const {id , status , category , title} =  tasksArr[idx]
    // console.log(id , status , category,title) 
      if(status === 'completed'){
            alert`This Task is completed ✅ `
            return
        }

     // Appear form div 
    formDiv.style.display = 'flex'
    inpTitle.value = title;
    inpCatgry.value = category;
    updatTask = idx;

}

//*Delet Handler 
const deleteHandler = function(idx){
    tasksArr.splice(idx,1)
    renderUi()
    pendingTaskRender()
    completedTaskRender()
}



//*Pending tasks Render 


function pendingTaskRender(){

    pendingTaskList.innerHTML = ''

    let filtedTask  = tasksArr.filter((task)=>{
        return task.status === 'pending'
    })

      if(filtedTask.length === 0){
    pendingTaskList.innerHTML  +=  `
     No Any Task is Pending...
    
    `
   }else{

    filtedTask.forEach(function(elem , index){
       
 pendingTaskList.innerHTML += `<div class="task-card" data-id="${elem.id}" data-status="${elem.status}" data-category="${elem.category}" >


  <div class="tastCard-tp">
                                <h4 class="${elem.category}" >${elem.category}</h4>   <img class="${elem.status}" src="./Assets/check.png" alt="">
                            </div> 
                            <div class="tastCard-center">
                                <h1> ${elem.title} </h1>
                            </div>
                            
                    </div>`

    })
    
   }
    
}



//*Completed tasks Render 


function completedTaskRender(){

    completedTaskList.innerHTML = ''

    let completedtask  = tasksArr.filter((task)=>{
        return task.status === 'completed'
    })

   if(completedtask.length === 0){

    completedTaskList.innerHTML  +=  `

     No Any Task is Completed...
    
    `

   }else{
     completedtask.forEach(function(elem , index){
       
 completedTaskList.innerHTML += `<div class="task-card" data-id="${elem.id}" data-status="${elem.status}" data-category="${elem.category}" >

                            <div class="tastCard-tp">
                                <h4 class="${elem.category}" >${elem.category}</h4>   <img class="${elem.status}" src="./Assets/check.png" alt="">
                            </div> 

                            <div class="tastCard-center">
                                <h1> ${elem.title} </h1>
                            </div>
                            
                    </div>`

    })
    
   }

}

//*Event Propagation Demonstration




let grandFather = document.querySelector('.grandFather')
let father = document.querySelector('.father')
let child = document.querySelector('.child')


//*Event Capturing - top -> to -> bottom 





grandFather.addEventListener('click',function(){
    console.log('!* Event Capturing *!');
    console.log('Grand Father');
    console.log('|');
    console.log('------>');
},{capture:true})

father.addEventListener('click',function(){
    console.log('Father');
    console.log('|');
    console.log('------>');
    
},{capture:true})


child.addEventListener('click',function(){

    
    console.log('Child');

    child.innerHTML = 'See the Console & reload '
   
    
},{capture:true})




//* Event bubling  bottom -> to --> top

grandFather.addEventListener('click',function(){
    console.log('Grand Father');
})

father.addEventListener('click',function(){
    console.log('Father');
    console.log('|');
    console.log('------>');
    
})


child.addEventListener('click',function(){

    console.log('!* Event Bubling *!');
    
    console.log('Child');
    console.log('|');
    console.log('------>');
    
})
 




renderUi()

pendingTaskRender()
completedTaskRender()

themeChange()

