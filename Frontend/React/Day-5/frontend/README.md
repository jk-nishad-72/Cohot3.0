# ⚛️ React Day-5 — Tailwind Setup, Batching & Dynamic Rendering

---

## 🎨 Integrating Tailwind CSS in React (Vite)

### 📌 Step-by-Step Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### ⚙️ Configure Tailwind

#### tailwind.config.js

```js id="tw1"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 🎯 Add Tailwind to CSS

#### index.css

```css id="tw2"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 🚀 Now Use Tailwind Classes

```jsx id="tw3"
<div className="bg-yellow-50 p-4 flex gap-2">
  Hello Tailwind
</div>
```

---

## ⚡ Batching (🔥 Important for Interviews)

### 📌 Definition:

React groups multiple state updates into **one render**

---

### 🧠 Example (Without Functional Update)

```jsx id="bat1"
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)
```

### ❌ Output:

👉 Only **+1 happens**

---

### 🔍 Why?

* All updates use same `count` value
* React batches them → single render

---

## ✅ Correct Way (Functional Update)

```jsx id="bat2"
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
setCount((prev) => prev + 1)
```

### ✅ Output:

👉 **+3 happens**

---

### 🔍 Explanation:

* `prev` → latest updated value
* Each update uses fresh state

---

## 🧪 Counter Component (Batching Demo)

```jsx id="bat3"
import { useState } from 'react'

const Counter = () => {

  console.log("Re-rendering Counter")

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {

        setCount((prev) => prev + 1)
        setCount((prev) => prev + 3)

      }}>
        Increment
      </button>

    </div>
  )
}

export default Counter
```

---

## 🔁 Component Rendering with Different Data

* Use `.map()` to render multiple components

---

## 🧩 App Component (Dynamic Data Rendering)

```jsx id="app1"
import { useState } from 'react'
import Counter from './components/Counter'
import Product from './components/Product'

const App = () => {

  const [productData, setProductData] = useState([
    { id: 1, title: "Bag", price: 100, category: "men", image: "img1" },
    { id: 2, title: "T-shirt", price: 50, category: "men", image: "img2" }
  ])

  function del(id) {
    const filterData = productData.filter((p) => p.id !== id)
    setProductData(filterData)
  }

  return (
    <div>
      {
        productData.map((p) => (
          <Product key={p.id} {...p} del={del} />
        ))
      }

      <Counter />
    </div>
  )
}

export default App
```

---

## 🧾 Product Component

```jsx id="prd1"
const Product = ({ id, title, price, category, image, del }) => {

  return (
    <div>
      <h3>{title}</h3>
      <p>{category}</p>
      <img src={image} alt="product" />
      <h4>{price}</h4>

      <button onClick={() => del(id)}>
        Delete
      </button>
    </div>
  )
}

export default Product
```

---

## 🔍 Key Concepts Used

* useState
* Batching
* Functional updates
* Dynamic rendering using `.map()`
* Props passing
* Event handling

---

# 🧪 Practice Questions

## 🟢 Easy

* What is batching?
* What is Tailwind CSS?
* What is useState?

---

## 🟡 Medium

* Why `setCount(count+1)` fails multiple times?
* Difference between normal vs functional update?
* Why key is used in `.map()`?

---

## 🔴 Hard

* Explain batching internally
* How React optimizes re-rendering?
* Difference between controlled and uncontrolled updates?

---

# 🚀 Practice Project

## 📌 Project: Product List with Delete Feature

---

## 🎯 Goal:

Build dynamic UI using:

* Tailwind
* useState
* Batching concept

---

## 🛠️ Features:

* Display product cards
* Show image, title, price
* Delete product
* Counter component

---

## 🧠 What You’ll Learn:

* Dynamic rendering
* State updates
* Real-world UI handling

---

## 🔥 Bonus Challenge:

* Add "Add Product" button
* Add search filter
* Add sorting (price low → high)
* Show total products count

---

## 🌐 Your Projects:

* https://cohot3-0-ass-2-mid.vercel.app/
* https://cohot3-0-ten.vercel.app/

---
