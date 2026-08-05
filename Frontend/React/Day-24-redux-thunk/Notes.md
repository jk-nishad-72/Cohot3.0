# 📘 React Day 24 – API Integration with Redux Toolkit

---

## 🧠 Concept Overview

👉 Is topic me humne sikha:

* Redux Toolkit ke saath API integration
* `createAsyncThunk` (async actions)
* `extraReducers` (API states handle karna)

---

## ❓ Why Redux Thunk?

Redux by default **synchronous** hota hai ❌
👉 API calls async hoti hain

👉 Solution:

### 🔥 `createAsyncThunk`

* Async actions banane ke liye
* API call ko Redux ke saath sync karta hai

---

## ⚙️ createAsyncThunk (Outer Action)

👉 Ye ek **async action creator** hai

---

### 💻 Example: Login API Action

```js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log(credentials, "Outer Action triggered");

      const res = await api.post("/auth/login", credentials);

      localStorage.setItem("token", res.data.accessToken);

      return res.data;

    } catch (error) {
      toast.error("Login Failed");

      return thunkApi.rejectWithValue("Login Failed");
    }
  }
);
```

---

## 🔄 Hydration Action (Persist Login)

```js
export const hydrationAction = createAsyncThunk(
  "/auth/me",
  async (_, thunkApi) => {

    let token = localStorage.getItem("token");

    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    } catch (error) {
      toast.error("Unauthorized user");

      return thunkApi.rejectWithValue("Hydration Failed");
    }
  }
);
```

👉 Use:

* Page refresh ke baad user ko restore karna

---

## 🔥 extraReducers

👉 `extraReducers` ka use hota hai:

* Async actions ke states handle karne ke liye

### 📌 3 States Handle hote hain:

1. **pending** → loading state
2. **fulfilled** → success state
3. **rejected** → error state

---

## 💻 authSlice with extraReducers

```js
import { createSlice } from "@reduxjs/toolkit";
import { hydrationAction, loginUserAction } from "./authOuterAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true
  },

  extraReducers: (builder) => {

    builder

      // 🔐 LOGIN
      .addCase(loginUserAction.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })

      .addCase(loginUserAction.rejected, (state) => {
        state.isLoading = false;
      })

      // 🔄 HYDRATION
      .addCase(hydrationAction.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(hydrationAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })

      .addCase(hydrationAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export default authSlice.reducer;
```

---

## 🪝 Calling Thunk from Custom Hook

```js
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../state/authOuterAction";
import { toast } from "react-toastify";

export const useAuth = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onChange" });

  const loginForm = async (data) => {
    try {

      dispatch(loginUserAction(data)); // 🔥 thunk call

      toast.success("Login successfully");

    } catch (error) {
      console.log("Login Form error", error);
    }

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginForm
  };
};
```

---

## 🔄 Complete Flow (Step-by-Step)

1. User login form submit karta hai
2. `dispatch(loginUserAction(data))` call hota hai
3. Thunk API call karta hai
4. 3 states trigger hoti hain:

   * pending → loading true
   * fulfilled → user store me save
   * rejected → error handle
5. Redux state update hoti hai
6. UI automatically re-render hoti hai

---

## ⚠️ Common Mistakes

* ❌ extraReducers me return miss karna
* ❌ thunk me error handle na karna
* ❌ token store na karna
* ❌ hydration implement na karna

---

## 🚀 Pro Tips

* Token ko headers me pass karo (secure APIs ke liye)
* Loading UI show karo (UX improve)
* Thunk ko separate file me rakho (clean code)
* Redux DevTools use karo debugging ke liye

---

## 💡 Real Use Cases

* 🔐 Authentication system
* 🛒 E-commerce checkout APIs
* 📊 Dashboard data fetching
* 🔄 Real-time API sync

---

🔥 **Summary:**
createAsyncThunk + extraReducers =
👉 Async API handling in Redux made easy 🚀

---
