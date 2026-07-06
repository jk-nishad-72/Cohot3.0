
// let prompt = require('prompt-sync')();

//Question 1 — Synchronous vsAsynchronous

/**
 * 
 * @param {
console.log("Start");

setTimeout(() => {
    console.log("Timer");
},2000);} name 
 */

// console.log("End");


// Que 2 


function greet(name){

    console.log(` hello ${name}`)

}

function welcome(callback){

 let user = prompt('Enter your Name: ')
   callback(user)
}
// welcome(greet);



//* Question 3 — setTimeout with Arguments

function greet3(name){

    setTimeout(function(){
        console.log(` Hello ${name}`)

    },2000)

}

// console.log(greet3('jay kishan')); 

// passing arguments 

// setTimeout(greet3 , 2000 , 'jk')

//*Question 4 — Stop a Timer

/**
 * 
 * 
const timer = setTimeout(()=>{
     console.log('hello ');     
},5000)

const cancelTimer = setTimeout(()=>{
    clearTimeout(timer)
    console.log('Nothing should print. ');
    
},2000)

 */


//🟡 Moderate Level (Q5 - Q8)

// Question 5 — Countdown Timer
/**
 * 
 * @param {
let count = 5;
let countDown = setInterval(()=>{

console.log(count--)

},1000)

 setTimeout(()=>{
     clearInterval(countDown)
},6000)
} callback 
 */

//*debouncing-> delay (setTimeout)  and thotling -> reoeat (setInterval)


//*Question 6 — Fake API Cal

function fetchUser(callback){
    console.log('Fetchig user....');
    setTimeout(()=>{
        return callback()
    },2000)
}
function user6(){
    let obj = {
        id:1,
        name:'ritik'
    }
  console.log(obj);
}

// fetchUser(user6)



//* Question 7 — Create Your First Promise

/**
 * 
let promies = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    let recieved = true;
    if(recieved){
        resolve( ' Data Recieved ')
    }else{
        reject('Failed to Recieved ')
    }
    },2000)
})

promies
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})


 */
//*Question 8 — Promise Rejection 

/**
 * 
let promies  = new Promise((resolv , reject )=>{

    setTimeout(()=>{

        let succes = false;

        if(succes){
            resolv('data received')
        }else{
            reject('Server Down')
        }

    },2000)
})

promies
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error);
})


*/


// 🔴 Hard Level (Q9 - Q12)

//* Question 9 — Promise Chaining  .than().than()
//* every then() return a new promise 
/**
 * 
 * @returns 
function addTen(num){

    return new Promise((resolve)=>{

            resolve(num + 10)

    })
}

addTen(0).then((result)=>{

    console.log(result);

    return addTen(result)
    
}).then((result)=>{

    console.log(result)
    return addTen(result)

})
.then((result)=>{
    console.log(result)
})
 */


//* Question 10 — Async/Await Conversion
/**
 * 
function fetchData() { 
     return new Promise((resolve) => {  
          setTimeout(() => {      resolve("Data Received"); 

             }, 2000);  });}
     
     
// fetchData()
// .then(data => {console.log(data);})
// .catch(err => {console.log(err);});

async function getData() {

    try{

       let dat =  await fetchData()
       console.log(dat)
    }
    catch(err){

        console.log(err)

    }
}
 */

// getData()


//*Question 11 — Event Loop Prediction


//Predict the output 
/**
 * 
console.log("A");

setTimeout(() => {console.log("B");},0);

Promise.resolve().then(() => {console.log("C");});

console.log("D");
 */

// ADCB 

/**
 **Explation 
 * first execute Syncronus code -> "A" , and "D"
 * then go for Asycronus code ->
 * 
 * setTimeout and Promises 
 * her Promise has higher Priority so "C",
 * than "B"
 */

 //*Question 12 — Fetch + JSON (Mini Project)


 async function dataLao() {


    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

         let data = await response.json()
          console.log(data)  
    }
    catch(err){
        console.log(err)

    }
    
 }

  dataLao()




//   🎯 Bonus Interview Question
// Predict the output:Phase 5 Practice Questions11

console.log("Start");

setTimeout(() => {console.log("Timeout");},0);

Promise.resolve()
.then(() => {console.log("Promise 1");})
.then(() => {console.log("Promise 2");});

console.log("End");


/**

Expected Output
Start
End
Promise1
Promise2
Timeout
Why?

1. Sync Code  
 Start  
 End2.
 Microtasks   
Promise 1  
 Promise 2
3. Macrotasks  
 Timeout
  */