# 📝 Task Management System (Task 02)

A clean, responsive, and performance-optimized task management application built using **React.js** and **Tailwind CSS** during my internship at Arch Technologies. 

This project focuses entirely on native React state management, performance hooks, and browser-side data synchronization.

---

## 🔥 Key Technical Implementations

* **Lazy State Initialization:** Optimized data fetching from `localStorage` inside `useState` to prevent performance bottlenecks on repeated re-renders.
* **Memoized Filtering:** Implemented `useMemo` to efficiently compute active, completed, and general task lists without redundant array iterations.
* **Inline Context Editing:** Features absolute state shifting to toggle between raw text presentation and controlled text update environments (`Enter` to save, `Escape` to cancel).
* **Destructive Guardrails:** Embedded native confirmation handlers (`window.confirm`) to protect persistent application state from accidental data removal.

---

## 🛠️ Hook Utilization Profile

* `useState` — Managing interactive UI variations (Text processing, UI filter selection, and active edit IDs).
* `useEffect` — Offloading state synchronization side-effects safely to local storage arrays.
* `useMemo` — Caching filtered UI results mapping specifically to conditional dependencies (`[tasks, filter]`).

---

## 🚀 Getting Started

1. **Clone the repo:**
```bash
git clone https://github.com/samarkhayam/archtech.git

```
1.2. **Navigate to project:**
```bash
cd todo-app

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run development server:**
```bash
npm run dev

```

