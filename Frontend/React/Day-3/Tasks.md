

---

# 🟢 Easy Tasks (Build Basics Strong)

### 1. Babel Understanding Task

* Write this using **React.createElement**

```js
const el = React.createElement('h1', {}, "Hello Jay");
```

* Then convert it into JSX:

```jsx
<h1>Hello Jay</h1>
```

👉 Goal: Understand both are the same

---

### 2. JSX Practice

* Create a component that returns:

```jsx
<div>
  <h1>Welcome</h1>
  <p>Learning React is fun</p>
</div>
```

👉 Focus: JSX syntax rules (single parent element)

---

### 3. Functional Component Rules

* Create a component named `Header`
* Make sure:

  * File name starts with capital
  * Function name starts with capital
  * Use it like:

```jsx
<Header />
```

---

### 4. Basic Props Passing

* Create `Navbar` component
* Pass a prop:

```jsx
<Navbar nav="Home" />
```

* Display it inside component

---

# 🟡 Medium Tasks (Real Understanding Starts Here)

### 1. Multiple Props + Destructuring

* Create a component:

```jsx
<User name="Jay" age={20} />
```

* Destructure props:

```js
const User = ({ name, age }) => { ... }
```

* Display:
  👉 "Jay is 20 years old"

---

### 2. Dynamic JSX Rendering

* Pass different values:

```jsx
<Navbar nav="Home" />
<Navbar nav="About" />
<Navbar nav="Contact" />
```

👉 Output should change dynamically

---

### 3. Component Composition

* Create:

  * `Navbar`
  * `Footer`
  * `Main`
* Use them inside `App`

```jsx
<App>
  <Navbar />
  <Main />
  <Footer />
</App>
```

---

### 4. Conditional Rendering (Intro Level)

* Pass prop:

```jsx
<User isLoggedIn={true} />
```

* Show:
  👉 "Welcome Back" OR "Please Login"

---

# 🔴 Hard Tasks (Where Dev Thinking Builds)

### 1. Mini Navbar System

* Create Navbar with props:

```jsx
<Navbar nav="Home" />
```

* Show active page dynamically:
  👉 "You are on Home page"

---

### 2. Reusable Card Component

* Create:

```jsx
<Card title="React" desc="JS Library" />
<Card title="JS" desc="Programming Language" />
```

👉 Must reuse same component

---

### 3. JSX vs React.createElement Deep Task

* Write a full UI using:

  * Only `React.createElement`
* Then rewrite same UI using JSX

👉 This will **force deep understanding of Babel**

---

### 4. Nested Props Flow

* Create:

```jsx
<App>
  <Navbar nav="Home" />
</App>
```

* Pass props from App → Navbar → Child component

👉 Understand **data flow**

---

# ⚡ Bonus Challenge (Very Important for You)

Since you're learning full-stack + aiming for strong fundamentals:

👉 Build a **simple static website layout**

* Navbar (with props)
* Hero section
* Footer

⚠️ Only use:

* JSX
* Functional components
* Props

---
