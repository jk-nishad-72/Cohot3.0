

//*Array 

//*🟢 Easy Level (Q1 - Q7) 
//*Q1

let ExpenseProd = function(prices){
    return prices.filter((price)=>{
        return price>300
    })

}

// console.log(ExpenseProd(prices= [100,250,500,150,700]))

//*2 

var findLastStudent = function(students){

    return students[students.length-1]
}

// console.log(findLastStudent(students= ["Aman","Ritik","Priya","Rahul"]));

//*Question 3 — Add New Product

var AddNewProduct = function(products , newProduct){

products.push(newProduct)
 return products


}

// console.log(AddNewProduct( products= ["Laptop","Mouse","Keyboard"], "Monitor" ));



//*Question 4 — Remove Last Notification 


var RemoveLastNotification = function(Notification){
 
    Notification.pop()
    return Notification

} 

// console.log(RemoveLastNotification(notifications= ["Order Placed","Order Shipped","Order Delivered"]))




//*Question 5 — Check User Exists

var  CheckUserExists = function(users , exist){

    return users.includes(exist)

}
// console.log(CheckUserExists(users= ["Aman","Ritik","Priya"], "Ritikl"));


//* Question 6 — Convert Marks to Percentage


var ConvertMarkstoPercentage = function(marks){

     return  marks.map(function(elem){
          return `${elem}%`
     })
}

// console.log(ConvertMarkstoPercentage(marks= [80,90,70]));

//*Question 7 — Count Products 

var CountProducts =  function(cart){

    return cart.length;

}
// console.log(CountProducts(cart= ["Mouse","Keyboard","Monitor","Laptop"]));


//* Moderate Level( Q8 - Q14 )

//*Q8 -Student Average

var StudentAverage = (marks)=>{

    let avarage = marks.reduce((acc, val)=>{

        return acc + val

    })

    return Math.floor(avarage / marks.length)

}

// console.log(StudentAverage( [80,90,70,85,95]));

//*Question 9 — Even Numbers Finder

var EvenNumbersFinder = function(nums){

 
     return  nums.filter(function(num){ 
        return num % 2 === 0
     })

}
// console.log(EvenNumbersFinder([1,2,3,4,5,6,7,8]));


//*Question 10 — Product Search


var ProductSearch = function(products , target){


    return products.indexOf(target)

}

// console.log(ProductSearch(products= ["Laptop","Mouse","Keyboard","Monitor"] , "Keyboard"));

//*Question 11 — Total Revenue


var TotalRevenue = function(sales){

    return sales.reduce((acc , val)=>{

        return acc+ val

    },0)

}

// console.log(TotalRevenue(sales= [500,700,1000,300]));

//*Question 12 — Uppercase Usernames

var UppercaseUsernames = function(users){
     let newUser = users.map(str => {

       return(str.toUpperCase())
        
    });

    return newUser

}

// console.log(UppercaseUsernames( users= ["ritik","aman","priya"]));


//*Question 13 — Find First Adult

var FindFirstAdult = function(ages){
    let ans  = ages.find((elem)=> elem >= 18 )
    return ans
}

// console.log(FindFirstAdult(ages= [12,15,17,19,22]));

//*Question 14 — Positive Number Check


var PositiveNumberCheck = function(nums){

     let ans = nums.every((elem)=> elem > 0)

     return ans
}

// console.log(PositiveNumberCheck(nums= [5,8,10,3 ,2]));


//*Hard 15 - 20 

//*Q15 

var mostFrequentNum = function(numbers){

     let map = new Map();
     let max = 0;
     let MostFreq = 0;


     for(let num of numbers){

         map.set(num, ( map.get(num) || 0) + 1);

         max  = Math.max(max , map.get(num)) 
         MostFreq = num
     }

     return ` ${MostFreq} : ${max}`
}

// console.log(mostFrequentNum([1,2,3,2,4,2,5,1,1,1]));

//*Q16  Second Largest Number

