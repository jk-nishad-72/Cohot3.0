# ⚛️ React1 Day-2 — Updating, Reconciliation & Vite Setup

---

## 🔄 React Update Mechanism

React does **not directly update Real DOM**
Instead, it follows this process:

👉 Real DOM → Virtual DOM → Compare → Update only changed parts

---

## 🌳 Virtual DOM from Real DOM

* React creates a **copy of Real DOM** in memory
* This copy is called **Virtual DOM (VDOM)**
* It is a **lightweight JavaScript object**

---

## 🔁 New Virtual DOM vs Old Virtual DOM

* **Old Virtual DOM (OVD)** → Previous state UI
* **New Virtual DOM (NVD)** → Updated UI after changes

👉 React compares both to find changes

---

## ⚡ Reconciliation (Core Concept)

Reconciliation = **Process of updating UI efficiently**

---

### 🧩 1. Render Phase

* React creates Virtual DOM

#### Steps:

* Create **Old Virtual DOM (OVD)**
* Create **New Virtual DOM (NVD)**

---

### ⚙️ 2. Commit Phase

#### a) Diffing Algorithm

* Compares **NVD vs OVD**
* Finds differences (changes)
* Stores what needs to update

#### b) Update Process

* Apply changes to **Real DOM**
* Browser **repaints UI**
* Old Virtual DOM is removed

---

## 🔥 React Fiber (React 16)

* Introduced in **2016**
* Improved version of reconciliation engine

### 🚀 Features:

* Faster rendering
* Better performance
* Breaks work into small chunks
* Smooth UI updates

---

## 🧪 Example (Conceptual Flow)

```js
// Initial Render
let oldVDOM = <h1>Hello</h1>

// After Update
let newVDOM = <h1>Hello World</h1>
```

### 🔍 What React Does:

* Compare both
* Finds only "World" is new
* Updates only that part in Real DOM

---

# ⚙️ Create React App using Vite

## 🧱 Step 1: Install Node.js

* Required to run React

---

## 🖥️ Step 2: Run Commands

```bash
npm create vite
```

### Follow Prompts:

* Press `y`
* Enter **app name**
* Select:

  * React
  * JavaScript
  * ESLint → No

---

## 📦 Step 3: Install Dependencies

```bash
cd appName
npm install
```

---

## ▶️ Step 4: Run Project

```bash
npm run dev
```

---

## 🧠 Output:

* Local server runs (e.g., http://localhost:5173)

---

## 🛡️ StrictMode

* Used for **better optimization**
* Helps detect:

  * Bugs
  * Unsafe lifecycle methods
* Runs extra checks in development

---

# 🧪 Practice Questions

## 🟢 Easy

* What is Virtual DOM?
* What is Reconciliation?
* Difference between OVD and NVD?

---

## 🟡 Medium

* Explain Render Phase and Commit Phase
* What is Diffing Algorithm?
* Why React is faster than DOM?

---

## 🔴 Hard

* Explain complete React update lifecycle
* How React Fiber improves performance?
* Why React doesn’t directly update DOM?

---

# 🚀 Practice Project

## 📌 Project: Counter App (Reconciliation Demo)

---

## 🎯 Goal:

Understand how React updates UI using Virtual DOM

---

## 🛠️ Features:

* Show number (0 initially)
* Button → Increment count
* UI updates without full reload

---

## 💡 Example:

```js
import { useState } from "react"

function App() {
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

export default App
```

---

## 🧠 What You’ll Learn:

* State updates
* Virtual DOM re-rendering
* Efficient UI updates

---

## 🔥 Bonus Challenge:

* Add decrement button
* Add reset button
* Show "Even/Odd" dynamically

---
