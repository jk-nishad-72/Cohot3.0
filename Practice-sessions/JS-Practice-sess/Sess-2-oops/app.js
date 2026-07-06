

//   "use-strict-mode"

//*OOPs Practice Questions

//*🟢 Easy Level (Q1 - Q4
/*
 *Question 1 — Understanding this  in anObject
 * 
 */
// this

const user = {

    name: 'Jay Kishan',
    great: function () {
        console.log(this.name);
        return ''
    },
    // or 
    great2() {
        console.log(this.name)
        return ''

    },
    //or 
    great3: () => {
        console.log(this.name); //undefined
        console.log(this) // {} and in browser window{}
        return ''
    }

}

// console.log(user.great());
// console.log(user.great2());
// console.log(user.great3());

/*
 *Question 2 — Default Binding

 */


function show() {
    // window object -> browers , Nodefile -> object , Strict mode-> undefined

    console.log(this);
}

//  show()

/**
 * Question 3 — call()
 * explicit binding ||
 * function sharing
 */

function introduce() {
    console.log(this.name);
}

const person = {
    name: "Ritik"
};

// console.log(introduce.call(person));


/*
*Question 4 — apply()
* arguments are passed inthe form of array

*/


function introduce2(city, country) { 
    console.log(`${this.name} from ${city} , ${country}`); 

} 

const person2= { name: "JK" };
// console.log(introduce2.apply(person2,['raipur' , 'india']));


//* bind() return a function 
const fn2 = introduce2.bind(person2 , 'raipur' , 'india')

// console.log(fn2());


//*🟡 Moderate Level (Q5 - Q7)
/*
 * Question 5 — Fix Lost this
 */

const user5 = {  
    name:"Ritik", 
     greet() {
     console.log(this.name);  
    }
}

// const fn5a = user5.greet;
// fn5a() // undefined lose of name 
// const fn5b = user5.greet.bind(user5);
// fn5b() // fix it using bind 


/*
 *Question 6 — Create an Inheritance Chain
 * 
 */


 const animal= { 
     eats:true 
     
    };

const dog = Object.create(animal)
// Property of animal is inherited
// console.log(dog , dog.eats)


// or 

const cow = {
     animalNmae:'cow'
}
// Prototyple inheritance 
cow.__proto__  = animal;

// console.log( cow , cow.eats );


/*
 * Question 7 — Prototype Method
 */
//counstructor funtion 

function Person7(name) {

    this.name=name; 
}

let great7 = function(){
    console.log(`Hello Chacha : ${this.name}`)

}
Person7.prototype.great7 = great7;


const P7a = new Person7('JK Nishad')
const P7b = new Person7(' Ritik ')



// P7a.great7() 
// P7b.great7() 



//*🔴 Hard Level (Q8 - Q10)

/**
 * Question 8 — Student Class System
 * 
 * 
 */

class Student{

    constructor(name , marks) {

        this.name  = name
         this.marks  = marks
    }
    getGrade(){

       if(this.marks >= 90 && this.marks <= 100 ) return 'A'
       else if(this.marks >= 75 && this.marks <= 90 ) return 'B'
       else if(this.marks >= 60 && this.marks <= 75 ) return 'C'
       else return 'F'
    }
      
}

const Student1 = new Student('Ritik ' , '89')
const Student2 = new Student('sarthak ' , '99')


// console.log(Student1.getGrade());
// console.log(Student2.getGrade());

/*
 * Question 9 — Employee Inheritance
 */

class Employee{

    constructor(eName , eSalary)
    {
        this.eName = eName
        this.eSalary = eSalary
    }

    work(){
        console.log(`Hello ${this.eName} & ${this.eSalary}`);
        
    }
}

class Developer extends Employee{
    constructor(eName , eSalary , devRole)
    {
    super(eName , eSalary) 
    this.devRole = devRole;
    }

    code(){
 console.log(`Hello ${this.eName} Your Role is : ${this.devRole} and your Salary is: ${this.eSalary}`);
    }
}


const dev = new Developer('jk ',200000 , 'Frontend Dev')

// dev.work()
// dev.code()


/* 
 * Question 10 — Bank Account (Interview- Level)

 */


class BankAccount {
// Private field can't be inherited 
    #balance = 0;

    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Congratulation 💸 🎉 Depostit of : ${this.#balance}$`)
            console.log(`Your  Balence after Deposit : ${this.#balance}`)
        }
    }

    withdraw(amount){

        if(this.#balance < amount){
            console.log(`The amount is too Highe & Balence is : ${this.#balance}$`);
        }else{

            this.#balance -= amount 
        console.log(`Congratulation 💸 🎉 Withdrawal of : ${this.#balance}$`)
        console.log(`Your  Balence After Withdraw : ${this.#balance}`)
        }
    }

    getBalance(){

            console.log(`Your  Balence is : ${this.#balance}$`)
    }
}

const bankUsr1 = new BankAccount();

// bankUsr1.getBalance()
// bankUsr1.deposit(20000) 
// bankUsr1.withdraw(2500)

// bankUsr1.getBalance()




//*🎯 Bonus Challenge (Very Hard)

class Books{
     constructor(id , title , author,borrowed) {
          this.id = id;
          this.title = title;
          this.author = author;
          this.borrowed = borrowed;  
     }
}

class Library{
     constructor() {
          this.books = []; 
     } 

     addBook(book){
          this.books.push(book)
          return this.books
     }

     borrowBook(id){

       return this.books.filter(function(obj){
                    return(obj.id === id ? obj.borrowed = true : '')
       })
     }

     returnBook(id){

          return this.books.filter(function(obj){
               return (obj.id === id ? obj.borrowed = false : '')
          })
     }

      
     ShowAvailableBooks(){ 

          if(this.books.length === 0) return `Sorry There is no Book available !`

          this.books.forEach(function(obj){
               console.log(obj)
          })
     }
}

const Book1 = new Books(1, 'LOA' , 'Indu & Mitesh Khatri' ,false)
const Book2 = new Books(2, 'ReachDad PoorDay' , 'Viliam Reacher' ,false)

const Lib = new Library();
Lib.addBook(Book1)
Lib.addBook(Book2)

console.log(Lib.ShowAvailableBooks());

console.log(Lib.borrowBook(2))
Lib.ShowAvailableBooks() 
console.log(Lib.returnBook(2))
Lib.ShowAvailableBooks() 
















