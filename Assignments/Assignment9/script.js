// localStorage.clear()


//* page Open And Close Functionality

const pageOpenAndCloseFunctionality = function(){

    
const alllElementSection = document.querySelector('.allElems')

const  fullElementOFFeaturBox  = document.querySelectorAll('.fullElem')

const featureBox  = document.querySelectorAll('.feature')

const backBtn = document.querySelectorAll('.back')

const allFeatursVideo = document.querySelectorAll('.feature video')

const h3Tag = document.querySelectorAll('.feature h3')




featureBox.forEach((elem)=>{

    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
        fullElementOFFeaturBox[elem.id].style.display = 'flex';
    })
    

    
elem.addEventListener('mouseenter',()=>{
    // console.log(allFeatursVideo[elem.id]);
    allFeatursVideo[elem.id].style.display = 'flex'
    h3Tag[elem.id].style.display = 'flex'
})

elem.addEventListener('mouseleave',()=>{
    // console.log(allFeatursVideo[elem.id]);
    allFeatursVideo[elem.id].style.display = 'none'
     h3Tag[elem.id].style.display = 'none'
})


})



backBtn.forEach((elem)=>{

    
    elem.addEventListener('click',()=>{

        //  console.log(fullElementOFFeaturBox[elem.id]);
    
        fullElementOFFeaturBox[elem.id].style.display = 'none';

    })
    

})

}

pageOpenAndCloseFunctionality()

/*
 *weather and date time 
 
Is task ko 3 parts mein todo
Part 1: User ka location (lat/lon) nikaalna
Part 2: Lat/lon se City name nikaalna
Part 3: Lat/lon se Weather nikaalna

 */

const weatherAndDateTimeFunctionality = function(){

//*Elements selection 

//Date and time elements

const dateTag = document.querySelector('.DateAndTime .date')
const dayTag = document.querySelector('.DateAndTime .day')
const timeTag = document.querySelector('.DateAndTime .time')
const cityTag = document.querySelector('.DateAndTime .city')

//weather elements
const tempTag = document.querySelector('.temp')
const weatherCodeTag = document.querySelector('.weatherCode')
const windDirectionTag = document.querySelector('.windDirection')
const windSpeedTag = document.querySelector('.windSpeed')



let langtitude = 0;
let logtitude = 0;


navigator.geolocation.getCurrentPosition(
(position)=>{

    //Part 1: User ka location (lat/lon) nikaalna
   langtitude = position.coords.latitude;
   logtitude = position.coords.longitude;

     getLocation(langtitude , logtitude);
     getWeatherByLocation(langtitude , logtitude)
     
},
(error)=>{

    alert('Location access denied ❌')
}
)

// *Part 2: Lat/lon se City name nikaalna
async function getLocation(lat, lon) {


    // console.log(lat , lon);

  

    const resOfApi = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
   
    const jsonData = await resOfApi.json();


    // state and country code 

    // console.log(jsonData.address.state , jsonData.address.country_code);

    const city = jsonData.address.state
    const countryCode =  jsonData.address.country_code;
    // console.log(city , countryCode);

    
    cityTag.innerHTML = `${city} <span>(${countryCode}) </span>`

}

//* Part 3: Lat/lon se Weather nikaalna
async function getWeatherByLocation(lat , lon ) {

          

              const resOfApi =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)

              const data =  await resOfApi.json()

        
    //   console.log( tempTag ,weatherCodeTag  , windDirectionTag , windSpeedTag);
    //   console.log(data.current_weather , data.current_weather_units);
            
      tempTag.textContent = ` ${data.current_weather.temperature} ${data.current_weather_units.temperature} `
      weatherCodeTag.textContent = `weather Code: ${data.current_weather.weathercode}  ${data.current_weather_units.weathercode}  `
      windDirectionTag.textContent = `wind Direction: ${data.current_weather.winddirection}  ${data.current_weather_units.winddirection}  `
      windSpeedTag.textContent = `wind Speed: ${data.current_weather.windspeed}  ${data.current_weather_units.windspeed}  `
}


// *Date & Time 

const dateAndTimeFun = function(){

     const allDaysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

     const allMonthOfYear = [ "January", "February", "March", "April", "May", "June",
                             "July", "August", "September", "October", "November", "December" ];


    let today = new Date()

    let second = today.getSeconds();
    let minute = today.getMinutes();
    let hour = today.getHours() ;

    let dayOfWeek = today.getDay()
    let monthOfYeer = today.getMonth() 

    let year = today.getFullYear()
    let tarikh = today.getDate()  
      
    let timePeriod = 'AM'

    if(hour > 12 ){
        hour = hour - 12 
        timePeriod = 'PM'
    }


   dateTag.textContent = `${tarikh} ${allMonthOfYear[monthOfYeer]} ${year}`
   dayTag.textContent = ` ${allDaysOfWeek[dayOfWeek]}, ${String(hour).padStart('2','0')}:${String(minute).padStart('2','0')}:${String(second).padStart('2','0')} `
   timeTag.textContent = ` ${timePeriod}`
    

}

setInterval(()=>{
dateAndTimeFun();
},1000)



}


weatherAndDateTimeFunctionality()



//* Todo Functionality 



let currentTaskArray = JSON.parse(localStorage.getItem('currentTaskArray')) || [];