var SecondMaxNum = function(nums){

    let max = 0;
    let secondMax = 0;

    for(let i  = 0;i<nums.length;i++){
        if(nums[i] > max){
            secondMax = max;
            max = nums[i];  
        }
        else if(nums[i] < max && nums[i] > secondMax){
             secondMax = nums[i]
        }
    }

    return `Max is: ${max} And Second Max is: ${secondMax}`
    
}

// console.log(SecondMaxNum([10,50,20,80,40,90 ,90]));

//*17 Remove Duplicates

var RemoveDupliCates = function(ids){

 //* Method 1  
    // let set = new Set(ids)
    // return [...set]

//* Method 2
//  let newArr = [];
//     for(let s of set){
//         newArr.push(s)

//     }
// return newArr;

//* Method 3 use Map

let map = new Map();
let newArr = [];
for(let id of ids){
    map.set(id , (map.get(id) || 0) + 1)
}
for(let [key ,value] of map){
    newArr.push(key)
}
return newArr
}
// console.log(RemoveDupliCates( [1,2,2,3,4,4,5,5]));

 
//*18   Longest Word 

var  LongestWord = function(words){

  let max = 0;
  let MaxWord = '';

  for(let word of words){
     
    max = Math.max(word.length,max)
    MaxWord = word;
  }

   return `The word is: ${MaxWord} and Length is: ${max}`
}

// console.log(LongestWord(words= ["JavaScript","HTML","CSS","Programming"]));

//*19 Rotate Array Right

var RotateArrayRight = function(nums){

     let newArr = [];

     newArr.push(nums[nums.length-1])

     for(let i = 0; i<nums.length-1 ;i++){

         newArr.push(nums[i])
     }

     return newArr
}

// console.log(RotateArrayRight([1,2,3,4,5]));
// console.log(RotateArrayRight([5,2,3,4,1]));

//*20  Best Selling Product 

var  BestSellingProduct = function(sales){
 
     let map = new Map();
     let max = 0;
     let FreqProd = '';

    for(let sale of sales){
        map.set(sale , (map.get(sale) || 0) +1) 
    }

    for(let [key , value] of map){

         if(value > max){
            FreqProd = key;
            max = value;
         }
    }

    //  console.log(map , max , FreqProd)
    return `The Most sold Product is: ${FreqProd}`

 
     
}

// console.log(BestSellingProduct(sales= ["Mouse","Keyboard","Mouse","Laptop","Mouse","Keyboard"]));



//* Part 2: Objects (20 Questions)

//* 🟢 Easy Level (Q1 - Q7)  


//*🔴 Hard Level (Q15 - Q20)

//*Question 15 — Highest Paid Employee



let highestPaidEmployee = function(employees){

     let highest = 0;
     let eName = ''

    for (const key in employees) {
    
        // const element = employees[key];
        // console.log(key ,element );
        if(highest < employees[key]){
             eName = key;
             highest = employees[key]
        }
         
    }

    return `The employee of The month is ${eName} with Salary ${highest}`


}


// console.log(highestPaidEmployee({  aman:25000,  ritik:50000,  priya:45000}));

//*Question 16 — Most Used Programming Language

let MostUsedProgrammingLanguage = function(employees){

     let highest = 0;
     let eName = ''

    for (const key in employees) {
    
        // const element = employees[key];
        // console.log(key ,element );
        if(highest < employees[key]){
             eName = key;
             highest = employees[key]
        }
         
    }

    return `The Most Used Programming Language is: ${eName} with votes: ${highest}`


}

// console.log(MostUsedProgrammingLanguage(votes= {  JavaScript:25,  Python:30,  Java:15,  Cpp:10}));

//*Question 17 — Reverse Key Value

let ReverseKeyValue  = function(object){

    const newObj = new Object();
    for (const key in object) {
        const element = object[key];
        
        newObj[element] = key  
        // console.log(key ,element);
         
    }

    // console.log(newObj);
    
      return newObj;
}

