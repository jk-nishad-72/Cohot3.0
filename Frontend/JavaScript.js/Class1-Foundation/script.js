
/*
Console & Basics

1. Print `"Hello JavaScript"` in the console.
2. Print your name, age, and city using one `console.log()`.
3. Print a warning message using `console.warn()`.
4. Print an error message using `console.error()`.
5. Use `console.table()` to display an array of 5 numbers.


console.log('Hello JavaScript');
console.log(`Jay kishan ${23} Raipur Chhattishgarh`);
console.warn('This is only for adult ')
console.error('this is a errro');
// let numbers = [1 , 2 , 3, 4, 5];
console.table([1 , 2 , 3, 4, 5]) 
*/




/*
## Data Types

1. Create variables of type string, number, boolean, null, and undefined.
2. Check the type of different variables using `typeof`.
3. Store your mobile number in a variable and check its type.
4. Create a variable with value `null` and check its type.
5. Create a bigint number and print it.


let str = 'jay kishan'
let num = 23;
let bool = true;
let empty = null;
let undu;

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bool));
console.log(typeof(empty));
console.log(typeof(undu));

let MobileNo = 9430560684;
console.log(typeof(MobileNo));

let bigValue = Number.MAX_VALUE ;
let sum = BigInt(bigValue) + 3n;

console.log(bigValue ,sum );


*/






/* 
## Type Conversion & Coercion

1. Convert the string `"50"` into a number.
2. Convert the number `100` into a string.
3. Convert `"true"` into a boolean.
4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`
1. Create a variable with value `"123abc"` and convert it into a number.
2. Use `parseInt()` on `"500px"`.


let num = Number('59');
let num = parseInt('59');
console.log(num);
let str = String(100);

console.log(typeof(str) , str);

let bool = Boolean("ture");

console.log(typeof(bool) , bool);

console.log("5" +2 , "5" -2 , true + 1);

console.log(Number("124abc"));
console.log(parseInt("400px"));




*/



/*
## Operators

1. Add two numbers and print the result.
2. Find the remainder when 25 is divided by 4.
3. Find the square of a number using exponent operator.
4. Increment a variable using `++`.
5. Decrement a variable using `-`.

6. Use `+=` operator to increase a variable by 20.
7. Compare two numbers using `>`, `<`, `>=`, `<=`.
8. Check if two values are strictly equal using `===`.
9. Compare `"10"` and `10` using both `==` and `===`.
10. Create two boolean variables and test `&&`, `||`, and `!`.


console.log(10 + 50000);
console.log(25%4);
console.log(4 ** 3);
let a = 10
a++;
console.log(a);
--a
console.log(++a);
a += 20
console.log(a);
console.log(4 < 3 , 40 > 400 , 10 >= 10 , 400 <= 500);
console.log(10 === '10' , 10 == '10' , 10 === 10) 

let boolt = true;
let boolf= false;

console.log(boolt && boolt , boolt || boolf , !boolt , !boolf );
console.log(+boolt , +boolf);
*/





/*
## Challenge Questions for Beginners

1. Generate a random OTP of 4 digits.
2. Reverse a 3-letter string manually.
3. Find the last character of a string.
4. Convert a full name into uppercase initials.
5. Check whether two strings are equal ignoring case sensitivity.
6. Create a simple login validation system.
7. Find whether a number is a 2-digit or 3-digit number.

8. Create a mini ATM balance checker. 
9. Simulate a traffic light system using `switch`.
10. Build a small marksheet generator using variables and conditionals.


let otp =Math.floor(Math.random() * 9999 + 1000)

console.log(" Your OTP is :"+otp);

let str = 'abc'
console.log(str.split('').reverse().join(''))
// or using loop 

let ans = '';

for(let i = str.length-1;i>= 0 ;i--){
     ans += str.charAt(i)
}
console.log(ans)

let shery = 'Sheryians'

console.log(shery.charAt(shery.length-1))
console.log(shery.toLocaleUpperCase())

console.log(('jay').toLocaleLowerCase() == ('JAY').toLocaleLowerCase());


let user = 'jknishad'
let password = 'jk12245'

let username = prompt('Enter Your Name : ')
let userpassword = prompt('Enter Your Password: ')

if(user === username && password === userpassword){
    console.log('Loged in ')
}else {
    console.log("Invalid User ")
}


let digit = prompt("Enter any Numner of digits  :")

if(digit.length ===2 ){
    console.log("Two digit Number ",Number(digit) );
    
}
else if(digit.length ===3){
    console.log("Three digit Number " ,Number(digit));
}
else {
    console.log(digit.length + " digit Number " + Number(digit))
}

 */

/**
 * Start with a fixed balance (e.g., ₹5000).

Allow the user to perform actions like:

Check balance → Show the current account balance.

Withdraw money → Deduct the entered amount if sufficient funds exist.

Deposit money → Add the entered amount to the balance.

Exit → End the program.
 */

function miniATM(){

  let balence = 10000;
 
   console.log(`Your Current Balence ${balence} 💸 `);

   let widrawal = Number(prompt("Enter Your Widrawal ammount : "))

   console.log(`Your Current Balence ${balence - widrawal} 🤑 `);

   let deposit = Number(prompt("Enter Your Deposit  ammount : "))

   
   console.log(`Your Current Balence ${balence + deposit} 🤑 `);

}

miniATM();




























/* */

