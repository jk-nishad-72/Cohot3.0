
/**
 **Synchronous | Asynchronous JS 
 **setTimeout(clbf,timeInMs) -> HigherOrderFunction(HOF) ==> Delay  
 **setInterval()
 **clearInterval(setIntervalVariableName)
 **1000ms ==> 1s 
 **Event Loop 
 **callback Queue|Task Queue  and MicroTask Queue
 **Promise intro 
 */


// 
//  setTimeout(function run(){
//      console.log('Hello Dost This is SetTime Out ')

//  },2000)  


let stop =  setInterval(function(){
         
    console.log('hello kase hai ')
 } ,1000)

 setTimeout(function(){

    clearInterval(stop)
    console.log('stop interval ')


 } , 5000)






