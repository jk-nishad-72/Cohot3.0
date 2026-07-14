n de

# React Day 11 — Context API (Solving Prop Drilling)

## 1. The Problem: Prop Drilling

**Prop Drilling** happens when you pass data from a parent component down through multiple layers of child components, even if the intermediate components don't need that data themselves — they just pass it along.

```
App (has user data)
  └── Dashboard (doesn't need user data, just passes it)
        └── Sidebar (doesn't need user data, just passes it)
              └── Profile (finally uses user data)
```

```jsx
// Prop drilling example - painful!
function App() {
  const user = { name: "Rahul", role: "Admin" };
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Sidebar user={user} />; // just passing through
}

function Sidebar({ user }) {
  return <Profile user={user} />; // just passing through
}

function Profile({ user }) {
  return <h2>{user.name} - {user.role}</h2>; // actually uses it
}
```

**Issues with prop drilling:**

- Intermediate components become cluttered with props they don't use.
- Hard to maintain/refactor — renaming or restructuring breaks the chain.
- Doesn't scale well in large applications.

---

## 2. Two Types of State Sharing

| Type                                                             | Meaning                                                            | Tools                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------- |
| **DSM** (Direct State Management / Local Share Management) | Sharing state within a component tree using React's built-in tools | **Context API**                         |
| **GSM** (Global Share Management)                          | Sharing state across the entire app using external libraries       | **Redux, Recoil, Zustand, Jotai, MobX** |

- **Context API** is best for small-to-medium apps or specific feature-level state (theme, auth, language).
- **GSM libraries** (Redux, Zustand, Recoil) are better for large, complex apps with frequent state updates, middleware needs, dev tools, etc.

---

## 3. Context API — Step-by-Step

### Step 1: Create a `context` folder

Organize all your context files in one place.

```
src/
 └── context/
      ├── UserContext.jsx
      └── ThemeContext.jsx
```

### Step 2: Create your Context (Store) using `createContext()`

```jsx
// context/UserContext.jsx
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

### Step 3: Create your Provider

The Provider is a wrapper component that:

- Accepts `children` (the components it will wrap).
- Returns `<MyStore.Provider value={{...}}>` so all children can access the data.

```jsx
// context/UserContext.jsx
import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Rahul", role: "Admin" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
```

> ⚠️ Note: `Provider` starts with a **capital P** — `<UserContext.Provider>`, not `.provider`.

### Step 4: Hold Data Inside the Context Provider

The state (`useState`, `useReducer`, or any logic) lives inside the Provider component. This is your **single source of truth**.

### Step 5: Wrap Your App with the Provider

```jsx
// App.jsx
import { UserProvider } from "./context/UserContext";
import Dashboard from "./Dashboard";

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;
```

Now **every** child inside `<UserProvider>` — no matter how deeply nested — can access `user` and `setUser` directly.

### Step 6: Consume the Context using `useContext()`

```jsx
// Profile.jsx
import { useContext } from "react";
import UserContext from "./context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>{user.name} - {user.role}</h2>
      <button onClick={() => setUser({ ...user, role: "Super Admin" })}>
        Promote
      </button>
    </div>
  );
}

export default Profile;
```

No props passed through `Dashboard` or `Sidebar` at all — prop drilling solved! 🎉

---

## 4. Full Working Example

```jsx
// context/ThemeContext.jsx
import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
```

```jsx
// App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

```jsx
// Navbar.jsx
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === "light" ? "#fff" : "#222", color: theme === "light" ? "#000" : "#fff" }}>
      <h3>My App</h3>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"}</button>
    </nav>
  );
}

export default Navbar;
```

```jsx
// Content.jsx
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);
  return <p>Current theme is: {theme}</p>;
}

export default Content;
```

---

## 5. Custom Hook Pattern (Best Practice)

Instead of importing `useContext` + `UserContext` everywhere, create a custom hook:

```jsx
// context/UserContext.jsx
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// custom hook
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
```

```jsx
// Profile.jsx
import { useUser } from "./context/UserContext";

function Profile() {
  const { user, setUser } = useUser(); // cleaner!
  return <h2>{user?.name}</h2>;
}
```

---

## 6. DSM vs GSM — Quick Comparison

