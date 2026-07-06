# ⚛️ React Day-4 — Import/Export & useState Hook

---

## 📦 Import & Export (Data Sharing Between Components)

React apps are divided into multiple files/components.
To share data, we use **import** and **export**

---

## 🔼 Export (Sending Data)

### 🔹 1. Default Export

```js id="ex1d"
const Navbar = () => {
  return <h1>Navbar</h1>
}

export default Navbar
```

### 🔍 Key Points:

* Only **one default export per file**
* Can import with **any name**

---

### 🔹 2. Named Export

```js id="ex2d"
export const name = "Jay"
export const age = 20
```

### 🔍 Key Points:

* Multiple exports allowed
* Must import with **same name**

---

## 🔽 Import (Receiving Data)

### 🔹 Import Default Export

```js id="im1d"
import Navbar from "./Navbar"
```

👉 You can rename:

```js id="im2d"
import MyNavbar from "./Navbar"
```

---

### 🔹 Import Named Export

```js id="im3d"
import { name, age } from "./data"
```

👉 Rename using alias:

```js id="im4d"
import { name as userName } from "./data"
```

---

## 🧠 Hooks (Core of React)

* Hooks make React powerful
* Allow functional components to use:

  * State
  * Lifecycle features

---

## ⚡ useState() Hook

### 📌 Definition:

Used to **store and manage data (state)** inside components

---

### 🧩 Syntax:

```js id="us1d"
import { useState } from "react"

const [state, setState] = useState(initialValue)
```

---

### 🔍 Breakdown:

* `state` → current value
* `setState` → function to update value
* `initialValue` → starting value

---

## 🧪 Example: Counter

```jsx id="us2d"
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Counter
```

---

## 🔄 How setState Works

### ✅ setState does 2 things:

1. Updates the state value
2. Re-renders the component

---

### ⚠️ Important Rule:

* If new value === old value
  👉 React **does NOT re-render**

---

## 🧠 Example:

```js id="us3d"
setCount(0) // if already 0 → no re-render
```

---

## 🔁 Re-render Concept

* When state changes → component updates
* UI automatically reflects new data

---

# 🧪 Practice Questions

## 🟢 Easy

* What is useState?
* Difference between import and export?
* What is default export?

---

## 🟡 Medium

* Difference between named and default export?
* Why React doesn’t re-render on same state value?
* Explain setState working

---

## 🔴 Hard

* What happens internally when state updates?
* Why hooks are important in React?
* Difference between normal variable and state?

---

# 🚀 Practice Project

## 📌 Project: Interactive Counter App

---

## 🎯 Goal:

Understand **useState + re-rendering**

---

## 🛠️ Features:

* Show count
* Increase button
* Decrease button
* Reset button

---

## 💻 Example:

```jsx id="proj1d"
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
```

---

## 🧠 What You’ll Learn:

* State handling
* Component re-rendering
* Event handling

---

## 🔥 Bonus Challenge:

* Disable button when count = 0
* Show message: "Negative not allowed"
* Add step increment (like +2, +5)

---