// console.log(ReverseKeyValue(countries= {  India:"Delhi",  Japan:"Tokyo",  France:"Paris"}));

//*Question 18 — Student Marks Summary


let StudentMarksSummary = function(object){
 
//* Method1

    // let totalMarks = 0;
    //  for (const key in object) {
     
        
    //     const element = object[key];
    //     totalMarks += element;
    //  }

    //  return totalMarks

//* Method2
    let values = Object.values(object)
    return values.reduce(function(acc, val){

       return acc + val

    },0)
}

// console.log(StudentMarksSummary(marks= {  math:90,  science:80,english:85}))


//*Question 19 — Find Missing Property
let FindMissingProperty = function(users , msigProperty){


    if(!users.msigProperty){
        users[msigProperty] =  'Not Provided'
    }

    return users

}

// console.log(FindMissingProperty(user= {  name:"Ritik",  age:21} , 'email'));


//*Question 20 — Product Inventory Analyzer


let ProductInventoryAnalyzer = function(inventory){

 let total = 0;
 let Max = 0;
 let MaxProduct = ''
 let min = Number.MAX_VALUE;
 let MinProduct = ''

  for (const key in inventory) {
    const element = inventory[key];
    // console.log( key,element);
        total += element;
    if(element > Max){
        MaxProduct = key
        Max = element 
    }
    if(element < min){
    MinProduct = key;
    min = element
    }    
  }
  
  return `Total Stock ${total}.
Highest stock Product: ${MaxProduct} with stock: ${Max}.
Lowest stock Product: ${MinProduct} with StockL ${min}`

     

}

// console.log(ProductInventoryAnalyzer( inventory= {  mouse:25,  keyboard:10,  monitor:5,  laptop:2}));




/*
*Part 3: Functions (20 Questions)
*Function 
*/

//*🟡 Moderate Level (Q8 - Q14)


//*Question 8 — Discount Calculator

let DiscountCalculator = function(price){

    return price - (Math.floor(price * 10 / 100))
}
// console.log(DiscountCalculator(1000));


//*Question 9 — Largest of Three Numbers

let LargestOfThreeNum = function(a , b ,c){

    // if(a > b && a > c ) return a 
    // else if ( b > a && b > c) return b;
    // return c 

    if(a > b){
        if(a > c){
            return a
        }else return c
    }else {
        if(b > c) return b
        else return c
    }
}

// console.log(LargestOfThreeNum(500 ,50 ,50));

//*Question 10 — Reverse String 

let ReverseString = function(str){

    //   return str.split('').reverse().join('')

    let revers = '';
    for(let i = str.length-1;i>=0;i--){
        revers += str[i]
    }
    return revers

} 

// console.log(ReverseString('hello'));
// console.log(ReverseString('jknishad'));



//*Question 11 — Count Vowels 
let CountVowels = function(str){

    let Vowels = 'aeiouAEIOU'

    let count = 0;
    for(let s of str){
        if(Vowels.includes(s)){
            count++
        }
    }

    return count
} 

// console.log(CountVowels('javaScript'));



//*Question 12 — Generate Username

function GenerateUsername(uname){
    return uname.toLowerCase().replaceAll(' ' , '_')
} 

// console.log(GenerateUsername('Jay kishan Nishad'));
// console.log(GenerateUsername('Ritik Rajput'));

//*Question 13 — Dynamic Sum Function

function DynamicSumFunction(...numbers){
    return numbers.reduce((acc , val)=>{
        return acc + val
    },0)

}

// console.log(DynamicSumFunction(1,2,3,4,5));

//*Question 14 — Login Validation

function LoginValidation(usernamae , password ){
    if(usernamae === 'admin' && password === '1234')return 'Login Successful'
    else return 'Invalid Credentials '
}
// console.log(LoginValidation('admin','1234'));






//*🔴 Hard Level (Q15 - Q20)


//*Question 20 — Shopping Bill Generator