| Feature              | Context API (DSM)                          | Redux / Zustand / Recoil (GSM)              |
| -------------------- | ------------------------------------------ | ------------------------------------------- |
| Setup complexity     | Low                                        | Medium–High                                |
| Boilerplate          | Minimal                                    | More (Redux especially)                     |
| Performance at scale | Can cause unnecessary re-renders           | Optimized for large apps                    |
| DevTools             | Limited                                    | Excellent (Redux DevTools)                  |
| Best for             | Theme, Auth, Language, small feature state | Complex, app-wide, frequently updated state |
| Learning curve       | Easy                                       | Moderate to steep (Redux)                   |

---

## 7. Common Mistakes to Avoid

- ❌ Forgetting to wrap `App` with the `Provider`.
- ❌ Writing `.provider` instead of `.Provider` (case-sensitive).
- ❌ Calling `useContext` outside of the Provider's tree (returns `undefined`).
- ❌ Putting **every** piece of state into one giant Context — causes unnecessary re-renders across unrelated components. Split contexts by concern (UserContext, ThemeContext, CartContext, etc.).
- ❌ Not memoizing the `value` object when performance matters:

```jsx
// Better for performance - avoids re-creating object every render
const value = useMemo(() => ({ user, setUser }), [user]);
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
```

---

## 8. Practice Projects

### 🟢 Easy

1. **Theme Switcher** — Build a light/dark mode toggle using Context API. The toggle button should be in the Navbar, but the theme should affect the entire app's background and text color.
2. **Counter with Context** — Move a simple counter (increment/decrement/reset) from local `useState` into a Context so multiple sibling components can display and update the same count.
3. **Language Selector** — Create a `LanguageContext` that stores `"en"` or `"hi"`. Display a few static strings that change based on the selected language, accessible from at least 3 nested components.

### 🟡 Medium

1. **Authentication Flow** — Build an `AuthContext` that stores `isLoggedIn`, `user`, `login()`, and `logout()`. Protect a `Dashboard` route so it only renders if logged in, and show a `Login` page otherwise. Use it across a Navbar (show user name / logout button) and Dashboard (show welcome message).
2. **Shopping Cart** — Create a `CartContext` with `items`, `addToCart()`, `removeFromCart()`, `getTotal()`. Build a `ProductList` component (adds items), a `Navbar` (shows cart item count), and a `CartPage` (lists items + total) — all reading from the same context.
3. **Multi-Step Form Wizard** — Use Context to hold form data across 3 separate step components (Personal Info → Address → Review), so data persists as the user navigates between steps without prop drilling.

### 🔴 Hard

1. **Combine Context + useReducer** — Build a `TodoContext` using `useReducer` (actions: ADD, DELETE, TOGGLE, EDIT, FILTER) instead of `useState`. Create separate components for `TodoInput`, `TodoList`, `TodoFilter`, `TodoStats` — all consuming the same reducer-powered context.
2. **Nested/Multiple Contexts** — Build an app with `AuthContext`, `ThemeContext`, and `CartContext` all active simultaneously. Practice composing multiple providers cleanly (e.g., an `AppProviders.jsx` that combines them), and ensure components only re-render when their *relevant* context changes.
3. **Mini E-commerce App with Context as Global Store** — Full app: `ProductContext` (fetch products from an API), `CartContext`, `AuthContext`, `WishlistContext`. Include search/filter functionality, protected checkout page, and persist cart data to `localStorage` synced with Context state.
4. **Context API → Then Refactor to Zustand/Redux** — Build the Todo app (Hard #1) fully in Context API, then refactor the exact same app to use **Zustand** (or Redux Toolkit). Compare boilerplate, re-render behavior using React DevTools Profiler, and note the differences in your own words.

---

## 9. Quick Recap Cheat Sheet

```
1. Create context      → const MyContext = createContext();
2. Create provider     → function MyProvider({ children }) { ... return <MyContext.Provider value={{...}}>{children}</MyContext.Provider> }
3. Wrap app             → <MyProvider><App /></MyProvider>
4. Consume in child     → const data = useContext(MyContext);
5. (Optional) Custom hook → function useMyContext() { return useContext(MyContext); }
```

**DSM (local):** Context API
**GSM (global):** Redux / Recoil / Zustand
