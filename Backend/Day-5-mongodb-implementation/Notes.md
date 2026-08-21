# 📘 Backend Day 72 – MongoDB + REST API Notes

---

## 🚀 1. MongoDB Implementation (MVC Architecture)

### 📂 Folder Structure (MVC Pattern)

```
Backend
 └── src
      ├── app.js
      ├── config
      │     └── db.js
      └── models
            └── noteModel.js

server.js / index.js
```

### 🔑 Key Learnings

* **MVC Structure** → Clean & scalable code organization
* **config/db.js** → Used for MongoDB connection
* **Models (noteModel.js)** → Define structure of data
* **Schema Creation** → Blueprint of data fields
* **Create Operation** → Insert data into MongoDB

---

## 🌐 2. REST API – Core Concepts

### 📌 What is REST?

REST (Representational State Transfer) is an **architectural style** used to design APIs using:

* HTTP protocol
* Stateless communication
* Client-server model

---

### 🔑 Key Concepts

#### 1. Resources

* Everything in REST is a **resource**
* Each resource has a unique **URI (endpoint)**

#### 2. Representations

* Data is transferred in formats like:

  * JSON (most common)
  * XML

#### 3. Stateless Communication

* Each request contains **all required data**
* Server does NOT store client state

#### 4. HTTP Methods

Used to perform actions on resources:

* **GET** → Fetch data
* **POST** → Create data
* **PUT/PATCH** → Update data
* **DELETE** → Remove data

#### 5. HTTP Status Codes

* Used to indicate response result

---

## ⚡ 3. HTTP Status Codes

### 📊 Categories

| Code Range | Meaning       |
| ---------- | ------------- |
| 1xx        | Informational |
| 2xx        | Success       |
| 3xx        | Redirection   |
| 4xx        | Client Error  |
| 5xx        | Server Error  |

---

### ✅ Common Status Codes

| Code | Name              | Meaning            | Use Case       |
| ---- | ----------------- | ------------------ | -------------- |
| 200  | OK                | Request successful | GET request    |
| 201  | Created           | Resource created   | POST request   |
| 204  | No Content        | No response body   | DELETE success |
| 301  | Moved Permanently | URL changed        | Redirect       |
| 302  | Found             | Temporary redirect | Redirect       |

---

## 💡 Final Understanding

* Backend = **Structure + Logic + Data Handling**
* REST APIs = **Communication bridge between client & server**
* MongoDB = **Database to store real data**

---

## 🔥 Key Takeaway

👉 From sending requests ➡️ to storing real data in database
👉 Understanding how APIs work internally
👉 Writing clean and scalable backend code

---

## 📈 Formula for Growth

**Consistency + Learning + Building = Success 🚀**

---