let BillGenerator = function(items ){

 let total = 0;
    items.forEach(element => {

        const price = element.price

        // console.log(price);
        total += price;
         
        
    });

    return `Total : ${total}`

      
}

// console.log(BillGenerator([  { name:"Mouse", price:500 },  { name:"Keyboard", price:1000 },  { name:"Monitor", price:10000 }]));


//*Question 19 — Callback Function

let processUser = function(name,callback){
      welcomeUser();
      return ` Welcome ${name}`

}

function welcomeUser(){
    console.log('Processing User....')
}

// console.log(processUser("Ritik",welcomeUser));


//*Question 18 — Function Returning Function


let makeMultiplier = function(multiplier){


     return function(num){
        return `${multiplier * num}`
     }

}

let double = makeMultiplier(2)
let triple = makeMultiplier(5)

// console.log(double(10))
// console.log(triple(20));


//*Question 17 — Password Strength Checker

let PasswordStrengthChecker = function(password){

    
    if(password.length >= 8 && /[0-9]/.test(password)){
        return `Strong`
    }
    else return `Week`


}

// console.log(PasswordStrengthChecker('kishan1'));

//*Question 16 — Palindrome Checker


let  PalindromeChecker = function(str){

 //Method1 
//  let ans = '';
//  for(let i = str.length-1;i>= 0 ;i--){
//     ans += str[i]
//  }
//  console.log(ans , str)
//  if(ans === str) return true
//  else return false


//Method 2 

let i  = 0;
let j = str.length-1;

while(i < j){

    if(str[i] !== str[j]){
          return false
    } 
    i++
    j--

}

return true

}

// console.log(PalindromeChecker('madam'));
// console.log(PalindromeChecker('ajay'));

//*Question 15 — Factorial Function


let FactorialFunction = function(num){
 
     if(num === 1) return num

     return num * FactorialFunction(num-1)
}

// console.log(FactorialFunction(5));
// console.log(FactorialFunction(6));




/*
*Part 4: Arrays + Objects + Functions (20Questions)  
*/

/**🔴 Hard Level (Q15 - Q20)*/


//*Question 15 — Student Grade Report


let  StudentGradeReport = function(students){

      function sgrade(tmarks){

        if(tmarks >= 80) return 'A'
        else if(tmarks >= 60 && tmarks < 80) return 'B'
        else if(tmarks >= 40 && tmarks <60) return 'C'
        else if(tmarks >= 35 && tmarks <40) return 'D'
        else return 'Fail'
      }

   const object =  students.map(function(obj){
            
              let avarage  = 0;
              let grade = '';

              avarage = obj.marks.reduce((acc , val)=>{
                return acc + val
              },0)


            avarage = Math.floor(avarage/obj.marks.length) 
            grade = sgrade(avarage)

             
            obj.avarage = avarage
            obj.grade = grade
           
            // console.log(avarage , grade);
            delete obj.marks

            return obj
     })

     console.log(object)
}

// console.log(StudentGradeReport( [       {    name:"Ritik",    marks: [80,90,85]  },       {    name:"Aman",    marks: [50,40,60]  }]))

//*Question 16 — Product Revenue Analyzer


let ProductRevenueAnalyzer =function(products){

    let RevenuePrProduct = {};
    let TotalRevenue = 0;
    let BestSellingProduct = ''
    let max = 0;
    // let ans = new Object();
      products.map((product)=>{
        // console.log(product.name , product.price , product.sold)
        const { name,price , sold} = product;
        // console.log(name , price, sold) 

          RevenuePrProduct[name] = price*sold;
          TotalRevenue = TotalRevenue + (price * sold) 
        
           if(max < sold){
              BestSellingProduct = name;
              max =  sold
           }
      }) 

      console.log(RevenuePrProduct , TotalRevenue , BestSellingProduct)

}

