
# ⚛️ React Basics (Without JSX / Core Understanding)

---

## 🧠 React Introduction

* Developed by Facebook (Meta)
* Released in 2013
* Used to build **fast and dynamic user interfaces**
* Works on **Virtual DOM concept**

---

## ⚡ SPA vs MPA

### 🔹 SPA (Single Page Application)

* Only specific parts update (re-render)
* Faster performance
* Smooth user experience

### 🔹 MPA (Multi Page Application)

* Entire page reloads on update
* Slower compared to SPA

---

## 🌳 Real DOM vs Virtual DOM

| Feature | Real DOM    | Virtual DOM    |
| ------- | ----------- | -------------- |
| Speed   | Slow        | Fast           |
| Update  | Full reload | Partial update |
| Nature  | Browser DOM | JS Object      |

---

## 🧩 Real DOM Example

```js
let h1 = document.createElement('h1')
h1.textContent = 'Hello Bhai Mai Real Dom ka h1 hu'
```

### 🔍 Explanation:

* `createElement()` → creates element
* `textContent` → inserts text

---

## ⚛️ React Element (Virtual DOM)

```js
let rh1 = React.createElement(
    'h1',
    { class: 'box' },
    React.createElement('span', {}, 'Hello Bhai Mai React ka h1 hu')
)
```

### 🔍 Syntax:

```
React.createElement(type, props, children)
```

### 🔍 Explanation:

* `type` → HTML tag
* `props` → attributes
* `children` → nested content

---

## 🔗 Rendering to Real DOM

```js
let rootElem = document.querySelector('#root')

let root = ReactDOM.createRoot(rootElem)

root.render(rh1)
```

### 🔍 Explanation:

* `createRoot()` → connects React with DOM
* `render()` → displays Virtual DOM in browser

---

## 🏗️ Nested Structure (Without JSX)

### 🎯 Target HTML:

```html
<div>
  <h1>
    <span>is Render karo Tasks</span>
  </h1>
</div>
```

### ⚛️ React Code:

```js
let div = React.createElement(
  'div',
  {},
  React.createElement(
    'h1',
    null,
    React.createElement('span', null, 'is Render karo Tasks')
  )
)

root.render(div)
```

---

## 📦 ES Modules (Import / Export)

### 🔹 Export

```js
export const ten = 10
```

### 🔹 Import

```js
import { ten } from "./main.js"

console.log(ten)
```

### 🔍 Concept:

* `export` → share data
* `import` → use in another file

---

# 🧪 Practice Questions

## 🟢 Easy

* What is Virtual DOM?
* Difference between SPA & MPA?
* Syntax of `React.createElement()`?

---

## 🟡 Medium

* Create `<p>Hello React</p>` using React.createElement()
* Why React is faster than DOM?
* Difference between `textContent` & `innerHTML`?

---

## 🔴 Hard

* Create:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

* Explain React rendering process
* What happens when `render()` is called?

---

# 🚀 Practice Project

## 📌 Mini Task Renderer (Without JSX)

### 🎯 Goal:

Build UI using only `React.createElement()`

---

## 🛠️ Features:

* Heading: **My Tasks**
* Task list:

  * Learn JS
  * Learn React
  * Build Project

---

## 💡 Structure:

```html
<div>
  <h1>My Tasks</h1>
  <ul>
    <li>Learn JS</li>
    <li>Learn React</li>
    <li>Build Project</li>
  </ul>
</div>
```

---

## 🧠 Learning Outcome:

* Understand Virtual DOM
* Learn React internal working
* Build nested UI manually

---

## 🔥 Bonus Challenge:

* Add class & styles
* Use variables for dynamic data
* Add more nested components

---
