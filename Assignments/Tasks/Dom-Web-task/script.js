


const featureBtn = document.querySelector('#feature')
const solBtn = document.querySelector('#solution')
const resBtn = document.querySelector('#resource')




const featureBox  = document.querySelector('.featureBox')
const solutionBox  = document.querySelector('.solutionBox')
const resourcesBox  = document.querySelector('.resourcesBox')




//*Features 

const featurDownArrow = document.querySelector('.featur-down')
const featurUpArrow = document.querySelector('.featur-up')

// console.log(featurDownArrow);

let flagForFeaturBox = 0;

featureBtn.addEventListener('click',function(){

    if(flagForFeaturBox === 0){

         featureBox.style.display = 'block'
         featurDownArrow.style.display = 'none'
         featurUpArrow.style.display = 'block'
         flagForFeaturBox = 1
        //  console.log(flagForFeaturBox);

    }
    else if(flagForFeaturBox === 1){
         featureBox.style.display = 'none'
         featurDownArrow.style.display = 'block'
         featurUpArrow.style.display = 'none'
         flagForFeaturBox = 0
    }
    
    
})

//* Solution

const solDownArrow = document.querySelector('.sol-down')
const solUpArrow = document.querySelector('.sol-up')
let flagForSolBox = 0;

solBtn.addEventListener('click',function(){

    if(flagForSolBox === 0){

         solutionBox.style.display = 'block'
         solDownArrow.style.display = 'none'
         solUpArrow.style.display = 'block'
         flagForSolBox = 1
        

    }
    else if(flagForSolBox === 1){
         solutionBox.style.display = 'none'
         solDownArrow.style.display = 'block'
         solUpArrow.style.display = 'none'
         flagForSolBox = 0
    }
    
    
})

//*resourch

const resDownArrow = document.querySelector('.res-down')
const resUpArrow = document.querySelector('.res-up')
let flagForResBox = 0;

resBtn.addEventListener('click',function(){

    if(flagForResBox === 0){

         resourcesBox.style.display = 'block'
         resDownArrow.style.display = 'none'
         resUpArrow.style.display = 'block'
         flagForResBox = 1
        

    }
    else if(flagForResBox === 1){
         resourcesBox.style.display = 'none'
         resDownArrow.style.display = 'block'
         resUpArrow.style.display = 'none'
         flagForResBox = 0
    }
    
    
})

//*search btn 

const searchBtn = document.querySelector('.search')
const searchBox = document.querySelector('.searchbox')
const  cross = document.querySelector('.cross')

searchBtn.addEventListener('click',()=>{
 
      searchBox.style.display = 'flex'
    
})

cross.addEventListener('click',()=>{
 
      searchBox.style.display = 'none'
    
})



