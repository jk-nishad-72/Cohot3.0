
# 📘 React Day 25 – Products Feature (Search + Filter + TanStack Query)

---

## 🧠 Concept Overview

👉 Aaj humne complete **Products Feature** banaya using:

* TanStack Query (API handling)
* Debouncing (Search optimization)
* Category Filtering
* Feature-based architecture

---

## 🏗️ Feature-Based Structure (Products)

```id=
features/
 └── products/
      ├── api/        # API calls
      ├── hooks/      # Custom hooks (logic)
      ├── ui/
      │    ├── components/
      │    └── pages/
```

---

## 🌐 API Layer (Data Fetching)

👉 Saari API calls ek jagah manage hoti hain

```js
import { api } from "../../../config/api";

export const getProductsApi = async (search) => {
  let url = search
    ? `/products/search?q=${search}`
    : `/products?limit=100`;

  try {
    let res = await api.get(url);
    return res.data.products;
  } catch (error) {
    console.log("Products api", error);
  }
};
```

---

### 📂 Categories API

```js
export const getAllCotegories = async () => {
  let res = await api.get("products/categories");
  return res.data;
};
```

---

### 🏷️ Category Filter API

```js
export const getProductsByCategory = async (category) => {
  let res = await api.get(`/products/category/${category}`);
  return res.data;
};
```

---

## 🪝 Hooks Layer (Business Logic)

---

### 🔍 useAllProductHook (Search + Debounce + Query)

```js
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProductsApi } from "../api/productApi";

export const useAllProductHook = () => {

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debouncing
  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  let { data, isPending, error } = useQuery({
    queryKey: ["products", debouncedSearch],
    queryFn: () => getProductsApi(debouncedSearch),
    staleTime: 5000
  });

  return {
    data,
    isPending,
    error,
    search,
    setSearch
  };
};
```

---

### 📂 useCategoriesHook

```js
export const useCategoriesHook = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCotegories
  });
};
```

---

### 🏷️ useProductsByCategory

```js
export const useProductsByCategory = () => {

  const [category, setCategory] = useState("All");

  let { data } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductsByCategory(category)
  });

  return {
    data,
    category,
    setCategory
  };
};
```

---

## 🎨 UI Layer – Product Page

```jsx
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import {
  useAllProductHook,
  useProductsByCategory
} from "../../hooks/useProductHook";

const ProductPage = () => {

  let { data, isPending, search, setSearch } = useAllProductHook();
  let {
    data: getProductsByCategory,
    category,
    setCategory
  } = useProductsByCategory();

  return (
    <div>
      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div>
        {
          getProductsByCategory?.products?.length
            ? getProductsByCategory.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : data?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
        }
      </div>

      {isPending && <h1>Loading...</h1>}
    </div>
  );
};
```

---

## 🔎 FilterBar Component

```jsx
const FilterBar = ({
  search,
  setSearch,
  category,
  setCategory
}) => {

  let { data } = useCategoriesHook();

  return (
    <div>
      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>

        {data?.map((cat, i) => (
          <option key={i} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};
```

---

## 🔄 Complete Flow (Step-by-Step)

### 🔍 Search Flow

1. User input type karta hai
2. Debounce delay (1 sec)
3. TanStack Query API call karta hai
4. Filtered data UI me render hota hai

---

### 🏷️ Category Flow

1. User category select karta hai
2. QueryKey change hoti hai
3. New API call trigger hoti hai
4. Category-based products show hote hain

---

## ⚡ TanStack Query Benefits

* Auto caching
* Refetch control
* Loading & error state built-in
* API optimization

---

## ⚠️ Common Mistakes

* ❌ queryKey unique na rakhna
* ❌ debounce cleanup bhool jana
* ❌ API logic UI me likhna
* ❌ category + search conflict handle na karna

---

## 🚀 Pro Tips

* Search + category ko combine kar sakte ho
* Skeleton loader use karo
* Query DevTools use karo
* Infinite scroll add kar sakte ho

---

## 💡 Real Use Cases

* 🛒 E-commerce product listing
* 🔍 Search systems
* 🏷️ Filtering dashboards
* 📊 Data-heavy apps

---

🔥 **Summary:**
TanStack Query + Debounce + Feature Architecture =
👉 Scalable & high-performance product system 🚀

---
