
# 📘 React Day 19 – Debouncing & Throttling + Performance Optimization

---

## 🧠 Concept: Debouncing

Debouncing ka matlab hai:
👉 **Function ko tab run karna jab user input dena band kare (after delay)**

### ❓ Why Debouncing?

* Har keystroke pe API call avoid karna
* Performance improve karna
* Unnecessary renders kam karna

---

## 💻 Debouncing Example

```jsx id="d1b1x2"
const filterData = () => {
  console.log("filter is render...");

  const arr = products.filter((val) => {
    return val.title.toLowerCase().includes(searchDAta);
  });

  console.log(arr);
  setProducts(arr);
};

useEffect(() => {
  if (!searchDAta) return;

  const Id = setTimeout(() => {
    filterData();
  }, 1000);

  return () => {
    clearTimeout(Id);
  };
}, [searchDAta]);
```

---

## ⚙️ How it works?

1. User typing start karta hai
2. Timer start hota hai (1000ms)
3. Agar user fir type karta hai → previous timer cancel
4. Jab user rukta hai → function execute hota hai

---

## 🧠 Concept: Throttling

Throttling ka matlab hai:
👉 **Function ko fixed interval me ek baar run karna**

### ❓ Why Throttling?

* Scroll, resize events optimize karne ke liye
* Performance stable rakhne ke liye

---

## 💻 Throttling Example

```jsx id="t9p2q1"
import { useRef } from "react";

const useThrottle = (callback, delay) => {
  const lastCall = useRef(0);

  return (...args) => {
    const now = new Date().getTime();

    if (now - lastCall.current < delay) return;

    lastCall.current = now;
    callback(...args);
  };
};
```

### ✅ Usage

```jsx id="u7m3k2"
const handleScroll = useThrottle(() => {
  console.log("Scrolling...");
}, 1000);

window.addEventListener("scroll", handleScroll);
```

---

## 🔥 Debounce vs Throttle

| Feature   | Debounce 🕒             | Throttle ⏱️     |
| --------- | ----------------------- | --------------- |
| Execution | After delay (last call) | Fixed interval  |
| Use Case  | Search input            | Scroll / resize |
| API Calls | Minimized               | Controlled      |

---

## ⚡ Code Splitting

Code Splitting ka matlab:
👉 App ko chhote chunks me todna (bundle size kam karna)

### ❓ Why?

* Fast loading
* Better performance
* Initial bundle size kam

---

## 🚀 Lazy Loading

Lazy loading ka use:
👉 Component ko tab load karo jab zarurat ho

```jsx id="l8x4z3"
import React, { lazy } from "react";

const About = lazy(() => import("./About"));
```

---

## ⏳ Suspense (Fallback UI)

Suspense ka use:
👉 Loading state show karne ke liye jab component load ho raha ho

```jsx id="s5n6v7"
import React, { Suspense } from "react";

<Suspense fallback={<h1>Loading...</h1>}>
  <About />
</Suspense>
```

---

## 🌀 Loader Concept

Loader ka use:
👉 User ko batane ke liye ki data load ho raha hai

```jsx id="k3p9w8"
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData().then(() => setLoading(false));
}, []);

if (loading) return <h2>Loading...</h2>;
```

---

## ⚠️ Common Mistakes

* ❌ Debounce me cleanup function bhool jana
* ❌ Throttle me wrong logic → multiple calls
* ❌ Lazy component ko Suspense me wrap na karna
* ❌ Large bundle size ignore karna

---

## 🚀 Pro Tips

* Debounce search inputs me use karo
* Throttle scroll events me use karo
* Lazy load routes for better UX
* Skeleton loader use karo (better UI feel)

---

## 💡 Real Use Cases

* 🔍 Search bar (Debounce)
* 📜 Infinite scroll (Throttle)
* 📦 Large apps (Code splitting)
* ⏳ Dashboard loading states

---

🔥 **Summary:**
Debouncing + Throttling + Lazy Loading =
👉 High performance React apps 🚀

---
