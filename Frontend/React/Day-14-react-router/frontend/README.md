# ⚡ **React Day – 14: React Router**

---

---

Before today:

➡️ Page change = Full reload

After today:

➡️ Smooth navigation like a PRO 🚀

---

## 🧠 What I Learned:

🔹 Setup React Router (Installation + Basic Example)

🔹 Core Routing Components:

- BrowserRouter 🌐
- Routes 🛣️
- Route 🔗
- Link 🔄
- NavLink 🎯
- useNavigate 🚀
- Nested Routing 🧱
- useOutlet 🔌

---

## 💡 Real Talk:

Now I finally understand how apps like Instagram, Netflix, etc. feel so smooth…

👉 It’s all about **SPA (Single Page Applications)**

---

## 🎯 Next Goal:

Build a multi-page React app using routing + nested layouts 💻

---

💬 **Question for Developers:**

What do you prefer for routing?

👉 React Router or Next.js App Router?

---

#ReactJS #ReactRouter #FrontendDevelopment #CodingJourney #LearnInPublic #WebDev #JavaScript #SheryiansCodingSchool

---

# 📘 **Structured MD Notes (With Code + Explanation)**

---

# 🧠 React Day – 14: React Router

---

## 🚀 What is React Router?

👉 React Router is used to create **multiple pages in React without reloading the browser**

### ❓ Why we use it?

- Avoid full page reload ❌
- Smooth navigation ✅
- Better performance 🚀
- SPA (Single Page Application) experience

---

## 📦 1. Installation

```bash
npm install react-router-dom
```

### ✅ Why?

We need this package to handle routing in React apps.

---

## ⚡ Basic Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 🧠 Explanation:

- `BrowserRouter` → wraps entire app
- `Routes` → container of all routes
- `Route` → defines path + component

---

# 🧩 2. Components for Routing

---

## 🌐 a. BrowserRouter

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

### ❓ Why?

- Enables routing using browser URL
- Keeps UI in sync with URL

---

## 🛣️ b. Routes

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

### ❓ Why?

- Groups all routes
- Only renders the matched route

---

## 🔗 c. Route

```jsx
<Route path="/about" element={<About />} />
```

### ❓ Why?

- Defines which component should render for a URL

---

## 🔄 d. Link

```jsx
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>
```

### ❓ Why?

- Navigate **without page reload**
- Better than `<a>` tag

---

## 🎯 e. NavLink

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about" style={({ isActive }) => ({
  color: isActive ? "red" : "black"
})}>
  About
</NavLink>
```

### ❓ Why?

- Adds active styling automatically
- Useful for navbar

---

## 🚀 g. useNavigate

```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}
```

### ❓ Why?

- Navigate programmatically
- Useful after form submit, login, etc.

---

## 🧱 h. Nested Routing

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

### ❓ Why?

- Create structured layouts
- Parent + child routes

---

## 🔌 i. useOutlet

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

### ❓ Why?

- Renders child routes inside parent
- Used in nested routing

---

# 🎯 Final Understanding

👉 React Router helps us:

- Build SPA apps
- Navigate without reload
- Structure large apps cleanly

---

# 💻 Practice Task

👉 Build a mini app with:

- Home page
- About page
- Dashboard with nested routes
- Navigation bar using NavLink

---

I

Here’s a **clean, real-world folder structure + working example** for using **React Router** exactly the way you described 👇

---

# 📁 **Project Folder Structure**

```
src/
│
├── main.jsx
├── App.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   └── Contact.jsx
│
└── assets/ (optional)
```

---

# 🚀 1. Install React Router

```bash
npm install react-router-dom
```

---

# ⚡ 2. main.jsx (Entry Point)

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
```

---

# 🌐 3. App.jsx (Wrap with BrowserRouter)

```jsx
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
```

👉 **Why?**

- `BrowserRouter` enables routing in the whole app

---

# 🛣️ 4. routes/AppRoutes.jsx

```jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
```

👉 **Why separate routes file?**

- Clean structure
- Scalable for large apps

---

# 🔄 5. components/Navbar.jsx

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
```

👉 **Why NavLink?**

- Automatically adds active styling

---

# 📄 6. pages/Home.jsx

```jsx
function Home() {
  return <h1>🏠 Home Page</h1>;
}

export default Home;
```

---

# 📄 pages/About.jsx

```jsx
function About() {
  return <h1>📘 About Page</h1>;
}

export default About;
```

---

# 📄 pages/Products.jsx

```jsx
function Products() {
  return <h1>🛒 Products Page</h1>;
}

export default Products;
```

---

# 📄 pages/Contact.jsx

```jsx
function Contact() {
  return <h1>📞 Contact Page</h1>;
}

export default Contact;
```

---

# 🧠 **How It Works (Flow)**

```
User clicks NavLink
        ↓
URL changes (/about)
        ↓
React Router matches Route
        ↓
Component renders (About.jsx)
        ↓
NO PAGE RELOAD 🚀
```

---

# 🎯 **Bonus (Active Link Styling)**

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black"
  })}
>
  About
</NavLink>
```

---

# 💡 **Why This Structure is Best**

✔ Separation of concerns

✔ Easy to scale

✔ Clean and readable

✔ Industry-level practice

---

---

# 📁 **Updated Folder Structure (Add nested pages)**

```bash
src/
├── pages/
│   ├── Products.jsx
│   ├── Men.jsx
│   └── Women.jsx
```

---

# 🛣️ **1. Update Routes (Nested Routing)**

📄 `routes/AppRoutes.jsx`

```jsx
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Men from "../pages/Men";
import Women from "../pages/Women";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Nested Routing */}
      <Route path="/products" element={<Products />}>
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Route>

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
```

---

# 🧱 **2. Products.jsx (Parent with Outlet)**

```jsx
import { NavLink, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>🛒 Products Page</h1>

      {/* Nested Navigation */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to="men">Men</NavLink>
        <NavLink to="women">Women</NavLink>
      </nav>

      <hr />

      {/* Child Routes Render Here */}
      <Outlet />
    </div>
  );
}

export default Products;
```

👉 **Why `Outlet`?**

- It acts like a placeholder where child routes (Men/Women) will render.

---

# 👕 **3. Men.jsx**

```jsx
function Men() {
  return <h2>👕 Men's Collection</h2>;
}

export default Men;
```

---

# 👗 **4. Women.jsx**

```jsx
function Women() {
  return <h2>👗 Women's Collection</h2>;
}

export default Women;
```

---

# 🔄 **How Navigation Works**

👉 When user clicks:

- `/products` → shows Products page
- `/products/men` → shows Men's section
- `/products/women` → shows Women's section

---

# 🧠 **Flow Diagram**

```bash
/products
   ↓
Products.jsx
   ↓
Click "Men"
   ↓
/products/men
   ↓
Men.jsx renders inside <Outlet />
```

---

# 🎯 **Important Concept**

| Concept                 | Why Used                        |
| ----------------------- | ------------------------------- |
| Nested Route            | To structure pages inside pages |
| Outlet                  | To render child components      |
| Relative Path (`men`) | Clean & scalable routing        |

---

# 💡 **Pro Tip (Better UX)**

👉 Add default child route:

```jsx
<Route path="/products" element={<Products />}>
  <Route index element={<h2>Select a category</h2>} />
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
</Route>
```

---