// console.log(ProductRevenueAnalyzer(products= [ 
//       {    name:"Mouse",    price:500,    sold:20  }, 
//       {    name:"Keyboard",    price:1000,    sold:30  }])
//     )



//*Question 17 — AttendanceSystem

let students= [  { name:"Ritik", present:true },  { name:"Aman", present:false },  { name:"Priya", present:true }];
class AttendanceSystem{

    countPresent(students){

        let count = 0;
         students.map((obj)=>{
             if(obj.present) count++
        })
        return count

    }
      countAbsent(students){
        let count = 0;
         students.map((obj)=>{
             if(!obj.present) count++
        })
        return count
        
    }

      getResentStudents(students){ 

        // let PresentStudent =  [];

      let PresentStudent =    students.filter((obj)=>{
            return obj.present === true
            
        })
        return PresentStudent
        
    }
}

// const AttendanceSystem1 = new AttendanceSystem();

// console.log(AttendanceSystem1.countPresent(students))
// console.log(AttendanceSystem1.countAbsent(students))
// console.log(AttendanceSystem1.getResentStudents(students))

//*Question 18 — Library Management System

/**
 * Store books like:
{id:1,title:"Atomic Habits",borrowed:false}
Create:
addBook()
borrowBook()
returnBook()
showAvailableBooks()
 */

class Book{
    constructor(book_id , book_title, book_borrowed ){

        this.book_id = book_id
        this.book_title = book_title
        this.book_borrowed = book_borrowed || false;
    }
}

class LibrarySystem {

    constructor() {
        this.booksArray = []
    }
    //* Showing all Books 
    showAvailableBooks(){

       if(this.booksArray.length === 0) return `
       Books are Not available !`
    
        else{
            this.booksArray.forEach(element =>{
                console.log(element); 
            })
        }
    }

    //* Add new Book
    addNewBook(book){
        this.booksArray.push(book)
    }

    //* Boroow a Book

    borrowBook(id){

   return  this.booksArray.filter(function(book){

        return (book.book_id === id ? book.book_borrowed = true : '')
     })

    }
    returnBook(id){
        

    return  this.booksArray.filter(function(book){

        return (book.book_id === id ? book.book_borrowed = false : '')
     })
        
    
    }
}


let Lib1 = new LibrarySystem();
let panchGranth = new Book('A' , 'Jay kishan' , false);
let patherPanchli = new Book('B' , 'Premchand' , false);

Lib1.addNewBook(panchGranth)
Lib1.addNewBook(patherPanchli)

Lib1.showAvailableBooks()

console.log(Lib1.borrowBook('B'))
Lib1.showAvailableBooks()

console.log(Lib1.returnBook('B'))
Lib1.showAvailableBooks()







//*Question 19 — Order Management System 

class Product{

    constructor(id , customer , amount , status ){
        this.id = id
        this.customer = customer
        this.amount = amount
        this.status = status
    }
}

class OrderManagement{ 

     constructor(){

        this.productList  = [];

     }

    createOrder(product){ 
        this.productList.push(product)
        return this.productList
    }

    updateStatus(id){
         // Pending to - delieverd , delieverd already delieverd 

       this.productList.map(function(obj){
        if(obj.id === id && obj.status === "Pending"){

            obj.status = 'Delieverd'
        }
        else{
            return `Already Delieverd`
        }

       }) 
       return this.productList
    }

    getPendingOrders(){ 

         console.log("Pending Orders ! ")
        return this.productList.filter((obj)=>{ return obj.status === "Pending"})


    }

    getCompletedOrders(){

        console.log(" Completed Orders ! ")
        return this.productList.filter((obj)=>{ return obj.status === "Delieverd"})

    }
    
}


const OrderList1  = new OrderManagement();
const product1 = new Product(1 , 'Ritik',5000,'Pending')
const product2 = new Product(2 , 'Devendra',10000,'Delieverd')
const product3 = new Product(3 , 'sathak',55000,'Pending')
const product4 = new Product(4 , 'ali',200000,'Pending')



