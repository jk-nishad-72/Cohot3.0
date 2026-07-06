

/**
 ** Bird ko niche girna chahiye
 ** document me kahi bhi key press  ho to bird ko jump karana
 ** pipes create karne hai 

 ** every second  new pipe create karenge our ko append kardenge and uska position x ko change karte jayege
 */

const birdImage = document.querySelector('.birdImage')

const game = document.querySelector('.game')
const startBtn = document.querySelector('button')




function startGame(){

   
let birdTop = 200;

let gravity = 2;

setInterval(()=>{


     
    birdTop += gravity;
    birdImage.style.top = birdTop +'px'

},20) 

 document.addEventListener('keydown',(e)=>{

    if(e.code === 'Space'){

     birdTop -= 30;
          
         
    }
 })

}

let start = 0;
startBtn.addEventListener('click',()=>{

   if(start === 0){
   startGame()
   start = 1
   }
   else{
      start = 0
   }
})

 function createPipe(){

    const pipeTop = document.createElement('div')
    const pipeBottom = document.createElement('div')

    pipeTop.className = 'pipe'
    pipeBottom.className = 'pipe'


    let gap = 100;

    let gameHeight = game.clientHeight
    let maxHeight = gameHeight - gap - 50;


    let topHeight = Math.random() * maxHeight + 50; 
    let bottmHeight = maxHeight - topHeight - gap; 

    // console.log(topHeight , bottmHeight);

    pipeTop.style.height = topHeight +'px'
    pipeBottom.style.height = bottmHeight +'px'


    pipeTop.style.top = 0;
    pipeBottom.style.bottom = 0;

    game.append(pipeTop , pipeBottom)


    let pipeLeft = game.clientWidth;

    pipeTop.style.left =  pipeLeft+'px'
    pipeBottom.style.left = pipeLeft +'px'

    
    let move = setInterval(()=>{
   
    pipeLeft -= 2;

    pipeTop.style.left =  pipeLeft+'px'
    pipeBottom.style.left =  pipeLeft+'px'



    let birdRect = birdImage.getBoundingClientRect();

    console.log(birdRect);
    
    if(pipeLeft < - 50){

         pipeTop.remove();
         pipeBottom.remove();
         clearInterval(move)
    }

    },20)


    
 
 }

//  setInterval(createPipe ,3000) 
