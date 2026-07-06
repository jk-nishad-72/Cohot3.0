

//* JS code


// * Fetch User 

let loggedUser = JSON.parse(localStorage.getItem('loggedUser')) || false

//* Authenctication check 
if (!loggedUser) {
    window.location.href = 'login.html'
}

//* Globely Acces variables 

let uName = loggedUser.name.toUpperCase()
let uCurrency = loggedUser.uCurrency
let uCurrentBal = loggedUser.uCurrentBal;
let transactionArray = loggedUser.uTransactions || []


//edit
let editTransactionIndex = null;

//chart 
const chartBox = document.querySelector('#chartBox') 


//* Dash Board Variables 

/*Render 
 *Current Balence  curBalence
 *Total Income     totalIncome
 *Total Expense    totalExpense
 *Total Transactions   totalTransaction
 * 
 * */

const curBalenceTag = document.querySelector('#curBalence  h2')
const totalIncomeTag = document.querySelector('#totalIncome h2')
const totalExpenseTag = document.querySelector('#totalExpense h2')
const totalTransactionTag = document.querySelector('#totalTransaction h2')




//All Transaction Container
const allTransactionContainer = document.querySelector('.allTransactionContainer')


//Add Transactions Inputs Tags Global Defines variables 


// Button  and Form, 

const addTrasactinBtn = document.querySelector('#addTrasactin')
const transactioInputBox = document.querySelector('.transactioInputBox')
const crossBtn = document.querySelector('.crossBtn')
const transactionForm = document.querySelector('.transactioInputBox form')

//Inuput
const typeInp = document.querySelector('#typeOfTransction')
const descInp = document.querySelector('#descInp')
const amountInp = document.querySelector('#amountInp')
const dateInp = document.querySelector('#dateInp')
const categaroyInp = document.querySelector('#categaroyInp')



// Setting Board Input Tags 
const updateNameInp = document.querySelector('.uName #name')
const updateCurrencyInp = document.querySelector('.uCurrency #currency')



//* Logout Function 

const logoutFuction = function () {
    const logOutBtn = document.querySelector('#logOutBtn')
    logOutBtn.addEventListener('click', () => {
        let res = confirm("Are You Want to Log out ")
        if (res) {
            localStorage.removeItem('loggedUser')
            window.location.href = 'login.html'

        }
        return
    })
}

//* dashboard and settings

const dashBoardAndSettingOpenFunction = function () {

    const dashBtn = document.querySelector('#dashBtn')
    const setBtn = document.querySelector('#setBtn')
    const dashboard = document.querySelector('.dashboard')
    const setting = document.querySelector('.setting')

    dashBtn.addEventListener('click', () => {

        setting.style.display = 'none'
        setBtn.style.background = 'none'
        setBtn.style.color = 'var(--black)'


        dashboard.style.display = 'flex'
        dashBtn.style.background = 'var(--lightBlue)'
        dashBtn.style.color = 'var(--darkBlue)'

    })


    setBtn.addEventListener('click', () => {

        dashboard.style.display = 'none'
        dashBtn.style.background = 'none'
        dashBtn.style.color = 'var(--black)'

        setting.style.display = 'flex'
        setBtn.style.background = 'var(--lightBlue)'
        setBtn.style.color = 'var(--darkBlue)'

    })

}

//* Setting Board 

//Save Changes  Fuction 
const saveChagesFunction = function () {


    const saveChangeBtn = document.querySelector('#saveChangeBtn')
    const saveForm = document.querySelector('.setting form')
    
    saveForm.addEventListener('submit', (e) => {

        e.preventDefault()

        loggedUser.name = updateNameInp.value
        loggedUser.uCurrency = updateCurrencyInp.value

        localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

        showProfile()
        location.reload();

    })


    return ''
}

//Show User Name &  Profile 

const showProfile = function () {

    const nameTage = document.querySelector('.right h3')

    nameTage.textContent = `${uName}`;

    updateNameInp.value = uName.toLowerCase();

    updateCurrencyInp.value = uCurrency

}

//* Dash Board 

// Render Balenc Income Expense TotalTransactions 