// console.log(OrderList1.createOrder(product1));
// console.log(OrderList1.createOrder(product2));
// console.log(OrderList1.createOrder(product3));
// console.log(OrderList1.createOrder(product4));

// console.log(OrderList1.updateStatus(1))

// console.log(OrderList1.getPendingOrders());
// console.log(OrderList1.getCompletedOrders());


/**
**Question 20 — Mini E-Commerce System
(Interview Level)
addProduct()
removeProduct()
updateStock()
purchaseProduct()
getInventoryValue()
 */


class ProductObj{
    constructor(id , name , price,stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}

class MiniEcommerc{

    constructor() {

        this.Products = [];
        
    }
//* Product ko show karana 
      showAllStocks(){

        console.log('All Product Available on Stock is : ')

        return this.Products
    }

    // * Add New Product 
    addNewProduct(product){
        this.Products.push(product)
        
        // return this.Products
    }


    // *  Product ko Delete karna specific Id se 

    removeProduct(id){

        let afterRemoved = this.Products.filter(function(obj){
            return obj.id !== id
        })

        this.Products = [...afterRemoved]

        // return this.Products
    }
  

    // *  Product ko Upadate  karna specific Id se 

    updateStock(id , price , stock){

      

        let updatedStock = this.Products.map(function(obj){
         
            if(obj.id === id){
                 
                obj.price = price || obj.price
                obj.stock = (stock > 0 ? obj.stock + stock: obj.stock + stock) || obj.stock
            }
        }) 

        
    }

    //* purchasing Product 

    purchaseProduct(id  ,prdctName, numberOfProdcts){

        //  let afterPurchasing = this.Products.map(function(prdct){


        //     if(prdct.id === id || prdctName === prdct.name){
        //       prdct.stock = numberOfProdcts <= prdct.stock ? prdct.stock-numberOfProdcts:'' 
        //     }

        //  })

        let purchasedProduct = this.Products.find(function(obj){
            return id === obj.id && prdctName === obj.name

        })

      if(purchasedProduct.stock < numberOfProdcts) return 'Product is Not available'

      else {
        purchasedProduct.stock = purchasedProduct.stock - numberOfProdcts;
      }
    //   this.Products.push(purchasedProduct)
      return purchasedProduct 


    }

    //*Get Inventory value 

    getInventoryValue(){

        let totalValue = 0;

        this.Products.forEach((product)=>{
            totalValue =  totalValue +(product.price * product.stock)

        })

        return `Total Inventory Value is : ${totalValue}`
    }

}

let prdct1 = new ProductObj(1 , 'mouse' , 250 , 20)
let prdct2 = new ProductObj(2 , 'keyboard' , 900 , 25)
let prdct3 = new ProductObj(3 , 'speaker' , 2000 , 10)
let prdct4 = new ProductObj(4, 'dekstop' , 5000 , 30)
let prdct5 = new ProductObj(5, 'cpu' , 30000 , 35)

const ecommercSystem1 = new MiniEcommerc()

ecommercSystem1.addNewProduct(prdct1)
ecommercSystem1.addNewProduct(prdct2)
ecommercSystem1.addNewProduct(prdct3)
ecommercSystem1.addNewProduct(prdct4)
ecommercSystem1.addNewProduct(prdct5)

// console.log(ecommercSystem1.showAllStocks())

ecommercSystem1.removeProduct(1) 

// console.log(ecommercSystem1.showAllStocks())

ecommercSystem1.updateStock(3 , 3300 ,30 )
ecommercSystem1.updateStock(2 , 2500 ,10 )
// console.log(ecommercSystem1.showAllStocks())



// console.log(ecommercSystem1.purchaseProduct(5, 'cpu' , 30));
// console.log(ecommercSystem1.purchaseProduct(4, 'dekstop' , 5));
// console.log(ecommercSystem1.showAllStocks()) 
// console.log(ecommercSystem1.getInventoryValue()) 



































































