
# 📘 React Day 20 – Redux Toolkit (RTK)

---

## 🧠 What is Redux Toolkit?

Redux Toolkit ek **official, simplified way** hai Redux use karne ka.

👉 Ye boilerplate code kam karta hai aur development fast banata hai.

---

## ❓ Why use Redux Toolkit?

* Global state management ke liye
* Multiple components me data share karne ke liye
* Complex state ko easily manage karne ke liye

---

## 📍 Where to use?

* 🛒 E-commerce (cart, user, products)
* 🔐 Authentication system
* 📊 Dashboard apps
* 🌐 Large scalable apps

---

## ⚙️ How Redux Toolkit Works?

Redux Toolkit 2 phases me kaam karta hai:

---

### 🔨 1️⃣ Creation Phase (Redux Toolkit)

👉 Yaha hum create karte hain:

* Store
* Slice (Reducer + Actions)

---

### 🚚 2️⃣ Delivering Phase (React-Redux)

👉 UI me use karte hain:

* `<Provider>`
* `useSelector`
* `useDispatch`

---

## ⚔️ Redux vs Redux Toolkit

| Feature        | Redux ❌ | Redux Toolkit ✅      |
| -------------- | -------- | --------------------- |
| Boilerplate    | High     | Very Low              |
| Setup          | Complex  | Simple                |
| Code           | Verbose  | Clean                 |
| Built-in tools | No       | Yes (Immer, DevTools) |

---

## 🔑 Core Concepts

---

### 1️⃣ Store

👉 Global state ka container

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

### 2️⃣ Slice (Reducer + Actions)

👉 Slice = State + Reducers + Actions

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

### 3️⃣ Actions

👉 Actions events hote hain jo state change karte hain

```js
dispatch(increment());
dispatch(decrement());
```

---

### 4️⃣ Selectors

👉 Store se data lene ke liye

```js
const { count } = useSelector((store) => store.counter);
```

---

### 5️⃣ Dispatch

👉 Action ko trigger karne ke liye

```js
const dispatch = useDispatch();

dispatch(increment());
```

---

## 🔗 Connecting Redux to React

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## 💻 Full Example: Counter Component

```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const Counter = () => {

  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-5 flex-col">
      <h1>Counter</h1>

      <div className="flex items-center justify-center gap-10">
        <button
          className="border px-4 py-2 text-4xl"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <h2>{count}</h2>

        <button
          className="border px-4 py-2 text-4xl"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

---

## 📊 Flow Samjho

1. User button click karta hai
2. `dispatch(action)` call hota hai
3. Slice reducer state update karta hai
4. Store update hota hai
5. UI automatically re-render hoti hai

---

## ⚠️ Common Mistakes

* ❌ Store ko Provider me wrap na karna
* ❌ Wrong selector path likhna
* ❌ Direct state mutate karna (RTK me allowed via Immer but samajhna zaruri hai)
* ❌ Slice ko store me register na karna

---

## 🚀 Pro Tips

* Features folder structure follow karo
* Har feature ke liye alag slice banao
* Redux DevTools use karo debugging ke liye
* Async ke liye `createAsyncThunk` use karo

---

## 💡 Real Use Cases

* 🛒 Cart management
* 👤 User authentication
* 🌙 Theme switcher
* 📊 Dashboard data

---

🔥 **Summary:**
Redux Toolkit =
👉 Easy + Clean + Scalable State Management 🚀

---