const renderUI = function(tType, amount = 0) {

    let totalTransaction = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    let balance = 0;


 totalTransaction = transactionArray.length;

transactionArray.forEach(obj => {
    if (obj.type === 'Income') balance += obj.amount;
    else balance -= obj.amount;
});

loggedUser.uCurrentBal = balance;

    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

    transactionArray.forEach(obj => {
        if (obj.type === 'Income') {
            totalIncome += obj.amount;
        } else if (obj.type === 'Expense') {
            totalExpense += obj.amount;
        }

    })

    curBalenceTag.innerHTML = `${loggedUser.uCurrentBal}.00 ${uCurrency}`
    totalTransactionTag.textContent = `${totalTransaction}`
    totalIncomeTag.textContent = `${totalIncome}.00  ${uCurrency}`
    totalExpenseTag.textContent = `${totalExpense}.00 ${uCurrency}`

    
    chartRenderUi(totalIncome ,totalExpense) 
    renderTransactionFunction(transactionArray)

}


// Chart Render Funtion
 let newChart =   new Chart(chartBox, {

        type: 'bar',

        data: {
            labels: ['Income vs Expense'],  //x 

            datasets: [
                {
                    label: 'Icome',
                    data: [0], //y

                    backgroundColor: '#026d2b',
                    borderRadius: '5'

                },

                {
                    label: 'Expense',
                    data: [0], //y

                    backgroundColor: '#a20000',
                    borderRadius: '5'

                },


            ],
        },

        options: {

            responsive: true,

            plugins: {
                legend: {
                    position: 'top'
                }
            },

            scales: {
                y: {
                    beginAtZero: true
                }
            },
        },
    })


// console.log( newChart.data.datasets[0].data[0] ,newChart.data.datasets[1].data[0]);
    

function chartRenderUi(totalIncome , totalExpense) {

    // console.log(totalIncome , totalExpense);
    
   newChart.data.datasets[0].data[0] = totalIncome 
   newChart.data.datasets[1].data[0] = totalExpense 

}

// Theme  Function 

const themeFunction = function () {


    const lightBtn = document.querySelector('.light')
    const darkBtn = document.querySelector('.dark')
    const mode = document.querySelector('.mode')
    const logoImg = document.querySelector('.logo')
    let rootElement = document.documentElement;
    let themeFlag = (localStorage.getItem('themeFlag')) || 'light'


    function lightToDarkThemeFuntion() {


        darkBtn.style.display = 'none'
        lightBtn.style.right = "0%"
        lightBtn.style.left = null;

        lightBtn.style.display = 'flex'
        mode.style.backgroundColor = 'var(--darkBlue)'

        logoImg.style.filter = 'invert(1)'
        rootElement.style.setProperty('--pri', '#111827')
        rootElement.style.setProperty('--white', '#1f2937')
        rootElement.style.setProperty('--black', '#fff')
        rootElement.style.setProperty('--border', '#374151')
        rootElement.style.setProperty('--darkBlue', '#3b82f6')

        addTrasactinBtn.style.backgroundColor = 'var(--darkBlue)'
        addTrasactinBtn.style.color = 'var(--black)'
        saveChangeBtn.style.backgroundColor = 'var(--darkBlue)'
        saveChangeBtn.style.color = 'var(--black)'

    }

    function DarkTolightThemeFuntion() {

        lightBtn.style.display = 'none'
        darkBtn.style.display = 'flex'
        mode.style.backgroundColor = 'var(--lightBlue)'

        logoImg.style.filter = 'invert(0)'
        rootElement.style.setProperty('--pri', '#f8f9fb')
        rootElement.style.setProperty('--white', '#fff')
        rootElement.style.setProperty('--black', '#000')
        rootElement.style.setProperty('--border', '#e5e7eb')
        rootElement.style.setProperty('--darkBlue', '#1e40af')


        addTrasactinBtn.style.backgroundColor = 'var(--black)'
        addTrasactinBtn.style.color = 'var(--white)'

        saveChangeBtn.style.backgroundColor = 'var(--black)'
        saveChangeBtn.style.color = 'var(--white)'

        localStorage.setItem('themeFlag', 'light')
    }


    if (themeFlag === 'light') {
        DarkTolightThemeFuntion()

    } else if (themeFlag === 'dark') {
        lightToDarkThemeFuntion()
    }


    darkBtn.addEventListener('click', () => {

        localStorage.setItem('themeFlag', 'dark')
        lightToDarkThemeFuntion()
    })

    lightBtn.addEventListener('click', () => {
        localStorage.setItem('themeFlag', 'light')
        DarkTolightThemeFuntion()
    })

}

// Reset All Data Function

const resetFunction = function () {

    const resetBtn = document.querySelector('#resetBtn')

    resetBtn.addEventListener('click', () => {

    let res = confirm("WARNING this will Delete ❌ all Transaction Data")

        if (res) {

            loggedUser.uTransactions = [];
            loggedUser.uCurrentBal = 0;
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
            location.reload();
            return
        }
    })
}


//* Render All Transactions  Function  

