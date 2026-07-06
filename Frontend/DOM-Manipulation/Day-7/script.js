


let data = [ 
    {
        name:'jk',
        age:null,

    } ,{
        name:'mk',
        age:null,

    } ,{
        name:'ck',
        age:null,

    } ,{
        name:'dk',
        age:null,

    },
]


localStorage.setItem('users' ,JSON.stringify(data))

const lsd = JSON.parse(localStorage.getItem('users'))

console.log(lsd);
