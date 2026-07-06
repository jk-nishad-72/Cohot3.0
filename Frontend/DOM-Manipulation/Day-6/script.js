


let createBtn = document.querySelector('.create-btn')
let formDiv = document.querySelector('.form')
let closeBtn = document.querySelector('#close')
let  form = document.querySelector('form')

let products = document.querySelector('.products')



let productArr = JSON.parse(localStorage.getItem('products')) || [] ;

console.log(productArr)

let prouctIndex = null;

function UI(){ 

    products.innerHTML = ''

    productArr.forEach((elem , index)=>{

      products.innerHTML +=  ` <div class="product">
                 <img src="${elem.productImage}" alt="prdct">

                 <h1>Name : ${elem.productName} </h1>
                  <p>Decription : ${elem.productDisc}</p>

                  <h3>Price : ${elem.productPrice}</h3>

                  <div class="btns">
                      <button class = 'udpate' onclick="handleUpdate('${elem.productName}')"> Update </button>
                      <button class = 'del' onclick= "handlDelete(${index})" > Delete </button>
                  </div>

             </div>`

    })
}

UI()

//* Update Handler 

const handleUpdate = function(pName){

    formDiv.style.display = 'flex'
    let findPrdct = productArr.find((elem)=> elem.productName === pName)
    prouctIndex  = productArr.findIndex((elem) => elem.productName === pName)

    form[0].value = findPrdct.productName
    form[1].value = findPrdct.productDisc
    form[2].value = findPrdct.productPrice
    form[3].value = findPrdct.productImage

    // console.log(findPrdct) 
}


//* Delete Handler 
const handlDelete = function(index){


    console.log(index) 
    productArr.splice(index , 1)


    //* Handling LocalStorage 
    localStorage.setItem('products',JSON.stringify(productArr))
    UI() 

}



createBtn.addEventListener('click',function(){
 
    formDiv.style.display = 'block'

})

closeBtn.addEventListener('click',function(){

      formDiv.style.display = 'none'
})


form.addEventListener('submit',function(event){

    event.preventDefault();

    let productName = event.target[0].value;
    let productDisc = event.target[1].value;
    let productPrice = event.target[2].value;
    let productImage = event.target[3].value;


    if(productName.trim() === "" || 
     productDisc.trim() === "" || 
    productPrice.trim() === "" || 
    productImage.trim() === "" 
       ){
        alert`Please fill all the Inputs`
        return;
       }

    let productObj = {

        productName,
        productDisc,
        productPrice,
        productImage

    }


  if(prouctIndex !== null){

    productArr[prouctIndex] = productObj;

    //Updated product is reStored on Local Storage 
    localStorage.setItem('products' , JSON.stringify(productArr))
    prouctIndex = null;

  }else{

    productArr.push(productObj)
    localStorage.setItem('products' , JSON.stringify(productArr))
  }


    

      UI();
    // console.log(productArr)

    form.reset()
    formDiv.style.display = 'none'
    
})

