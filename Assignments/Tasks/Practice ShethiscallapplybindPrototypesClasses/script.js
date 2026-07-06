
// 'use strict'
/**
 * EASY LEVEL (Q1–Q10)


*/ 
// * Question 1 — Method and this
const user= {
  name:"Ritik",
  greet() {
console.log(this.name);
  }
};

// user.greet();

//*Question 2 — Default Binding


function show() {
console.log(this); // udefined 
}

// show();



//*Question 3 — Object Method

const car= {
  brand:"audi",
  showBrand() {
console.log(this.brand);
  }
};

// car.showBrand() 


//* Question 4 — call()

function greet() {
console.log(this.name);
}

const user4= {
  name:"Aman"
};

// console.log(greet.call(user4)) // out -> aman


//* Question 5 — apply()

function introduce(city , state) {
console.log(`${this.name} from ${city} state ${state}`);
}

const person= {
  name:"Ritik"
};
// console.log(introduce.apply(person , ['bhopal' , 'MP']))



//* Question 6 — bind()

function greet6() {
console.log(this.name);
}

const user6= {
  name:"Priya"
};

const sol6 = greet6.bind(user6) // return a function 
// console.log(sol6()); // priya 



//* Question 7 — Arrow Function this

const user7= {
  name:"Ritik",
  greet: () => {
console.log(this.name);
  }
};

// user7.greet();
 //* o/p -> it gives undefind because 
//* this is window object and it not have name property


//*Question 8 — Event Handler Theory 

document.querySelector("button").addEventListener("click",function(){
    console.log(this) // refers the button itself 
})

document.querySelector("button").addEventListener("click", () => {
      console.log(this) // refers the window object
})




//* Question 9 — Constructor Function

function Person(name) {
this.name=name;
}

const  p1 = new Person('Ritik')

// console.log(p1)


//* Question 10 — Prototype Lookup


const arr= [1,2,3];

//* push is in the prototype of arr it is predifined and provided by the web api [window object ]

// console.log(arr.push());