const taskForm = document.querySelector('.addTask')
const taskTitleInp = document.querySelector('#taskTitle')
const taskDescInp = document.querySelector('#taskDescr')
const taskImpInp = document.querySelector('#imp')



taskForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    if(taskDescInp.value.trim() === '' || taskTitleInp.value.trim() === ''){
        alert('Please Enter valid Data')
        return
    }

    currentTaskArray.push({
        title:taskTitleInp.value,
        desciption:taskDescInp.value ,
        imp:taskImpInp.checked,

    })
    
     localStorage.setItem('currentTaskArray',JSON.stringify(currentTaskArray))
    renderTaskFun();
    taskForm.reset();


})


const renderTaskFun = function(){


    const todoLitstContainer = document.querySelector('.todo-list-container')


     todoLitstContainer.innerHTML = ''

    currentTaskArray.forEach((task ,idx)=>{

         
       todoLitstContainer.innerHTML += `<div class="task-box">

                         <h1 class="title" > 
                            ${task.title}

                             <sup class="important ${task.imp}"  > 
    
                            <i class="ri-star-half-s-fill"></i> </sup> </h1>

                         <p class="description">  ${task.desciption} </p>

                         <button id=${idx} onclick  = "{taskDone(${idx})}" class="completed" > Marks as Completed  </button>

                    </div> `
    })



}

const  taskDone = function(index){

    currentTaskArray.splice(index,1)

    localStorage.setItem('currentTaskArray',JSON.stringify(currentTaskArray))

    renderTaskFun();
        
 }


renderTaskFun();


//* Daily Planner


const dayPlannerFun = function(){

// One Day All  Planning 

let oneDayAllPlanData = JSON.parse(localStorage.getItem('oneDayAllPlanData')) || {};

const dayPlanner = document.querySelector('.day-planner')



let hours = Array.from(
  { length: 18 },
  (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
);


let puraDinKaTime = '';

hours.forEach((elem , index)=>{
    let previousSavedData = oneDayAllPlanData[index] || ''
   puraDinKaTime  += ` <div class="day-time">
                            <p> ${elem}  </p>
                            <input  id=${index} type="text" placeholder="Planning...." value= ${previousSavedData}  >
                        </div> `
    
})



dayPlanner.innerHTML += puraDinKaTime;

const dayAllPlannInputs = document.querySelectorAll('.day-time input')

// console.log(dayAllPlannInputs);

dayAllPlannInputs.forEach((input , index)=>{

 //Event listenner to every input 
    input.addEventListener('input',(e)=>{
       oneDayAllPlanData[index] = input.value;

    //    console.log(oneDayAllPlanData);
    localStorage.setItem('oneDayAllPlanData' , JSON.stringify(oneDayAllPlanData))
    })
})



}


dayPlannerFun();


//* Motivational Qoutes Functionality 

const newQuoteFetchBtn = document.querySelector('.newQuote')

newQuoteFetchBtn.addEventListener('click',()=>{
    motivationFun();
})


async function motivationFun(params) {


const quoteh1 = document.querySelector('.quote h1')
const autherh3 = document.querySelector('.auther h3')

// console.log(quoteh1 , autherh3);
    
try{

  const response = await fetch("https://dummyjson.com/quotes/random") 
  const data = await response.json();
 

  let quote = data.quote ;
  let author = data.author ;
//   console.log(quote, "-", author);

 quoteh1.textContent = `${quote}`
 autherh3.textContent = ` ${author} `

   }catch(error){
          console.log('Error',error);
   }
}


motivationFun();



//* Pomodoro container 



(function pomodorFunctionality(){
    
const sessionElement = document.querySelector('.session-tag h3')

const timerElement = document.querySelector('.session-box h1')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')


let isWorkSession = true;
let timerInterval ;
let totalSeconds = 25 * 60;

const updateTimer = ()=>{

     let minute = Math.floor( totalSeconds / 60 )
     let seconds  = ( totalSeconds % 60 )


     timerElement.textContent = ` ${String(minute).padStart(2,'0')}:${String(seconds).padStart(2,'0')} `
     
}


const startTimerFun = ()=>{


    clearInterval(timerInterval)

    if(isWorkSession){

        timerInterval = setInterval(function(){

             if(totalSeconds > 0){
                totalSeconds--;
                updateTimer()

             } 
             else{

                 
                 swtichSessionAndTimer();
             }

        },1000)
    }


}

const swtichSessionAndTimer = ()=>{
     isWorkSession =  !isWorkSession
     totalSeconds = isWorkSession ? 25 * 60 : 5 * 60;

     sessionElement.textContent = isWorkSession ? " Work Session ":" Take a Break"
     sessionElement.style.backgroundColor = isWorkSession ? "var(--green)":"var(--blue)";
     sessionElement.style.boxShadow = isWorkSession? "var(--greenBoxShado)":"var(--blueBoxShado)"

}
const pauseTimerFun = ()=>{
     clearInterval(timerInterval)
}

startBtn.addEventListener('click', ()=> startTimerFun() )
pauseBtn.addEventListener('click',pauseTimerFun)

resetBtn.addEventListener('click',()=>{

    clearInterval(timerInterval)
    isWorkSession = true;
    totalSeconds = 25 * 60;
    sessionElement.textContent = " Work Sesstion "
    sessionElement.style.backgroundColor = "var(--green)"
    sessionElement.style.boxShadow = "var(--greenBoxShado)"
    updateTimer();
})

})();








