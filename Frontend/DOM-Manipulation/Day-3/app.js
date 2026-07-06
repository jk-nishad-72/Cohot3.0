
//*DOM MANIPULATION  IND DEEPER 

// attributes vs properties 
const maindiv = document.querySelector('main')

 let att = maindiv.getAttribute('class')

 maindiv.setAttribute('class' ,'main-box')

maindiv.removeAttribute('class')
console.log( maindiv.hasAttribute('style'));
console.log(maindiv);



//*creating , inserting and removal of element from DOM

/**
 * 1) creating 
 * creatElement('div)
 * 
 * 2) inserting 
 * *Old APIs 
 * -> appendChild()
 * ->insertBefore(newNOde , refereceNode)
 * ->removeChild()
 * 
 * *New APIs
 * ->append();
 * ->prepend()
 * ->after()
 * ->Before();
 * ->replaceWith(new)
 * ->replaceChild(new , child)
 */

let box1 = document.createElement('div')
let box2 = document.createElement('div')
let box3 = document.createElement('div')
let h1 = document.createElement('h1')
let h2 = document.createElement('h2')

h1.innerText = 'Hello Bhai'
h2.innerText = 'sheryians'



box1.appendChild(h1)
box1.style.backgroundColor = 'crimson'
box2.style.width ='200px'
box2.style.height ='200px'
box2.style.backgroundColor = 'yellow'

box3.style.width ='200px'
box3.style.height ='200px'
box3.style.backgroundColor = 'green'



console.log(box1 , h1);
maindiv.appendChild(box1)

maindiv.insertBefore(h2 , box1)

maindiv.removeChild(h2) 

//* new APIS 

box1.append(h1  , box2)

maindiv.prepend(h2)

box2.after(h1)
box2.before(h2)

box2.replaceWith(box3)

box1.replaceChild(box2 , box3) 

