const renderTransactionFunction = function (array) {

    allTransactionContainer.innerHTML = ''

    array.map((obj, index) => {

        allTransactionContainer.innerHTML += `<div class="record">

                                <h5 class="r-date" > ${obj.date} </h5>

                                <h5> ${obj.description} </h5>
                                <h5 class="r-category" >${obj.category} </h5>
                                <h5 class="${obj.type}"> ${uCurrency} ${obj.amount} </h5>
                                    
                                <h5 class="r-icons"> 
                                    <i onclick="editHandle(${index})" class="ri-pencil-fill edit"></i>
                                    <i onclick="deleteHandle(${index})" class="ri-delete-bin-6-line delete"></i>
                                </h5>
                            </div>        `
    })
}


//* Eding Transaction Handle Function 


const editHandle = function (index) {

    editTransactionIndex = index
    let editTransactionObj = transactionArray[index]

    typeInp.value = editTransactionObj.type
    amountInp.value = editTransactionObj.amount
    descInp.value = editTransactionObj.description
    dateInp.value = editTransactionObj.date
    categaroyInp.value = editTransactionObj.category  
    transactioInputBox.style.display = 'flex'
}

// * Delet Transaction Handle Function 

const deleteHandle = function (index) {

    if (!confirm`Are you sure to delete thi Transcation`) return

    let deleteObj = transactionArray[index]

    if ((deleteObj.type === 'Income')) {
        loggedUser.uCurrentBal -= deleteObj.amount

    } else if (deleteObj.type === 'Expense') {

        loggedUser.uCurrentBal += deleteObj.amount
    }



    //*deleting transaction 

    transactionArray.splice(index, 1)

    loggedUser.uTransactions = transactionArray


    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

    renderTransactionFunction(transactionArray)

    location.reload()
}



//* Add Transaction Board  

const addTransactionBoardFunction = function(){
    
addTrasactinBtn.addEventListener('click', () => {
    transactioInputBox.style.display = 'flex'
    dateInp.value = null;
    

})

crossBtn.addEventListener('click', () => {
    transactioInputBox.style.display = 'none'
})

//* Add Transaction Event handler 


transactionForm.addEventListener('submit', (e) => {

    e.preventDefault() 
    transactioInputBox.style.display = 'none'
    let type = typeInp.value
    let description = descInp.value
    let amount = Number(amountInp.value)
    let date = dateInp.value
    let category = categaroyInp.value


    if (editTransactionIndex != null) {

        transactionArray[editTransactionIndex].type = type;
        transactionArray[editTransactionIndex].description = description;
        transactionArray[editTransactionIndex].amount = amount;
        transactionArray[editTransactionIndex].date = date;
        transactionArray[editTransactionIndex].category = category;

        localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
        transactionForm.reset()

        location.reload();

        renderUI(type , amount)

    } else {

        let newtransction = {
            type,
            description,
            amount,
            date,
            category
        }

        transactionArray.push(newtransction)

        loggedUser.uTransactions = transactionArray

        localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

        transactionForm.reset()

        location.reload();

        renderUI(type, amount);

    }
}) 


}

//* Search and Filter 

const searchAndFilterFuction = function(){
        
    const searchInp = document.querySelector('#searchInp')
    const filterInp = document.querySelector('#filterInp')

    searchInp.addEventListener('input', function () {
        let searchArray = transactionArray.filter((obj) => {

            return ((obj.description).toLowerCase().includes(searchInp.value))
        })

        renderTransactionFunction(searchArray)
    })


    filterInp.addEventListener('input', function () {

        let filterArray = transactionArray.filter((obj) => obj.type === filterInp.value)

        if (filterArray.length === 0) {
            renderTransactionFunction(transactionArray)
        }
        else renderTransactionFunction(filterArray)

    })


}


//*sidebar and menu Open in Mobile and desktop view 


const menuAndSideBarOpenFunction = function(){
 
    
const sidebar = document.querySelector('.sidebar')

const menuIcon = document.querySelector('.mainContent nav .menuIcon i')

const closeSidebar = document.querySelector('.sec-1 .sidebar  i')


menuIcon.addEventListener('click',()=>{
       sidebar.style.display = 'flex'
})
closeSidebar.addEventListener('click',()=>{
       sidebar.style.display = 'none'
})


}

menuAndSideBarOpenFunction()

showProfile()

logoutFuction()

dashBoardAndSettingOpenFunction() 

saveChagesFunction()

renderTransactionFunction(transactionArray)

renderUI()

addTransactionBoardFunction()

// chartRenderUi(0,0)

themeFunction()

resetFunction()

searchAndFilterFuction()

