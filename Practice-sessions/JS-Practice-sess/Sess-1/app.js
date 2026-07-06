


//* 1 filter greater than 300 create a new array 

/**Question 1 (Easy) — Find Expensive Products
 * 
 * 
let prices = [200, 300 ,350,500, 400, 10000 ,40 ,50 , 301]

var ExpesnProducts = function(prices){
     
let prem = prices.filter(function(elem){
     if(elem > 300) return elem
})

console.log(prem)

return ''
}

ExpesnProducts(prices);
ExpesnProducts([100,250,500,150,700])

 * 

 */


//*Q2 avarageMarks of student array 
/**
 * 
let marks = [99 , 88 , 78,50 ,45, 39]


let total = marks.reduce(function(acc , val){

     return acc+val
},0)

console.log(Math.floor(total/marks.length))

 */



//*3 count and return most frequent element 
/**
 * 
let elem = [1 , 2, 2, 3, 4, 4, 4, 5, ]


let obj = {};

for(let i = 0;i<elem.length;i++){
     if(!obj[elem[i]]){
          obj[elem[i]]  =  1;
     }
     else{
       obj[elem[i]]  = Number(obj[elem[i]]) + 1;

     }
}

console.log(obj)

let most  = 0;
let num = 0;
for(let key in obj){

    // console.log(obj[key])

    if(obj[key] > most) {
        most = obj[key] 
        num = key
    }
}

console.log(most  , num)

var freqCount = function(numbers){

     let freq = new Map();
     let maxFreq = 0;
     let maxFreqElem = 0;

     for(let num of numbers){

           freq.set(num , (freq.get(num) || 0) +1)

           maxFreq = Math.max(freq.get(num) , maxFreq)
           maxFreqElem = num
     }

     return  `${maxFreqElem} :  ${maxFreq}`
}

console.log( freqCount([1,2,3,2,4,2,5,1,1,1]))
console.log( freqCount([1 , 2, 2, 3, 4, 4, 4, 5, ]))


 */




//*modify  object property 
/**
 * 
let user = {

     sname:'jay',
     age:20,
}

user.age  = 21;
console.log(user)


 */

//* Print object using loop 
/**
 * 
let object = {
     sname:'jay',
     age:39,
     work:'frontend engineer',
     college:'kvit'
}

console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))

for(let user in object){
     console.log(user +" : "+ object[user])
}

for(let [key , value] of Object.entries(object)){
     console.log(key , value)
}


 */


//* Q highest salary employee 
/** Question 6 (Hard) — Highest Paid Employee
 * 
let employees= {
aman:25000,
ritik:50000,
priya:45000
};

let max = 0;
let name =''
for(let key in employees){
    max = Math.max(employees[key] , max)
    name  = key
}

console.log(name , max)


 */


//*Function 
/**
 * 
let user = (name)=>{

     console.log(`Hello ${name}`)
     return ''

}
console.log(user('jaykishan'))

 */

/* 
* *Question 8 (Moderate) — Discount Calculator 
* 
var CalculateDiscount = function(price){
     console.log(price - ( price * 10)/ 100)
}
CalculateDiscount(500)
CalculateDiscount(1000)

*/


//*sum of params

/**
 * 
let sum = function(...nums){

     let nsum = nums.reduce(function(acc , val){

           return acc+val
     },0)

     return nsum
}

console.log(sum(1 , 2, 3,5))





 */


//* find adult user  Question 10 (Easy) — Find Adult Users
/**
 * 
 * 
let user = [
     {name:'jau',age:30},
     {name:'j',age:20},
     {name:'ju',age:2},
     {name:'ja',age:10},

]
letusers= [
{ name:"Ritik", age:20 },
{ name:"Aman", age:16 },
{ name:"Priya", age:25 }
];


let getAdult = function(users){

     
let adult = users.filter(function(obj){

     if(obj.age>18)return obj
    
})

//  console.log(adult) 
 return adult
}

console.log(getAdult(user))
console.log(getAdult(letusers))


 */


//*Question 11 (Moderate) — Shopping Cart Total

/**
 *
 letcart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];


var getCartTotal = function(cart){

     let total = cart.reduce(function(acc,obj){

          return acc + (obj.price * obj.qty)

     },0)

     return total
}

console.log(getCartTotal(letcart))


 */



//*Question 12 (Hard) — Student Grade Report

/**

letstudents = [

     {
          name: "Ritik",
          marks: [80, 90, 85]
     },

     {
          name: "Aman",
          marks: [50, 40, 60]
     }
];

var generateReport = function (student) {


     var grade = function(totalMarks){

          if(totalMarks >= 80) return 'A'
          if(totalMarks >= 60) return 'B'
          if(totalMarks >= 40) return 'C'
          if(totalMarks >= 35) return 'D'
          else return 'Fail ⚔️'
     }

  let report =  student.map((obj) => {
          
             let avarage = obj.marks.reduce((acc,vale)=>{
                            return acc+vale
             },0)
             obj.avarage = Math.floor(avarage/obj.marks.length) 
             obj.grade = grade(obj.avarage);
             delete obj.marks

             return obj
          
     });

     return report
}

console.log(generateReport(letstudents))



 */


/**
 * 🚀 Final Challenge (Very Hard)
Mini Library Management System
Create:

addBook(title,author)
borrowBook(id)
returnBook(id)
showAvailableBooks()


 */

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






