


let h1 = document.createElement('h1')
h1.textContent = 'Hello Bhai Mai Real Dom ka h1 hu'



console.log(React)

let rh1 = React.createElement(
    'h1' , 
    {class:'box'} , 
    React.createElement('span',{},'Hello Bhai Mai React ka h1 hu ')
)

console.log('Real dom ' ,h1)
console.log('virtual dom ' ,rh1)


let rootElemOfRealDom = document.querySelector('#root')

let realRootFromReactDom = ReactDOM.createRoot(rootElemOfRealDom)


// ab rh1 jo React ka Element hai ab RealDOM me dikhega matlab browser me 
let rendered = realRootFromReactDom.render(rh1)

/**
 *  Create this using React JS 
 *  <div>
          <h1>
            <span> is Render karo Tasks  </span>
          </h1>
       </div>
 */


let div = React.createElement( 
       'div',
       {},
        React.createElement(
            'h1',
            null,
            React.createElement('span',null,'is Render karo Tasks')
        )
)


realRootFromReactDom.render(div) 

import { ten  } from "./main.js"

console.log(ten);



