# ✅ Todo List Application

A clean and user-friendly **Todo List application** built with **React** and **Material UI**, designed to showcase modern front-end development practices, clean architecture, and attention to UI/UX details.

This project is part of my **Front-End Developer portfolio**.

---

## 🚀 Live Demo

**[🔗 View Demo](https://todo-list-215840.netlify.app)**

---

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✅ Mark tasks as completed or incomplete
- 🔍 Filter tasks:
  - All
  - Completed
  - Incomplete
- 💾 Data persistence using **localStorage**
- 🎉 Toast notifications for user actions
- 📱 Responsive and modern design
- 🎨 Intuitive interface with Material UI

---

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Material UI (MUI)** - UI component framework with Snackbar/Alert for notifications
- **localStorage** - For client-side data persistence
- **uuid** - For generating unique identifiers
- **Context API** - For global state management (ToastContext)
- **Vite** - Modern and fast build tool
- **JavaScript (ES6+)** - Programming language

---

## 📦 Installation and Usage

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
```

2. Navigate to the project directory:

```bash
cd todo-list-app
```

3. Install dependencies:

```bash
npm install
```

Main dependencies include:

- `@mui/material` - UI components
- `@emotion/react` & `@emotion/styled` - Styling
- `uuid` - Unique ID generation
- `react` & `react-dom` - React framework

4. Run the application in development mode:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Production Build

To create an optimized production build:

```bash
npm run build
```

---

## 📁 Project Structure

```
todo-list-app/
├── public/
├── src/
│   ├── Components/
│   │   ├── AddTask.jsx
│   │   ├── Theme.jsx
│   │   ├── Todo.jsx
│   │   └── TodoList.jsx
│   ├── Context/
│   │   └── ToastContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Detailed Features

### Task Management

- Simple and intuitive interface for adding tasks
- Ability to edit text of existing tasks
- Quick deletion with visual confirmation
- Toggle to mark as completed/incomplete

### Filters

- **All**: Displays all tasks
- **Completed**: Shows only finished tasks
- **Incomplete**: Shows only ongoing tasks

### Persistence

- Automatic saving to localStorage
- Data persists even after browser closure
- Automatic restoration on application load

### Notifications

- Elegant notifications for each action
- Immediate visual feedback
- Contextual messages adapted to actions

---

## 🎨 Design and UI/UX

- Modern design with Material UI
- Coherent color palette
- Smooth animations and transitions
- Responsive interface (mobile, tablet, desktop)
- Accessibility standards respected
- Elegant contextual notifications (Snackbar)

---

## 🏗️ Architecture and Implementation

### State Management

- **useState** for local task management
- **useEffect** for localStorage synchronization
- **Context API** (ToastContext) for global notifications

### Main Components

- **TodoList.jsx**: Main component managing the list and filters
- **Todo.jsx**: Individual component for each task
- **ToastContext.jsx**: Context provider for notifications
- **Theme.jsx**: Material UI theme configuration

### Key Features

```javascript
// Automatic persistence
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

// Dynamic filtering
let filteredTodos = todos;
if (alignment === "center") {
  filteredTodos = todos.filter((t) => t.isCompleted);
} else if (alignment === "right") {
  filteredTodos = todos.filter((t) => !t.isCompleted);
}
```

---

## 🔄 Future Improvements

- [ ] Add categories/tags for tasks
- [ ] Priority system (high, medium, low)
- [ ] Due dates for tasks
- [ ] Task search functionality
- [ ] Data export/import
- [ ] Dark/light mode
- [ ] Drag & drop to reorganize tasks
- [ ] Statistics and visualizations
- [ ] Multi-language support

---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 👨‍💻 Author

**Your Name**

- Portfolio: https://mekid-portfolio.web.app/
- LinkedIn: https://www.linkedin.com/in/mekid-asma-hayet-014850222/
- Email: mekidasmaahayat1@gmail.com

---

## 🙏 Acknowledgments

- Material UI for the beautiful UI components and notification system
- uuid for unique identifier generation
- The React community for resources and support

---

⭐ **If you like this project, feel free to give it a star on GitHub!**
