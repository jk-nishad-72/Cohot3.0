


const box = document.querySelector('.box')

const btn = document.querySelector('button')

// const child = document.querySelector('.child')

const time = document.querySelector('.time')


const child = document.createElement('div')

let scoree = document.querySelector('.score')

let overlay = document.querySelector('.overlay')

let yourScore = document.querySelector('.yr-score')

let clickAllowed = true;



child.classList.add('child')

function rederBox(){

   child.style.backgroundColor = randomColor();
    clickAllowed = true
    box.append(child);
       
let boxH = box.clientHeight - child.offsetHeight;
let boxW = box.clientWidth - child.offsetWidth;
    const pY = Math.floor(Math.random()*boxH)
    const pX = Math.floor(Math.random()*boxW)
    child.style.top = `${pY}px`
    child.style.left = `${pX}px`
}

function randomColor(){

   
let r = Math.floor(Math.random() * 255)
let g = Math.floor(Math.random() * 255)
let b = Math.floor(Math.random() * 255)

// console.log(r , g , b);

return `rgb(${r} , ${g} , ${b})`

}

let interval;
let timeOUt;
let times = 0;
let score = 0;



btn.addEventListener('click',function(){
 

 clickAllowed = true
  clearInterval(interval)
  clearTimeout(timeOUt) 

  times = 0
  score = 0;

interval = setInterval(() => {
    rederBox();
    times += 1;
    time.textContent =times;
 
}, 1200);

timeOUt = setTimeout(() => {
    clearInterval(interval) 
    overlay.style.display = 'flex'
    yourScore.textContent = `${score}` 
}, 12000);

setTimeout(()=>{
    btn.style.display = 'none' 
},3000)
 
})


child.addEventListener('click',function(){ 
   
    if(clickAllowed){
    score += 1;
    scoree.textContent = score;
    clickAllowed = false
    }
})

overlay.addEventListener('click',function(){

    overlay.style.display = 'none'
    score = 0;
    scoree.textContent = 0;
    time.textContent = 0;
    btn.style.display = 'block'
    child.remove();
})


