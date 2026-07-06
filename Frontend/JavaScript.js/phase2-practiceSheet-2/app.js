

/*


JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 2


1. Array ✅
Intermediate
Create an array of 5 favorite movies and print all values.
Hint: Use indexing
let movies  = ['3idiots' , 'I ', 'pk' , 'salar' , 'mirchi' ]

for(let movie of movies){
    console.log(movie)
}
Hard
Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
Hint: Mixed data types + nested indexing

let arr = [ 
      10 , 20 , 30 , "Sheryians " ,"Sarthak bhaiya" , true , false,
     [1 , 3, 4, 5, 6, "Jay ", "cohort3.0"]];

for(let elem of arr){
    console.log(elem)
}
console.log(arr[arr.length-1])


2. Indexing in Array ✅
Intermediate  
Print the first and last element of an array.
Hint: Use 0 and length - 1

Hard
Swap the second and second-last element using indexing.
Hint: Use temporary variable
let arr = [1, 2,3 ,4 ,5 ,6 ]

console.log(arr[0] , arr[arr.length-1])

console.log([arr[1] , arr[arr.length-2]]  =  [arr[arr.length-2] ,arr[1]]  )
console.log(arr)
 let temp = arr[1];
 arr[1] = arr[arr.length-2];
  arr[arr.length-2] = temp;

for(let elem of arr){
    console.log(elem)
}


3. Multi-Dimensional Arrays ✅
Intermediate
Create a 2D array and print all first elements of inner arrays.
Hint: Double indexing

Hard
Find the sum of all diagonal elements in a 3x3 matrix.
Hint: Same row and column index


let arr2d = [
     [10 , 20 , 30 ],
     [100, 200, 300],
     [1,2,3],
    
]

let diagonalsum = 0;
for(let i = 0;i < arr2d.length;i++){
     
     for(let j = 0;j<arr2d[i].length;j++){
      
          if( i === j || j+i === arr2d.length-1){
           diagonalsum += arr2d[i][j]
          }
     }
}
console.log(diagonalsum)
for(let i = 0;i < arr2d.length;i++){
     
     for(let j = 0;j<arr2d[i].length;j++){
      
          if(j === 0){
            console.log(arr2d[i][j])
          }
     }
}


4. length ✅
Intermediate
Find total elements in an array without counting manually.
Hint: Use .length
Hard
Create a function that checks whether array length is even or odd.
Hint: Use modulus operator

let arr4 = [1,2,3,4,5,6,7,8,9,20]

console.log(arr4.length)
// arr4.length = 0;
console.log(arr4);
var lenghtEvenChecker = function(length){

     return (length % 2 === 0)?"Even Length":"odd Length"

}
console.log(lenghtEvenChecker(arr4.length))




5. push()✅
Intermediate
Add 3 new elements at the end of array.
Hint: Use push()
Hard
Add elements dynamically inside loop from another array.
Hint: Loop + push


let arr5 = [12,29, 30, 46]

arr5.push(100)
arr5.push(250)
arr5.push('jay')
let arr = [];

for(let elem of arr5){
    arr.push(elem)
}
console.log(arr5 , arr) 



6. pop() ✅
Intermediate
Remove last element and print removed value.
Hint: Store pop() result

Hard
Keep removing elements until array becomes empty.
Hint: Use while loop


let arr6 = [1,2,3,4,5,6,7,8,]
let last = arr6.pop()
console.log(last)

while(arr6.length != 0){
    arr6.pop()
}

console.log(arr6);



7. unshift() ✅
Intermediate
Add one username at beginning of array.
Hint: Use unshift()

Hard
Insert multiple elements at beginning without replacing existing ones.
Hint: Multiple arguments

let arr7 = ['hello', 'hii']

arr7.unshift('Jaykishan' , 'vicky' , 'jk')
console.log(arr7) 



8. shift() ✅
Intermediate
Remove first element from array.
Hint: Use shift()
Hard
Remove first element repeatedly until only 2 elements remain.
Hint: Loop + length check

let arr8 = [1 ,2, 4, ,5, 6, 8]
console.log(arr8.shift())

while(arr8.length !== 2){
    arr8.shift()
}
console.log(arr8)


9. splice() ✅
Intermediate
Remove 2 elements from middle of array.
Hint: splice(start, deleteCount)

Hard
Replace 3 middle elements with 5 new values.
Hint: Use insertion with splice


let arr =  [1 , 2, 3, 4, 5, 6, 7, 8,9,10];

console.log(arr.splice((arr.length-1)/2 , 2))


console.log(arr);
let arr2 =  [1 , 2, 3, 4, 5, 6, 7, 8,9,10];

console.log(arr2.splice((arr2.length-1)/2 , 3 , 50 , 60 ,70 , 80 ,90,100))
console.log(arr2);


10. reverse() ✅
Intermediate
Reverse an array using method.
Hint: Use reverse()
Hard
Reverse only first half of array.
Hint: Manual swapping


let arr =  [1 , 2, 3, 4, 5, 6, 7, 8,9,10];

// console.log(arr.reverse())
let arr2 = arr.slice(0 , arr.length/2)
arr.splice(0,arr.length/2)
console.log(arr)
// arr2.reverse()
for(let elem of arr2){
    arr.unshift(elem)
}
console.log(arr) 



11. sort() 
Intermediate
Sort numbers in ascending order.
Hint: Compare function


let arr =  [12 ,2 ,39,29 ,10 ,5 ];

console.log(arr.sort((a, b)=> a - b)) 


Hard
Sort array so even numbers come first and odd later.
Hint: Custom compare logic 


let arr = [12, 2, 39, 29, 10, 5];

arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
        return -1; // a is even → comes first
    } else if (a % 2 !== 0 && b % 2 === 0) {
        return 1; // b is even → comes first
    } else {
        return a - b; // both same type → normal sort
    }
});

console.log(arr); 


12. slice() ✅
Intermediate
Extract first 4 elements into new array.
Hint: Use slice()

Hard
Create a copy excluding first and last element.
Hint: Use start and end indexes

let arr =  [12 ,2 ,39,29 ,10 ,5 ];

let newarr = arr.slice(0,arr.length)
let newarr = arr.slice(1,arr.length-1)

console.log(newarr)


13. concat() ✅ 
Intermediate
Merge two arrays.
Hint: Use concat()

Hard   // use new array after merge for unique elems 
Merge 3 arrays and remove duplicate values.
Hint: Combine + loop/includes

let arr =  [12 ,2 ,300,29 ,10 ,500 ];
let arr2 =  [10, 200, 300, 400, 500,];
let arr3 = [93 , 400 , 68 , 46 ,200 ]

let merge2 = arr.concat(arr2)
let merge3 = merge2.concat(arr3)

console.log(merge3)
for(let i = 0;i<merge3.length;i++){
     if(merge3.includes(merge3[i])){
         merge3.splice(i,1)
     }
}
console.log(merge3)

console.log(arr2.concat(arr));
console.log(arr.concat(arr2)); 


let a1 = [1 ,2, 3]
let a2 = [10 ,5, 9]
let a3 = [2 ,1, 3]

let merge = (a1.concat(a2)).concat(a3)
console.log(merge)

let uniqueElems = []
for(let i = 0;i<merge.length;i++){
    if(!uniqueElems.includes(merge[i])) uniqueElems.push(merge[i])
}

console.log(uniqueElems)






14. includes() ✅
Intermediate
Check whether "apple" exists in array.
Hint: Use boolean result

Hard
Check if all elements of one array exist inside another.
Hint: Loop + includes 


let arr14 = ['apple' ,'jay' , 'sheryians'] 
let arr2 = ['kishan ' , 'jay' ,'sheryians' , 'app']


// console.log(arr14.includes("apple")) // true
let allElemExist = true;
for(let  i = 0;i< arr14.length;i++){
     
    if(!arr2.includes(arr14[i])){

         allElemExist = false;
         break;

    }
}

console.log(allElemExist)


15. indexOf() ✅
Intermediate
Find index of "Rahul" in array.
Hint: Use indexOf()

Hard

Find all positions of repeated number 5.
Hint: Loop through entire array

let arr15 = ['rahul' ,'jay' , 'sheryians'] 
let arr = ['kishan ' , 'jay' ,'sheryians' , 'Rahul']
console.log(arr15.indexOf('rahul') , arr.indexOf('rahul'))

let arr3 = [ 1 ,2, 5 ,  6 ,7 ,5 ,8 ,9,5 ]

for(let i = 0;i<arr3.length;i++){

    if(arr3[i] === 5 ){
        console.log(i)
    }
}


16. join() ✅
Intermediate
Convert array into comma separated string.
Hint: Use join(",")

Hard
Convert array into sentence format.
Hint: Join with spaces


let arr16 = ['jay' , 'hello' , 'world', ]

let str = arr16.join(',')
console.log(str)
let sentence = arr16.join(" ")
console.log(sentence)



17. for loop ✅
Intermediate
Print all array elements using loop.
Hint: Loop through indexes

Hard
Print elements at only even indexes.
Hint: Increase loop smartly


let arr17 = [12 , 'jay' , 233.00 , true , false , [1 ,2 ,3,4] , {}, function(){} ]

for(let elem of arr17){
    console.log(elem)
}
console.log();

for(let i = 0;i<arr17.length ;i++){
    if(i % 2 === 0){
        console.log(arr17[i])
    }
}


18. for...of ✅
Intermediate
Print all values using for...of.
Hint: Direct value iteration

Hard
Count vowels from array of characters.
Hint: Use conditions inside loop


let arr18 = ['a' , 'b' ,'c' ,'d','g' ,'o' ,'A']
let vowels = ['a' , 'e' , 'u' ,'o' , 'i' , 'A' , 'E' , 'U' ,'O' , 'I']
let count = 0;
for(let elem of arr18){
    
    if(vowels.includes(elem))  count++
}

console.log(count)



19. Reference Behaviour of Array ✅
Intermediate
Assign one array to another variable and modify second one.
Hint: Observe original array

let arr1 = [12 , 3, 4, ,50 , 100];
let copy = arr1;

console.log(arr1,copy)

copy.pop();
copy.push('jay');
copy.unshift('Sheryinas');
console.log(arr1,copy)

Hard
Create true copy so original array does not change.
Hint: Use spread operator
let arr1 = [12 , 3, 4,'sathak',50 , 100];
let copy = [...arr1];
copy.pop();
copy.push('jay');
copy.unshift('Sheryinas');
console.log(arr1,copy)


*/ 


/*

20. Spread Operator ✅
Intermediate
Copy array into new array.
Hint: Use ...


let arr20 = ['harsh' , 'sarthak' , 'shivam' , 'ritik']

let newCopy = [arr20[0] , arr20[1] , arr20[2], arr20[3]] // shortcut is -> [...arr20]
newCopy =   [...arr20]


newCopy.pop()
console.log(newCopy , arr20);

Hard
Merge arrays and add extra values in between.
Hint: Combine spread carefully


let a1 = [1 , 2, 3, 4]
let a2 = [10 , 20, 30, 40]
let a3 = [100, 200, 300, 400] 

let merge = [...a1 ,23 ,true, ...a2 ,function(){}, ...a3] 

console.log(merge);
merge.pop()
merge.push('kishanjay')


console.log(merge);




 */

