// this keyword 
/**
 *  global context me this keyword global object ko refer karta hai
 * 
 * function ke andar this keyword global object ko refer karta hai
 * 
 * 
 * object ke andar this keyword us object ko refer karta hai jiske andar ye likha hota hai
 * 
 * constructor function ke andar this keyword us object ko refer karta hai jiske andar ye likha hota hai
 * 
 * arrow function ke andar this keyword us context ko refer karta hai jiske andar ye likha hota hai
 * 
 * use strict mode me this keyword undefined hota hai agar hum usse kisi function ke andar use karte hai 
 * our usse kisi object ke andar use karte hai to ye us object ko refer karta hai
 * 
 */


// function sharing  exiplicitly binding this to the function
/** 
 *  call 
 *  apply 
 *  bind
 */

/**
 *  Most Important and MOst asked interview question
 * prototype me this keyword ka use kaha hota hai
 *
 */

//** call  */

const student1 = {
    name: "John",
    age: 20,    
    Greet:function(city , state){
        console.log(`My name is ${this.name} and I am ${this.age} years old and I am a student from ${city}, ${state}`);
    }
}


const student2 = {
    name: "Jon",
    age: 29,    
}


const student3 = {
    name: "Johny",
    age: 22,    
}

function getIntro(){

     console.log(`My name is ${this.name} and I am ${this.age} years old`);
}

// getIntro.call(student1);
// getIntro.call(student2);
// getIntro.call(student3);
student1.Greet.call(student2, "New York", "USA");
student1.Greet.call(student3, "Los Angeles", "USA");

//** apply  bs arguments array ke through pass hote hai , our baki call ki trh kam karta hai  */

student1.Greet.apply(student2, ["New York", "USA"]);
student1.Greet.apply(student3, ["Los Angeles", "USA"]);


//** bind  same like call but returns a new function instead of calling it immediately(turant ) */

const greetStudent2 = student1.Greet.bind(student2, "gariyaband", "cg");
const greetStudent3 = student1.Greet.bind(student3, "borsi", "raipur");
greetStudent2();
greetStudent3();


// * prototype 


// console.log(student1.__proto__); // object ke andar __proto__ property hoti hai jo uske prototype ko refer karti hai

console.log(Array.prototype);
console.log(Object.prototype);
console.log(Function.prototype);  

// * prototyple  inheritance   
/**
 *  prototype inheritance me ek object apne prototype ke properties aur methods ko access kar sakta hai jo parent object ke andar defined hote hai
 *  prototype inheritance me child object apne parent object ke properties aur methods ko access kar sakta hai
 *  prototype inheritance me child object apne parent object ke properties aur methods ko override kar sakta hai
 * 
 * Array --> Array.prototype --> Object.prototype --> null
 * Function --> Function.prototype --> Object.prototype --> null
 * Object --> Object.prototype --> null 
 * 
 *  these chaining is called prototype chaining (eg child -> parent -> grandparent)
 */

const company = {


    companyName: "Tech Company",
    location: "New York",
    getDetails:function(){
        console.log(`Company Name: ${this.companyName}, Location: ${this.location}`);
    }
}


const employee1 = {
    name: "Alice",
    position: "Software Engineer",
}

const employee2 = {
    name: "Bob",
    position: "Product Manager",
}
employee1.__proto__ = company; // employee1 ke prototype me company object ko set kar diya
employee2.__proto__ = company; // employee2 ke prototype me company object ko set kar diya

employee2.getDetails(); // employee1 ke prototype me company object hai to employee1 getDetails method ko access kar sakta hai
    

