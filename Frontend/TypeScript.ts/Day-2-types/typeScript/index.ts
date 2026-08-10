

// 1) Inference & Annotation

// Inference: ts automatically take data type of assigned data ,
//  and it take only data whos data type is same that stored first else it give error
let a = 90;
a = 190

//Annotation:  assign data type 
let b:string = 'jaykishan'

console.log(a , b);

/**
 * 2) premitieves data types 
a)number
b)string,
c)bigInt
d)boolean
e)symbol
 */

let n : number = 40;
let name:string = 'jay'
let bg:bigint = 158903423n;
let bool:boolean = true
let sy:symbol = Symbol('hii')

console.log(n , name , bg , bool , sy); 


//3) any vs unknown vs never 


let ex :any; // like js variable
ex = 90
ex = 'jfkjaslkdf'
ex = true;

// unknown
let exe :unknown ;  
exe = 'jay'
exe = 'fjka;sdjkfa'
exe = 393

let nev :never;

/**
4) Array 
5) tupples
 */

let arr = [1 , 2 , 3 , {} , [] , 'he', false]
let arr1:any[] = [1 , 2 , 3 , {} , [] , 'he', false]

// let arr2:number[] = ['fj'] ❌
let arr2:number[] = [1 , 2 , 3, 4, 5, 5,]  //✔️✅


// tupples


// let arr3:[number , string , boolean] = [2 , 'jakjs', true , 50] ❌
let arr3:[number , string , boolean] = [2 , 'jakjs', true ] // ✅ 
let arr4:[{name:string , id:boolean} , {age:number}] = [{name:'jay' , id:true} , {age:58}]

console.log(arr4);

//6)enum 

enum Role {
    USER , 
    SUP,
    ADMIN,
}

let user :Role = Role.USER

console.log(user);//0

/**
 7) Union types 
 8) literel types 
 */

 
// union
let yolo: string | number = "rahul";
yolo = 90;

// literals
type Status = "pending" | "success" | "error";

let status: Status = "success";

console.log(yolo , status);









