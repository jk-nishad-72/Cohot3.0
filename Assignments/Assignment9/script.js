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


//*  Date & Time 

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
      
    let timePeriod = hour >= 12 ? 'PM' : 'AM';

    if(hour === 0 ){
        hour =  12 
    }
    else if(hour >12) hour -= 12;


  dynamicBackgroundFun(hour , timePeriod)

   dateTag.textContent = `${tarikh} ${allMonthOfYear[monthOfYeer]} ${year}`
   dayTag.textContent = ` ${allDaysOfWeek[dayOfWeek]}, ${String(hour).padStart('2','0')}:${String(minute).padStart('2','0')}:${String(second).padStart('2','0')} `
   timeTag.textContent = ` ${timePeriod}`
    

}

setInterval(()=>{
dateAndTimeFun();
},1000)

}


weatherAndDateTimeFunctionality()

//* Dynamic Background 
/**
Morning: 5:00 AM – 12:00 PM
Afternoon: 12:00 PM – 5:00 PM
Evening: 5:00 PM – 9:00 PM
Night: 9:00 PM – 4:00 AM
 */

let backGroundVideo = {

     morning:'./video/day-vid.mp4',
     afternoon:'./video/afternoon.mp4',
     evening:'./video/137009-765458037_medium.mp4',
     night:'./video/night-vid.mp4'

}


const videoElement = document.querySelector('.bg-vid')
let currentTimePeriod = null;

const dynamicBackgroundFun = function(time , period){

  let key ;

       if(time >= 5  && time < 12  && period === 'AM' ){

        key = 'morning'
        
       }
       else if((time >= 12 &&  period === 'PM') || (time < 5 && period ==='PM') ){

      key = 'afternoon'
        
       }
       else if(time >= 5   && time < 9 && period ==='PM' ){

        
        key = 'evening'
       }
       else if(time >= 9 && ( period === 'PM' || period ==='AM') ||  (time < 5 && period === 'AM') ){
         key = 'night'
       }
   
   
       if(key && key !== currentTimePeriod){

          currentTimePeriod = key;

          videoElement.setAttribute('src',backGroundVideo[key])

       }
    
}




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

const taskDone = function(index){

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



//* Daily Goals 

const currentGoalsArray =  JSON.parse(localStorage.getItem('currentGoalsArray'))  || [

    {
        goalTtile:'React Developer ',
        goalDescr:'Be master in react js in 30 day',
        isCompleted:false,
    },
]

const addGoalForm = document.querySelector('.addGoalForm')

const goalTitleInput = document.querySelector('#goalTitle')
const goalDescrInput = document.querySelector('#goalDescr')
const addGoalBtnInput = document.querySelector('#addGoalBtn')





addGoalForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    currentGoalsArray.push({

       goalTtile:goalTitleInput.value,
       goalDescr:goalDescrInput.value,
       isCompleted:false,

    })
    

    localStorage.setItem('currentGoalsArray' , JSON.stringify(currentGoalsArray))
    addGoalForm.reset();
    renderGoalFun();
    goalTrackerFun();
     
})

const goalListContainer = document.querySelector('.goal-list-container')



const renderGoalFun = ()=>{

goalListContainer.innerHTML = ''

currentGoalsArray.forEach((goal, index )=>{

goalListContainer.innerHTML += `<div class="goal-box">

                                <h1 class="title" > 
                                     ${goal.goalTtile} 
                                </h1>
                                <img  class="goal-achieved    ${goal.isCompleted}  " src="./images/check.png" alt="">
                                <p class="description">   ${goal.goalDescr}  </p>
                                <button  onclick="handleGoalCompleted( ${index} )"  class="completedBtn" >  <i class="ri-check-line"></i>  </button>
                                <button  onclick="handleDeleteGoal( ${index} )" class="deletGoalBtn" > <i class="ri-delete-bin-2-line"></i> </button>

                            </div>  
`
})
}


const handleGoalCompleted = (index)=>{ 
 currentGoalsArray[index].isCompleted = true;
 localStorage.setItem('currentGoalsArray' , JSON.stringify(currentGoalsArray))

 renderGoalFun();
 goalTrackerFun();
}


const handleDeleteGoal = (index)=>{

   currentGoalsArray.splice(index,1)
   localStorage.setItem('currentGoalsArray' , JSON.stringify(currentGoalsArray))
   renderGoalFun()
   goalTrackerFun()

}


renderGoalFun()


//* Goal Tracker 


const goalTrackerFun = ()=>{

    
const totalGoal = currentGoalsArray.length;

const completedGoal  = currentGoalsArray.filter( (elem)=> elem.isCompleted === true).length;

const percentage =  Math.floor((completedGoal / totalGoal) * 100);

const progressFillerElement = document.querySelector('.progress-filler')

const goalCountElement = document.querySelector('.goal-count')


 progressFillerElement.style.width = percentage + '%';

 goalCountElement.textContent = ` ${completedGoal} / ${totalGoal}`



}



goalTrackerFun();


// *theme feature 

const darkBtn = document.querySelector('.dark')
const lightBtn = document.querySelector(".light")
const rootElement = document.documentElement;
const goalsTrackerInfo = document.querySelector('.goals-tracker .info')




/**
 *  
 * 
 */


darkBtn.addEventListener('click',()=>{

     lightBtn.style.display = 'flex'
     darkBtn.style.display = 'none'
 

    rootElement.style.setProperty('--pri','#EF88AD')
    rootElement.style.setProperty('--sec','#3A0519')
    rootElement.style.setProperty('--tri1','#670D2F')
    rootElement.style.setProperty('--tri2','#A53860')
    rootElement.style.setProperty('--motiBoxShado',"0 0 40px 10px rgba(212, 103, 189, 0.588), inset 0 0 60px rgba(0, 0, 0, 0.4)")
    rootElement.style.setProperty('--greenBoxShado' ,"0 0 40px 10px rgba(60, 241, 63, 0.598)");
    rootElement.style.setProperty('  --blueBoxShado' , '0 0 40px 10px rgba(101, 203, 219, 0.598)')
    goalsTrackerInfo.style.color = 'var(--white)'

    
})


lightBtn.addEventListener('click',()=>{

    darkBtn.style.display = 'flex'
    lightBtn.style.display = 'none'

    
    rootElement.style.setProperty('--pri','#F2EFE5')
    rootElement.style.setProperty('--sec','#B4B4B8')
    rootElement.style.setProperty('--tri1','#C7C8CC')
    rootElement.style.setProperty('--tri2','#E3E1D9')
    rootElement.style.setProperty('--motiBoxShado',"0 0 40px 10px rgba(155, 146, 153, 0.553) , inset 0 0 60px rgba(234, 228, 228, 0.371) ")
    rootElement.style.setProperty('--greenBoxShado','0 0 40px 10px rgba(75, 111, 75, 0.534)')
    rootElement.style.setProperty('--blueBoxShado','0 0 40px 10px rgba(117, 143, 147, 0.598)')
    goalsTrackerInfo.style.color = 'var(--black)'
    
})





