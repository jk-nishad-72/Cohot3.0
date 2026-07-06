


/**  Main Game Changer Topics 
 * 
 * InterMediete level topic master it
 * 
 //*  #Iteraton
 * 
 *  arr.forEach() -> higher order function  (it does not return Only undefind )
 * 
 //* #Tranformation:-

 //*  arr.map() -> same like forEach but it return a
 *  new Array utne hi length ka bhale hi kuchh return mt 
 *  kre [undefined , undefined].etc...
 *  .We can transform each element
 * 
 //*  arr.filter() ->
 *  : filter function, filter karta array ko on the 
 *    basis of condition true hai tabhi naye array pr rakhega 
 *    agar condition false hai nahi rakhega ..
 *   - length change ho skte hai 
 * 
 //*  arr.reduce():-
 * , tranform all elements the single element 
 * 
//  * arr.find(): // return the first matching value 

// * arr.findIndex 

//*  .some()  :- like OR
//*  .every() :- like AND

// *  Array destructuring 
 
 */



var arr = [56 , 78 , 44 , 55 , 35 , 89 , 1000]


//* filter()
var filtedArr = arr.filter((elem)=>{
     return  elem % 2===0 
})

console.log(filtedArr);

// * reduce() 

//likhne ka tarika 

// arr.reduce(function(acc,value){},0) || arr.reduce(()=>{},0)



var max = arr.reduce(function(acc, value){
    return acc > value ? acc :value ;
},0) 

console.log(max);   

//  * arr.find(): // return the first matching value 

let ans = arr.find(a=>a%2 === 0)
let ans2 = arr.findIndex(a=>a%2 === 0)

console.log(ans , ans2);


    


// *  Array destructuring 

let arr1 = [10 , 20 , 30 ,40 ]

// ...d rest operator 

var [a , b , ...d] = arr1; 
var [c ,,e] = arr1; 

console.log(a , b , d , c ,e) 







