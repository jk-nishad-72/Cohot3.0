## React Day - 9 RHF(react-hook-form) VALIDATION 

# `useForm()` in React Hook Form


`useForm()` is the **main hook** provided by **React Hook Form (RHF)**. It manages everything related to a form, such as:

* Registering form fields
* Handling form submission
* Validating user input
* Tracking errors
* Resetting the form
* Managing form state

Instead of creating a separate `useState` for every input, `useForm()` handles all the form data internally, making your code cleaner and more performant.

---

# Syntax

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  reset,
  watch,
  setValue,
  getValues,
  formState: { errors, isValid, isDirty, isSubmitting },
} = useForm();
```

`useForm()` returns an object containing many useful methods and properties. You can destructure only the ones you need.

---

# Basic Example

```jsx
import { useForm } from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("name", {
          required: "Name is required",
        })}
        placeholder="Enter Name"
      />

      {errors.name && <p>{errors.name.message}</p>}

      <button>Submit</button>

    </form>
  );
}

export default App;
```

---

# Step-by-Step Explanation

## Step 1: Import `useForm`

```jsx
import { useForm } from "react-hook-form";
```

This imports the hook from the React Hook Form library.

---

## Step 2: Call `useForm()`

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

Here, we call `useForm()` and destructure the methods we need.

Think of `useForm()` as a **toolbox**. It gives you tools like `register`, `handleSubmit`, `reset`, `watch`, etc.

---

## Step 3: Register Inputs

```jsx
<input
  {...register("name")}
  placeholder="Enter Name"
/>
```

### What does `register()` do?

It tells React Hook Form:

* "Track this input."
* "Store its value."
* "Validate it."
* "Include it during form submission."

Without `register()`, RHF doesn't know that this input exists.

---

### Behind the scenes

```jsx
register("name")
```

creates something similar to

```jsx
{
  name: "name",
  onChange: ...,
  onBlur: ...,
  ref: ...
}
```

The spread operator (`...`) attaches all these properties to the input.

---

## Step 4: Add Validation

```jsx
register("name", {
  required: "Name is required",
});
```

Now RHF knows:

* This field is required.
* If it's empty, show `"Name is required"`.

---

## Step 5: Display Error

```jsx
{errors.name && (
  <p>{errors.name.message}</p>
)}
```

If validation fails:

```text
errors = {
  name: {
    type: "required",
    message: "Name is required"
  }
}
```

So,

```jsx
errors.name.message
```

prints:

```text
Name is required
```

---

## Step 6: Handle Submit

```jsx
function onSubmit(data) {
  console.log(data);
}
```

When all validations pass,

`data` becomes

```js
{
  name: "Jay"
}
```

---

## Step 7: `handleSubmit()`

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

`handleSubmit()` performs these steps automatically:

```text
User clicks Submit
        │
        ▼
Checks Validation
        │
 ┌──────┴──────┐
 │             │
 ▼             ▼
Invalid      Valid
 │             │
 ▼             ▼
Show Errors   Call onSubmit(data)
```

If validation fails, `onSubmit()` is **not** called.

---

# Visual Flow

```text
useForm()

        │
        ▼

register()

        │
        ▼

User enters data

        │
        ▼

Validation

        │
        ▼

errors object updated

        │
        ▼

handleSubmit()

        │
        ▼

onSubmit(data)
```

---

# Common Properties Returned by `useForm()`

| Property       | Purpose                                      |
| -------------- | -------------------------------------------- |
| `register`     | Connect inputs to RHF                        |
| `handleSubmit` | Handles form submission                      |
| `reset`        | Clears or resets the form                    |
| `watch`        | Watches input values in real time            |
| `setValue`     | Updates a field programmatically             |
| `getValues`    | Gets current form values                     |
| `trigger`      | Manually triggers validation                 |
| `setError`     | Sets custom errors                           |
| `clearErrors`  | Removes errors                               |
| `control`      | Used with advanced components (`Controller`) |
| `formState`    | Contains form status                         |

---

# Understanding `formState`

```jsx
const {
  formState: {
    errors,
    isValid,
    isDirty,
    isSubmitting,
  },
} = useForm({
  mode: "onChange",
});
```

### `errors`

Stores validation errors.

```js
errors.name.message
```

---

### `isValid`

```jsx
console.log(isValid);
```

Returns

```text
true
```

only when **all fields are valid**.

Useful for:

```jsx
<button disabled={!isValid}>
  Submit
</button>
```

---

### `isDirty`

Becomes

```text
false
```

Initially.

As soon as the user changes any input,

```text
true
```

Useful for:

* Unsaved changes warnings
* Enabling Save buttons only after edits

---

### `isSubmitting`

Returns

```text
true
```

while the form is being submitted.

Useful for showing a loading state:

```jsx
<button disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
```

---

# Why is `useForm()` Better than `useState`?

### Without RHF

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
```

As the form grows, you'll need many state variables, handlers, and manual validation logic.

### With RHF

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

One hook manages the entire form.

**Benefits:**

* ✅ Less boilerplate code
* ✅ Fewer component re-renders
* ✅ Built-in validation
* ✅ Cleaner and more maintainable code
* ✅ Easier to build complex forms

---

## 💡 Interview Tip

> **`useForm()` is the central hook of React Hook Form. It manages form state, validation, submission, and error handling without requiring separate `useState` hooks for each input. This results in better performance, cleaner code, and a simpler developer experience.**
