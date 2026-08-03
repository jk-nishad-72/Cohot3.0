
# 📘 React Day 17 – Creating Project using Data Routing

---

## 🧠 Concept: Data Routing

Data Routing (React Router v6.4+) ek advanced approach hai jisme:

* Routing + Data fetching ek saath handle hota hai
* Loaders, actions aur APIs ka use hota hai
* Backend-like control milta hai frontend me

👉 Is project me humne:

* Axios instance banaya
* Interceptors use kiye
* Custom hooks banaye (auth handling ke liye)

---

## ⚙️ Axios Instance (Reusable API Config)

Axios instance banane ka fayda:

* Har baar base URL likhne ki zarurat nahi
* Common config ek jagah manage hota hai

```js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/"
});
```

---

## 🔗 Using Axios Instance

```js
// Products component
let result = await axiosInstance.get('/products');

// Users component
let result = await axiosInstance.get('/users');
```

---

## 🔄 Interceptors in Axios

Interceptors ka use:

* Request send hone se pehle kuch modify karna
* Response aane ke baad handle karna

---

### 1️⃣ Request Interceptor

```js
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request Interceptor ->", config);

    // Example: token attach karna
    // config.headers.Authorization = "Bearer token";

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
```

---

### 2️⃣ Response Interceptor

```js
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor ->", response);

    // response ko return karna important hai
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
```

---

## 🪝 Custom Hook: userAuthHook

Custom hook ka use:

* Logic reuse karne ke liye
* Clean & scalable code structure

---

### 💻 Full Auth Hook Example

```jsx
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { MyContext } from "../context/MyUserContext";

export const userAuthHook = () => {

  let { users, setUsers, loggedUser, setLoggedUser } = useContext(MyContext);
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  });

  // 🔐 Login Logic
  const handleLoginForm = (data) => {

    let userExist = users.find((user) => data.email === user.email);

    if (!userExist) {
      toast.error("User Doesn't exist");
      return;
    }

    if (userExist.password !== data.password) {
      toast.error("Invalid Password");
      return;
    }

    setLoggedUser(userExist);
    localStorage.setItem("loggedUser", JSON.stringify(userExist));
    toast.success("Login Successfully");
    reset();
    navigate("/");
  };

  // 📝 Register Logic
  const handleRegisterForm = (data) => {

    let existingUser = users.find((user) => data.email === user.email);

    if (existingUser) {
      toast.error("User already exists");
      return;
    }

    let newUsers = [...users, { ...data, _id: Date.now() }];

    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    toast.success("Registered Successfully");
    reset();
    navigate("/auth/login");
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    handleLoginForm,
    handleRegisterForm
  };
};
```

---

## 📊 Flow Samjho

### 🔐 Login Flow

1. Form submit hota hai
2. Email check hoti hai users list me
3. Password match hota hai
4. User login → localStorage me store
5. Redirect to Home

---

### 📝 Register Flow

1. Check user already exist ya nahi
2. New user create
3. Context + localStorage update
4. Redirect to login page

---

## ⚠️ Common Mistakes

* ❌ Interceptor me `return response` bhool jana
* ❌ localStorage sync na rakhna
* ❌ wrong import:

```js
import { useNavigate } from "react-router-dom"; // ✅ correct
```

* ❌ sensitive data (password) plain store karna (real apps me avoid)

---

## 🚀 Pro Tips

* Axios instance ko `/utils` ya `/api` folder me rakho
* Interceptors me token handling implement karo
* Custom hooks ko reusable banao (clean architecture)
* Form validation strong rakho (react-hook-form + schema)

---

## 💡 Real Use Cases

* 🔐 Authentication system (Login/Register)
* 🛒 E-commerce apps
* 📊 Dashboard APIs
* 🌐 Scalable frontend architecture

---

🔥 **Summary:**
Axios Instance + Interceptors + Custom Hooks =
👉 Clean, scalable & production-ready frontend architecture

---
