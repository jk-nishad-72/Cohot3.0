
# 📘 React Day 18 – Memoization

---

## 🧠 Concept: Memoization

Memoization ka matlab hai **expensive calculations ya components ko cache (save) karna** taaki unnecessary re-render na ho.

👉 Goal:

* Performance improve karna
* Unnecessary re-renders avoid karna

---

## ❓ Why Memoization?

React me jab parent re-render hota hai:

* Sab child components bhi re-render hote hain ❌
* Chahe unka data change hua ho ya nahi

👉 Memoization is problem ko solve karta hai ✅

---

## 🔑 1️⃣ React.memo()

React.memo ek **Higher Order Component (HOC)** hai jo:

* Component ko re-render hone se rokta hai
* Jab tak props change na ho

---

## ⚙️ Basic Example

```jsx
import React, { useState } from "react";

const App = () => {
  console.log("App rendering");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Home />
      <About />
    </div>
  );
};
```

---

## 🧩 Use Case 1: Normal Component Memo

### ✔️ Method 1: Export ke time wrap

```jsx
const Home = () => {
  console.log("Home rendering");

  return <div>Home</div>;
};

export default React.memo(Home);
```

---

### ✔️ Method 2: Direct wrap with arrow function

```jsx
const About = React.memo(() => {
  console.log("About rendering");

  return <div>About</div>;
});

export default About;
```

---

## ⚠️ Problem: When Props Change

```jsx
const Home = ({ name }) => {
  console.log("Home rendering");

  return <div>Home - {name}</div>;
};

export default React.memo(Home);
```

👉 Agar props change honge → component re-render hoga (expected behavior)

---

## 🧠 Primitive vs Reference Data

```js
const [count, setCount] = useState(0); // primitive
const [user, setUser] = useState({
  name: "jay",
  age: 20,
  id: 1
}); // reference
```

👉 Problem:

* Object/Array ka **new reference create hota hai**
* Is wajah se React.memo fail ho jata hai

---

## 💻 Real Problem Example

```jsx
const App = () => {
  console.log("App rendering");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "jay",
    age: 20,
    id: 1
  });

  return (
    <div>
      <h1>{count} {user.name}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br />

      <button
        onClick={() => setUser({ name: "kishan" })}
      >
        Change User
      </button>

      <Home user={user} />
    </div>
  );
};
```

👉 Har render pe new object → new reference → re-render ❌

---

## ✅ Solution: Custom Comparison Function

```jsx
const Home = ({ user }) => {
  console.log("Home rendering");

  return <div>Home - {user.name}</div>;
};

export default React.memo(
  Home,
  (prevProps, nextProps) => {
    return prevProps.user.name === nextProps.user.name;
  }
);
```

👉 Agar condition true → re-render nahi hoga
👉 Agar false → re-render hoga

---

## 🔑 2️⃣ useCallback()

* Function ko memoize karta hai
* Same reference maintain karta hai

```jsx
import { useCallback } from "react";

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

👉 Useful jab function props me pass karte ho

---

## 🔑 3️⃣ useMemo()

* Expensive calculation ko cache karta hai

```jsx
import { useMemo } from "react";

const result = useMemo(() => {
  return heavyCalculation();
}, []);
```

👉 Recalculate tabhi hoga jab dependency change hogi

---

## 🏗️ 4️⃣ 4 Layer Architecture

### 1️⃣ Presentation Layer

* UI (Components, JSX)

### 2️⃣ Business Layer

* Logic (Custom hooks, functions)

### 3️⃣ Data Layer

* API calls (Axios, fetch)

### 4️⃣ State Layer

* State management (Redux, Context API)

---

## ⚠️ Common Mistakes

* ❌ Har jagah memo use karna (over-optimization)
* ❌ Dependency array galat dena
* ❌ Reference types ko ignore karna
* ❌ Complex comparison function likh dena

---

## 🚀 Pro Tips

* Memoization sirf jab needed ho tab use karo
* React DevTools se re-render check karo
* useCallback + React.memo combo powerful hai
* Clean architecture maintain karo

---

## 💡 Real Use Cases

* 🛒 E-commerce product list
* 📊 Dashboard graphs
* 📝 Forms with many fields
* 🎮 Heavy UI components

---

🔥 **Summary:**
React.memo + useCallback + useMemo =
👉 Performance optimization ka powerful combo

---
