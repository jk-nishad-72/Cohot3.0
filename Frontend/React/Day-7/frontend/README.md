# 📘 React Day 7 Notes

## 🔹 1. Conditional Rendering (Ternary Operator)

Used to render UI based on conditions.

### Syntax:

```js
condition ? "True Value" : "False Value"
```

### Example:

```js
let isLoggedIn = true;

return (
  <h1>{isLoggedIn ? "Welcome Back!" : "Please Login"}</h1>
);
```

---

## 🔹 2. Two-Way Binding

Two-way binding means:

* Data flows from **UI → React (State)**
* Data flows from **React → UI**

### Example:

```js
const [name, setName] = useState("");

return (
  <input 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
  />
);
```

---

## 🔹 3. Controlled Input

Controlled inputs are form elements whose values are controlled by React state.

### Key Points:

* Uses `useState`
* Value is controlled by React
* Changes handled using `onChange`

### Example:

```js
const [email, setEmail] = useState("");

return (
  <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
);
```

---

## 🔹 4. State Lifting (Lifting State Up)

Instead of defining state in child components:
➡️ Define state in the **parent component**
➡️ Pass it to child components via **props**

### Why?

* Better state management
* Data sharing between components
* Improves reusability

### Example:

#### Parent Component:

```js
const [count, setCount] = useState(0);

<Child count={count} setCount={setCount} />
```

#### Child Component:

```js
function Child({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
}
```

---

## 🚀 Summary

* Conditional Rendering helps in dynamic UI
* Two-way binding connects UI and state
* Controlled inputs give full control over form data
* State lifting helps in sharing data across components

👉 React is all about managing state and data flow efficiently!

---

# 🧠 Practice Questions

## 🟢 Easy Level

1. Create a component that shows **"Logged In" / "Logged Out"** using ternary operator.
2. Make an input field that displays typed text below it (two-way binding).
3. Create a controlled input for username and log its value in console.

---

## 🟡 Medium Level

1. Build a **toggle button** (Show/Hide Password) using conditional rendering.
2. Create a form with **name & email** using controlled inputs.
3. Lift state up:

   * Parent stores a number
   * Child button increases it

---

## 🔴 Hard Level

1. Build a **multi-input form** (name, email, password) with validation.
2. Create a **counter app with multiple child components** sharing same state (state lifting).
3. Build a **live preview component**:

   * Input text in one component
   * Display it in another (via lifted state)

---

# 🚀 Practice Projects

## 🔹 1. Live Input Preview App (Beginner)

**Description:**
User types text → it instantly shows below.

**Concepts Used:**

* Two-way binding
* Controlled input

---

## 🔹 2. Login Form UI (Intermediate)

**Description:**

* Email & Password input
* Show/Hide password toggle
* Display login status

**Concepts Used:**

* Controlled inputs
* Conditional rendering

---

## 🔹 3. Shared Counter App (Intermediate)

**Description:**

* Multiple buttons/components control same counter

**Concepts Used:**

* State lifting
* Props

---

## 🔹 4. Form Validation App (Advanced)

**Description:**

* Validate email format
* Password length check
* Show error messages dynamically

**Concepts Used:**

* Controlled inputs
* Conditional rendering
* State management

---

## 🔹 5. Mini Chat UI (Advanced)

**Description:**

* Input message
* Display messages list
* Use parent state to manage all messages

**Concepts Used:**

* State lifting
* Two-way binding
* Component communication

---

🔥 Pro Tip:
Don’t just read — **build each concept once**. That’s where real learning happens.

# 🔍Child component to parent component  

Seedhi baat: **React me data direct child → parent nahi jata** ❌
React follows **one-way data flow (top → down)**

👉 Lekin… **indirectly bhej sakte ho using functions (callback props)** ✅

---

## 🧠 Concept: Child → Parent Data Transfer

Parent ek **function pass karta hai**,
Child us function ko call karta hai → data parent tak pahunch jata hai

---

## 🔄 Flow

```
Parent → function pass → Child
Child → function call → Parent me data
```

---

## 📦 Example (Most Important)

### 🔹 Parent Component

```jsx id="p1x2a"
import Child from "./Child"

const Parent = () => {

  function getDataFromChild(data) {
    console.log("Data from child:", data)
  }

  return (
    <div>
      <Child sendData={getDataFromChild} />
    </div>
  )
}

export default Parent
```

---

### 🔹 Child Component

```jsx id="c9k2m"
const Child = ({ sendData }) => {

  return (
    <button onClick={() => sendData("Hello from Child")}>
      Send Data
    </button>
  )
}

export default Child
```

---

## 🔍 Output

👉 Button click →
Parent console:

```
Data from child: Hello from Child
```

---

## ⚡ Real Life Analogy

* Parent = Boss
* Child = Employee

Boss bolta hai:
👉 “Agar kuch update ho, mujhe function call karke bata dena”

Employee (child) bolta hai:
👉 “Okay” → function call → data bhej diya

---

## 🧩 Another Example (Input Field)

### 🔹 Child

```jsx id="inp1"
const Child = ({ sendData }) => {

  return (
    <input 
      type="text" 
      onChange={(e) => sendData(e.target.value)} 
    />
  )
}
```

---

### 🔹 Parent

```jsx id="inp2"
function Parent() {

  function handleData(value) {
    console.log(value)
  }

  return <Child sendData={handleData} />
}
```

---

## 🚨 Important Points

* React me **direct child → parent data flow nahi hota**
* Always use **callback function**
* Ye pattern bahut important hai (interview + real projects)

---

## 🧪 Quick Questions

### 🟢 Easy

* Kya child directly parent ko data bhej sakta hai?

### 🟡 Medium

* Callback props kya hote hain?

### 🔴 Hard

* One-way data flow React me kyu important hai?

---

## 🔥 Summary

👉 Parent data bhejta hai via props
👉 Child data bhejta hai via **function call**

---
