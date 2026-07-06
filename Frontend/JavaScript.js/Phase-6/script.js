

/**
 * Promise   when call an API it's return an response inthe form of Promise 
 * So  ham jyadatar Promises bnate nhi hai , Isko handle karte hai backend se data lene ke liye 
 **async await 
 * try catch 
 * .than() .catch
 */


// **async await  ()

 async function dataLao(){

var response = await fetch('https://dummyjson.com/products')

let data = await response.json();

// console.log(data.products)
let products = data.products;

// console.log(products)

 products.forEach( product => {

     console.log(product.id  , product.title) 
 });
}

dataLao()