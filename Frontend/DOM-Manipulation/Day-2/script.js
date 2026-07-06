


let bulb = document.querySelector('.bulb')


let btn = document.querySelector('.btn')
let flag = true;

btn.addEventListener('click',function(){

    if(flag){
        bulb.style.backgroundColor = 'yellow'
        btn.textContent = 'Off'
        flag = false

    }else{
         bulb.style.backgroundColor = 'white'
         btn.textContent = 'On'
         flag = true
    }
  
})
