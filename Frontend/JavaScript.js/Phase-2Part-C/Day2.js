

/**
 * Objects in JavaScript
 * 
 * key->value Pair 
 * DECLARATION / INIATIALIZATON 
 * CRUD 
 * array -> objects , sequential 
 * 
 * 
 * 
 */



var obj = new Object()

obj.name = 'jk Nishad'
obj.age = '30'
obj.city = 'raipur'

// * or 

var student = {
    name:'jk Nishad',
    branch:['CSE' , 'CIVIL','ILECTRICAL','MACHENICHAL'],
    college:'sheryians',
    specified:{
        jadu:'ata hai',
        honest:true,
        age:30,   
    },
// method in js

    sayhi:function(){
         console.log(`Hello Good Morning `)
    },

}

// *CRUD 
console.log(obj.name) // read
console.log(obj['age']) //read
obj.isWorking = true; //create
delete obj.city  // delete

obj.isWorking = false; // update 


console.log(obj)

console.log(student.sayhi())
console.log(console.log()) 

