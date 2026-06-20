## 📸 Screenshots

### 🏠 Home Page
![Home](./Screenshot%201405-03-30%20at%2011.29.12%20in%20the%20morning.png)

---

### 🛒 Product View
![Cart](./Screenshot%201405-03-30%20at%2011.29.23%20in%20the%20morning.png)

---

### 📦Cart Page
![Products](./Screenshot%201405-03-30%20at%2011.29.44%20in%20the%20morning.png)

# 🛒 Store Redux Toolkit

This is a **React-based Single Page Application (SPA)** for an online store.  
The project uses **Redux Toolkit** for state management, **Axios** for API requests, and a **custom JSON Server backend** built from a local `db.json` file.

---

## 🚀 Features

- 🛍️ Add products to cart  
- ➖➕ Increase / decrease product quantity  
- 🗑️ Remove items from cart  
- 📦 Fetch products from custom API (db.json)  
- 🗂️ Filter products by categories  
- ⚡ Fully SPA (no page reload)  
- 🔄 Real-time cart updates with Redux Toolkit  

---

## ⚙️ Tech Stack

- React (Vite)
- Redux Toolkit
- Axios
- JSON Server (Fake REST API)

---

## 🖥️ Backend (JSON Server)

The project uses a custom API built with **JSON Server** and local JSON data.

### 📁 Server Structure

### ▶️ Run Backend and Frontend
```bash
cd server
npx json-server --watch db.json --port 5000


Run Frontend:
npm run dev
