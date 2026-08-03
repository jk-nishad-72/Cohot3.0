# 📘 React Day 15 – Dynamic Routing

---

## 🧠 Concept: Dynamic Routing

Dynamic Routing ka matlab hai **URL ke through dynamic data pass karna** (jaise product id) aur uske basis pe UI render karna.

Example:

```
/details/1
/details/2
/details/3
```

Yaha `1,2,3` dynamic values hain.

---

## 🔍 Routing Approaches in React Router

### 1️⃣ Declarative Routing

* JSX ke through routes define karte hain
* Simple aur commonly used approach

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

### 2️⃣ Data Routing

* Advanced routing (React Router v6.4+)
* Loaders, actions use karke data fetch karte hain
* Backend-like data handling inside routing

---

## ⚙️ Dynamic Routing Setup

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/details/:id" element={<ProductDetail />} />
</Routes>
```

👉 `:id` → Dynamic parameter hai

---

## 🔑 useParams Hook

* URL se dynamic data nikalne ke liye use hota hai
* Object return karta hai

```js
const { id } = useParams();
```

Example:

```
URL: /details/5
id = 5
```

---

## 💻 Full Example: Fetch Product using ID

```jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {

  const { id } = useParams(); // URL se id le rahe hain
  const [singleProduct, setSingleProduct] = useState({});

  const getSingleProduct = async () => {
    try {
      let result = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      console.log(result.data);
      setSingleProduct(result.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1>{singleProduct.title}</h1>
      <img src={singleProduct.image} alt="" width="200" />
      <p>{singleProduct.description}</p>
      <h2>₹ {singleProduct.price}</h2>
    </div>
  );
};

export default ProductDetail;
```

---

## 📊 Flow Samjho (Step-by-Step)

1. User `/details/2` route pe click karta hai
2. `useParams()` se `id = 2` milta hai
3. API call hoti hai using id
4. Data state me store hota hai
5. UI dynamically update hoti hai

---

## ⚠️ Common Mistakes

* ❌ useEffect dependency empty rakhna (id change ho to issue)

```js
useEffect(() => {
  getSingleProduct();
}, [id]);
```

* ❌ setState use na karna (UI update nahi hoga)

* ❌ wrong import:

```js
import { useParams } from "react-router-dom"; // ✅ correct
```

---

## 🚀 Pro Tips

* Loading state add karo UX improve karne ke liye
* Error handling UI me bhi dikhao
* Skeleton UI use karo professional feel ke liye
* Dynamic routing e-commerce apps me heavily use hota hai

---

## 💡 Real Use Cases

* 🛒 Product Details Page
* 👤 User Profile Page
* 📝 Blog Details Page
* 🎬 Movie Details Page

---

🔥 **Summary:**
Dynamic Routing + useParams = Powerful combo to build real-world apps like e-commerce, dashboards, etc.

---
