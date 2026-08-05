
# 📘 React Day 23 – Frontend Architecture & API Integration

---

## 🧠 What is Frontend Architecture?

Frontend Architecture ka matlab hai:
👉 **Project ko structured, scalable aur maintainable way me organize karna**

👉 Large projects me architecture bahut important hota hai:

* Code readable hota hai
* Team collaboration easy hoti hai
* Features easily scale hote hain

---

## 🏗️ Types of Frontend Architecture

---

### 1️⃣ Component-Based Architecture

👉 React ka core concept

* UI ko small reusable components me break karte hain
* Har component ek specific kaam karta hai

```jsx
const Button = () => {
  return <button>Click Me</button>;
};
```

---

### 2️⃣ Feature-Based + 4 Layer Architecture

👉 Har feature ko independent module banaya jata hai

---

## 🔥 4 Layer Architecture (Most Important)

---

### 1️⃣ Presentation Layer (UI)

👉 Sirf UI handle karta hai (no logic)

```jsx
const LoginUI = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" />
      <button>Login</button>
    </form>
  );
};
```

---

### 2️⃣ Business Logic Layer (Hooks)

👉 Logic yaha likha jata hai (reusable)

```js
const useAuth = () => {

  const handleLogin = (data) => {
    console.log("Login logic", data);
  };

  return { handleLogin };
};
```

---

### 3️⃣ Data Layer (API Calling)

👉 API calls separate folder me hoti hain

```js
import { axiosInstance } from "../config/axiosInstance";

export const loginAPI = async (data) => {
  const res = await axiosInstance.post("/login", data);
  return res.data;
};
```

---

### 4️⃣ State Layer (Redux / Context)

👉 Global state manage hota hai

```js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
```

---

## 🧩 Feature-Based Folder Structure

👉 Har feature ke andar 4 folders honge:

```id=
features/
 └── auth/
      ├── ui/        # Components (Login, Register)
      ├── hooks/     # useAuth
      ├── api/       # loginAPI, registerAPI
      └── state/     # userSlice
```

---

## 🛒 E-Commerce Features Defined

👉 Humne project ko features me divide kiya:

1. 🔐 Auth
2. 🛍️ Products
3. 🛒 Cart
4. 📦 Order & Checkout

---

## 🔄 Example Flow (Auth Feature)

---

### 🧠 Step-by-Step Flow

1. User Login form fill karta hai (UI)
2. Hook handleLogin call hota hai
3. API function call hota hai
4. Response aata hai
5. Redux state update hoti hai
6. UI update hoti hai

---

## 💻 Full Example (Auth Flow)

---

### 📄 UI Layer

```jsx
const Login = () => {
  const { handleLogin } = useAuth();

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" />
      <button>Login</button>
    </form>
  );
};
```

---

### 🪝 Hook Layer

```js
import { loginAPI } from "../api/authAPI";

const useAuth = () => {

  const handleLogin = async (data) => {
    const res = await loginAPI(data);
    console.log(res);
  };

  return { handleLogin };
};
```

---

### 🌐 API Layer

```js
export const loginAPI = async (data) => {
  const res = await fetch("/login", {
    method: "POST",
    body: JSON.stringify(data)
  });

  return res.json();
};
```

---

### 🏪 State Layer

```js
dispatch(setUser(userData));
```

---

## 🧠 Mono-Repo Architecture

👉 Mono-repo ka matlab:

* Multiple apps / packages ek hi repo me

Example:

```id=
apps/
  ├── frontend/
  ├── backend/
packages/
  ├── ui/
  ├── utils/
```

👉 Benefits:

* Code reuse
* Single source of truth
* Easy management

---

## ⚠️ Common Mistakes

* ❌ UI me business logic likhna
* ❌ API calls direct component me karna
* ❌ State properly organize na karna
* ❌ Feature separation ignore karna

---

## 🚀 Pro Tips

* Feature-based structure follow karo
* Har layer ka clear role rakho
* Reusable hooks likho
* Clean architecture maintain karo

---

## 💡 Real Use Cases

* 🛒 E-commerce apps
* 📊 Dashboard apps
* 🔐 Authentication systems
* 🌐 Scalable SaaS apps

---

🔥 **Summary:**
Component + Feature + 4 Layer Architecture =
👉 Scalable & Industry-level Frontend 🚀

---
