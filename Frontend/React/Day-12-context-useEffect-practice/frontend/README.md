# 🚀 React Day 12 — Context API & useEffect Notes

---

## 📌 🔥 Quick Summary

* React re-renders the **entire component tree** when state changes.
* **Context API** helps avoid prop drilling by sharing global state.
* But ⚠️ Context updates can still trigger **full re-renders**.
* **useEffect()** helps control side effects and optimize behavior.
* Learned **Component Lifecycle** + **Memory Leak prevention**.
* Introduced **Axios** for API calls.

---

# 🧠 1. Basic Problem — Re-rendering

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

### ⚠️ What happens?

* When `count` updates:

  * App re-renders
  * All child components (`Home`, `About`, `Contact`) also re-render

### 🧠 Key Insight:

> React re-renders the **entire component tree by default**

---

# 🌍 2. Context API (Global State)

## ✅ Step 1: Create Context

```jsx
import { createContext } from "react";

export const MyStore = createContext();
```

---

## ✅ Step 2: Create Provider

```jsx
export const MyStoreContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyStore.Provider value={{ count, setCount }}>
      {children}
    </MyStore.Provider>
  );
};
```

### 🧠 Explanation:

* `Provider` wraps your app
* Shares state globally
* Any component can access it

---

## ✅ Step 3: Use Context

```jsx
import { useContext } from "react";
import { MyStore } from "./context/MyContext";

const { count, setCount } = useContext(MyStore);
```

---

## ⚠️ Problem with Context

> When `setCount()` runs:

* State updates in Provider
* Parent re-renders
* Whole app re-renders again 😵

---

# ⚙️ 3. Component Lifecycle

| Phase         | Meaning            |
| ------------- | ------------------ |
| 🟢 Mounting   | Component created  |
| 🟡 Updating   | State/props change |
| 🔴 Unmounting | Component removed  |

---

# ⚡ 4. useEffect() Hook

## 📌 Syntax

```jsx
useEffect(() => {
  // side effect code
}, [dependencies]);
```

---

## 🧠 Key Points

* Runs **after render**
* Handles:

  * API calls
  * Timers
  * DOM updates
* Dependency array controls execution

---

## 🎯 Cases

### 1. Run once (on mount)

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

### 2. Run on state change

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

### 3. Run every render

```jsx
useEffect(() => {
  console.log("Runs always");
});
```

---

# ⚠️ 5. Memory Leak (Important 🔥)

## ❌ Problem

```jsx
setInterval(() => {
  console.log("Running...");
}, 1000);
```

Even after component unmounts → still runs 😱

---

## ✅ Solution (Cleanup Function)

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

### 🧠 Insight:

> Cleanup runs when component unmounts

---

# 🌐 6. Axios (API Calls)

```jsx
import axios from "axios";

useEffect(() => {
  axios.get("https://api.example.com/data")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}, []);
```

---

# 🎯 Final Understanding

* Context solves **data sharing problem**
* But introduces **re-render challenges**
* useEffect helps:

  * Optimize performance
  * Manage side effects
  * Prevent memory leaks

---

# 🧪 Practice Projects

## 🟢 EASY

### 1. Counter with Context

* Global count state using Context API
* Increment / Decrement buttons
* Show count in multiple components

---

### 2. Theme Toggle (Light/Dark)

* Use Context for theme
* Toggle button in Navbar
* Apply styles globally

---

## 🟡 MEDIUM

### 3. Timer App

* Start / Stop timer using `setInterval`
* Show seconds
* Use `useEffect`
* Cleanup interval (avoid memory leak)

---

### 4. API Data Fetcher

* Fetch users/posts using Axios
* Show loading + error handling
* Use `useEffect`

---

## 🔴 HARD

### 5. Global Cart System (Mini E-commerce)

* Use Context for cart
* Add/remove items
* Show total count
* Optimize re-renders

---

### 6. Dashboard with Optimized Rendering

* Multiple components (Sidebar, Profile, Stats)
* Use Context carefully
* Avoid unnecessary re-renders
* Use `useEffect` for API calls

---

# 💭 Pro Tip

> “React mastery = Understanding re-renders + controlling side effects”

---

# 🔥 Your Next Step

* Build at least **1 project from each level**
* Focus on:

  * Clean code
  * Proper useEffect usage
  * Avoiding unnecessary re-renders

---

# 🚀 Keep Going

Consistency > Motivation
You're building real developer thinking 💻🔥

---
