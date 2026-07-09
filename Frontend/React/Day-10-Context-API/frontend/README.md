# 🚀 React Day 10 — Browser Storage & LocalStorage (Detailed Notes)

---

## 📌 1. What is Browser Storage?

Browser Storage allows us to store data in the browser so it persists even after page reload.

### Types:

* **LocalStorage** → Persistent (no expiry)
* **SessionStorage** → Cleared when tab closes

---

## 📌 2. What is LocalStorage?

LocalStorage is a **key-value storage** in the browser.

✔ Stores data as **strings only**
✔ Data persists even after refresh
✔ Max size ~5MB

---

## 📌 3. LocalStorage Methods

### 🔹 1. setItem()

Used to store data

```js
localStorage.setItem("name", "Jay");
```

---

### 🔹 2. getItem()

Used to retrieve data

```js
const data = localStorage.getItem("name");
console.log(data); // Jay
```

---

### 🔹 3. removeItem()

Delete specific item

```js
localStorage.removeItem("name");
```

---

### 🔹 4. clear()

Delete everything

```js
localStorage.clear();
```

---

## ⚠️ Important: LocalStorage stores only STRING

So for objects/arrays:

```js
// Store
localStorage.setItem("users", JSON.stringify(users));

// Get
const users = JSON.parse(localStorage.getItem("users"));
```

---

## 📌 4. Binding React with LocalStorage

We use:

* `useState()` → Manage UI state
* `useEffect()` → Sync with LocalStorage

```js
const [data, setData] = useState([]);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("data"));
  if (stored) setData(stored);
}, []);

useEffect(() => {
  localStorage.setItem("data", JSON.stringify(data));
}, [data]);
```

---

## 📌 5. React setState is Asynchronous ⚡

```js
setCount(count + 1);
console.log(count); // Old value ❌
```

👉 React updates state **later (async)**

### ✅ Correct Way:

```js
setCount(prev => prev + 1);
```

✔ Always use functional update when next state depends on previous state

---

## 📌 6. Install nanoid (Unique ID generator)

```bash
npm install nanoid
```

```js
import { nanoid } from "nanoid";

const id = nanoid();
```

✔ Used to create unique IDs for CRUD items

---

# 🔥 7. CRUD App using React + LocalStorage + nanoid

## 📌 Features:

* Add Item
* Display Items
* Delete Item
* Persist data in LocalStorage

---

## 🧠 Data Structure:

```js
{
  id: "abc123",
  text: "Learn React"
}
```

---

## 💻 Full Code:

```jsx
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Load data from LocalStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos"));
    if (stored) setTodos(stored);
  }, []);

  // Save data to LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE
  function addTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: nanoid(),
      text: input
    };

    setTodos(prev => [...prev, newTodo]); // functional update
    setInput("");
  }

  // DELETE
  function deleteTodo(id) {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Todo App</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## 📌 Code Explanation:

### 🔹 useState

* `input` → stores current input value
* `todos` → stores all tasks

---

### 🔹 useEffect (Load Data)

Runs once on mount:

```js
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("todos"));
  if (stored) setTodos(stored);
}, []);
```

✔ Fetch saved data

---

### 🔹 useEffect (Save Data)

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

✔ Sync state with LocalStorage

---

### 🔹 CREATE Operation

```js
setTodos(prev => [...prev, newTodo]);
```

✔ Uses previous state safely

---

### 🔹 DELETE Operation

```js
todos.filter(todo => todo.id !== id);
```

✔ Removes selected item

---

## 🚀 Final Takeaways:

✔ LocalStorage helps persist data
✔ Always use JSON for objects/arrays
✔ React state is async → use functional updates
✔ nanoid gives unique IDs
✔ Combine React + LocalStorage → build real apps

---

## 💡 Practice Ideas:

* Add Edit feature ✏️
* Add Completed toggle ✅
* Add Clear All button
* Add Dark Mode

---

🔥 **You’re now one step closer to building real-world React apps!**
