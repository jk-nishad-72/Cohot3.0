
/**
 **Que.3
const input = document.querySelector('input')

const btn = document.querySelector('button')

const box = document.querySelector('.box')



btn.addEventListener('click' ,()=>{

      let value = input.value;

    //   console.log(value);

    if(value.trim() === ''){
        alert`please enter data `
        return
    }

    box.innerHTML = `<h1> ${value} </h1>`


      input.value = ''
})
 */



//*Que 5
/**
 * 
 * 
const addbtn = document.querySelector('button')

const list = document.querySelector('.list')

addbtn.addEventListener('click', function(){



    console.log('Hello; ');
    
     let li = document.createElement('li')

     let fruit = prompt('Enter fruit Name : ')

     li.innerText = `${fruit}`

     list.append(li) 
})



 */



/**
 * 
const input = document.querySelector('textarea')
let char = document.querySelector('.char')

input.addEventListener('input',()=>{

     let count = input.value.trim().length;

     console.log(count , char);

     char.textContent = `${count}`

})
 */




/**
 * 
const NoteList = document.querySelector('.NoteList')

const addbtn = document.querySelector('button')

const noteInp = document.querySelector('input')

addbtn.addEventListener('click' , function(){

     let note = noteInp.value.trim();

     if(note === '') {
        alert `Please fill the input `
        return
     }


     let li = document.createElement('li')

     li.innerText = `${note}`

     NoteList.appendChild(li)

     noteInp.value =''
})
 */


/**Image slider 
 * 
 * 
let imageArray = [

    'https://images.unsplash.com/photo-1773332611628-9e1bdce4881b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1782407332324-2ec04e3b9233?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1782153577845-d4acd4a39de8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1782177386264-9b952d2440ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',

]

const imgBox = document.querySelector('.imgBox')

const imgUrl = document.querySelector('img')


const  btn = document.querySelector('button')

let count = 0;
 
btn.addEventListener('click',function(){

    count++
    
    if(count < imageArray.length){
    imgUrl.setAttribute('src',imageArray[count])
    }else{
     count = 0
    imgUrl.setAttribute('src',imageArray[count])

    }

     
})
 */




const nameInp = document.querySelector('#nameInp')
const courseInp = document.querySelector('#courseInp')

const addBtn = document.querySelector('#addBtn')
const students = document.querySelector('.students')
const delBtn = document.querySelector('.del')

let studentArr = [
    {
        name:'jay',
        course:'btech'
    },
]


function renderStd(){

    students.innerHTML = ''

    students.innerHTML +=    studentArr.map((std ,idx)=>{
        return   ` <div class="student">
                         <h1> ${std.name} </h1>
                         <p> ${std.course} </p>
                         <button onclick="deletHandle(${idx})"   class="del">Delete</button>
                     </div>
`
      })
}
addBtn.addEventListener('click',()=>{


     let name = nameInp.value.trim();
     let course = courseInp.value.trim();

     if(name === '' && course === ''){
        alert `Pleas fill all`
        return
     }

     studentArr.push(
        {name,course}
     )

  

  renderStd();

    // console.log(name , course ,studentArr);

    nameInp.value = ''
    courseInp.value = ''

})


const deletHandle = function(index){

    const afterDelet = studentArr.splice(1 , index)

    studentArr = [...afterDelet] 

    renderStd()

}
renderStd()
