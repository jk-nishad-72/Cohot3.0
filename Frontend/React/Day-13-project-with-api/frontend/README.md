**upgraded Markdown Notes with Code Explanation (concept + logic + code together)** 👇

---

# 🚀 React Day 13 — Shop Project (API + Context API)

📅 **Day 46 — 3.0 Job Ready AI-Powered Cohort**

---

## 📌 Overview

Built a **mini eCommerce application** using:

* API (Axios)
* Global State (Context API)
* Cart System (Add / Remove / Quantity)

👉 Focus: **Real-world React flow (UI + Logic + State)**

---

## ⚙️ Setup

```bash
npm install axios
```

👉 Axios is used to fetch data from API (cleaner than fetch)

---

## 🛍️ 1. Fetch Products (API + useEffect)

### ✅ Code

```js
const [products, setProducts] = useState([]);

const getProductData = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  setProducts(response.data);
};

useEffect(() => {
  getProductData();
}, []);
```

### 🧠 Explanation

* `useState` → stores product data
* `axios.get()` → fetch data from API
* `useEffect()` → runs once when component loads

👉 Flow:
Component Load → API Call → Data Stored → UI Render

---

## 🌍 2. Context API (State Centralization)

### ❌ Problem: Prop Drilling

Passing cart data through multiple components

### ✅ Solution: Context API

```js
const MyContext = createContext();

<MyContext.Provider value={{ cart, setCart }}>
  {children}
</MyContext.Provider>
```

### 🧠 Explanation

* `createContext()` → creates global store
* `Provider` → wraps app and shares data
* Any component can access using `useContext()`

👉 Makes state **global & accessible anywhere**

---

## 🛒 3. Add to Cart Logic

### ✅ Code

```js
const handleAddCart = (product) => {
  setCart((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      return [...prev, { ...product, qty: 1 }];
    }
  });
};
```

### 🧠 Explanation

* Check if product already exists
* If yes → increase `qty`
* If no → add new item with `qty: 1`

👉 Uses:

* `find()` → check existence
* `map()` → update item
* Spread operator → immutability

---

## ❌ 4. Remove from Cart

### ✅ Code

```js
const handleRemove = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};
```

### 🧠 Explanation

* `filter()` removes item by id
* Returns new array (React re-renders)

---

## 🔼🔽 5. Quantity Management

### ➕ Increase

```js
const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};
```

### ➖ Decrease

```js
const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};
```

### 🧠 Explanation

* `map()` → update quantity
* `filter()` → remove item when qty = 0

👉 Important logic:

> qty 1 → becomes 0 → removed automatically

---

## 💰 6. Total Calculation

### ✅ Code

```js
const totalAmount = carts.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
```

### 🧠 Explanation

* `reduce()` loops through all items
* Adds: `price × quantity`

👉 Gives final cart total

---

## 🧠 Core Concepts Used

* Axios (API calls)
* useEffect (side effects)
* Context API (global state)
* Array methods:

  * `map()` → update
  * `filter()` → remove
  * `reduce()` → calculate

---

## 🌐 Project Links

* 🔗 Live: [https://cohot3-0-shop.vercel.app/](https://cohot3-0-shop.vercel.app/)
* 💻 GitHub: [https://github.com/jk-nishad-72/Cohot3.0/tree/main/Frontend/React/Day-13-project-with-api](https://github.com/jk-nishad-72/Cohot3.0/tree/main/Frontend/React/Day-13-project-with-api)

---

## 💡 Key Learnings

* API + State + UI = Complete App
* Context API solves prop drilling
* Cart logic requires careful updates
* Immutability is important in React

---

## 🎯 Final Understanding

👉 This project is a **mini Flipkart/Amazon clone logic**

Flow:

```
API → Products → Add to Cart → Manage Qty → Calculate Total
```

---

## 🚀 Next Level

* LocalStorage (persist cart)
* Cart count in Navbar
* Authentication (Login)
* Backend integration

---
