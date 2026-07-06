# ⚛️ React Day-3 — JSX, Babel, Components & Props

---

## 🔄 Babel (Transpiler)

* **Babel** is a tool that converts modern JavaScript / JSX → browser-understandable JavaScript

---

### 🧩 Without JSX (Pure React)

```js
let rh1 = React.createElement('h1', {}, "hello")
return rh1
```

---

### ⚛️ With JSX

```jsx
return (
  <div>
    <h1>Hello</h1>
  </div>
)
```

---

### 🔍 Explanation:

* JSX is **syntactic sugar**
* Babel converts JSX → `React.createElement()`

---

## 🧠 JSX (JavaScript + XML)

* Looks like HTML but written inside JS
* Must return **single parent element**

---

### ❌ Wrong:

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

### ✅ Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

---

## ⚛️ Functional Components

### 📌 Definition:

* JavaScript functions that return JSX

---

### ✅ Rules:

1. File name starts with **Capital letter**
2. Function name starts with **Capital letter**
3. Call using → `<App />` ✅ (NOT `App()` ❌)

---

### 💻 Example:

```jsx
const App = () => {
  return <h1>Hello React</h1>
}
```

---

## 📦 Props (Properties)

* Used to pass data from parent → child
* Always passed as **object**

---

### 🧩 Example Component:

```jsx
const Navbar = ({ nav }) => {
  console.log(nav)
  return <div>Navbar</div>
}
```

---

### 📤 Passing Props:

```jsx
<Navbar nav="Home" />
<Navbar nav="About" />
```

---

### 🔍 Explanation:

* `{ nav }` → object destructuring
* Props are **read-only**

---

## 🧒 Children Props

* Special prop: `children`
* Used to pass **nested content**

---

### 💻 Example:

```jsx
<Navbar nav="contact">
  <h1>Hii I am Contact Page</h1>
</Navbar>
```

---

### 🔍 Inside Component:

```jsx
const Navbar = ({ nav, children }) => {
  return (
    <div>
      {nav}
      {children}
    </div>
  )
}
```

---

## 🏗️ App Structure Example

```jsx
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Header from './components/Header'
import User from './components/User'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  return (
    <div>

      <Tasks />

      <Navbar nav="Home" />
      <Navbar nav="About" />

      <Navbar nav="Contact">
        <h1>Hii I am Contact Page</h1>
      </Navbar>

      <Header />
      <Main />
      <Footer />

      <User name="jay" age={20} isLogedIn={true} />
      <User name="jay" age={20} isLogedIn={false} />

      <h1>Hello</h1>

    </div>
  )
}

export default App
```

---

## 🔁 Reusable Components

* Same component → different data
* Example:

```jsx
<User name="jay" age={20} isLogedIn={true} />
<User name="jay" age={20} isLogedIn={false} />
```

---

# 🧪 Practice Questions

## 🟢 Easy

* What is JSX?
* What does Babel do?
* What are props?

---

## 🟡 Medium

* Difference between JSX and HTML?
* Why components must start with capital letter?
* What is `children` prop?

---

## 🔴 Hard

* How Babel converts JSX internally?
* Explain component reusability with example
* Why props are immutable?

---

# 🚀 Practice Project

## 📌 Project: Dynamic User Card UI

---

## 🎯 Goal:

Use **components + props + children**

---

## 🛠️ Features:

* Create `UserCard` component
* Show:

  * Name
  * Age
  * Login status
* Pass different users as props

---

## 💡 Example:

```jsx
const UserCard = ({ name, age, isLogedIn }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isLogedIn ? "Online" : "Offline"}</p>
    </div>
  )
}
```

---

## 🧪 Usage:

```jsx
<UserCard name="Jay" age={20} isLogedIn={true} />
<UserCard name="Rahul" age={22} isLogedIn={false} />
```

---

## 🧠 What You’ll Learn:

* Props handling
* Component reuse
* JSX structure

---

## 🔥 Bonus Challenge:

* Add profile image
* Add conditional styling (green/red status)
* Pass children content inside card

---
