# 📝 task-api

Backend API built with **Node.js**, **Express**, **SQLite** and **Socket.IO** to manage tasks with real-time synchronization.

---

## 🚀 Features

- RESTful API for task management (CRUD)
- Real-time communication via WebSockets (Socket.IO)
- Lightweight local database with SQLite
- Modular folder structure and clean code separation

---

## 📁 Project Structure

```
task-api/
├── src/
│   ├── app.js                # Express setup
│   ├── server.js             # HTTP + Socket.IO server
│   ├── db/
│   │   └── database.js       # SQLite connection and table setup
│   ├── models/
│   │   └── Task.js           # Task model logic
│   ├── routes/
│   │   └── tasks.js          # RESTful endpoints for tasks
│   └── sockets/
│       └── socketHandler.js  # WebSocket connection handler
├── tasks.db                  # Auto-generated SQLite database
├── .env                      # Environment configuration (e.g. PORT)
├── .gitignore
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/tu-usuario/task-api.git
cd task-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
```

### 4. Run the project

```bash
npm run dev
```

> The server will be running at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Endpoints

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | `/tasks`       | List all tasks            |
| POST   | `/tasks`       | Create a new task         |
| PUT    | `/tasks/:id`   | Update task status        |
| DELETE | `/tasks/:id`   | Delete a task             |

### Example POST Body:
```json
{
  "titulo": "Learn Git",
  "descripcion": "Commit with conventional messages"
}
```

---

## 📡 Socket.IO Events

| Event         | Payload                     | Description                    |
|---------------|-----------------------------|--------------------------------|
| `newTask`     | `{ ...task }`               | When a new task is created     |
| `taskUpdated` | `{ id, status }`            | When a task is updated         |
| `taskDeleted` | `{ id }`                    | When a task is deleted         |

---

## 🧪 Test WebSocket (optional)

Install [wscat](https://github.com/websockets/wscat):

```bash
npm install -g wscat
```

Connect to your server:

```bash
wscat -c ws://localhost:3000
```

---

## 📦 Scripts

```bash
npm run start   # Start server
npm run dev     # Start server with nodemon
```

---

## 🤝 Contributing

1. Fork this repo
2. Create your branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m "feat: add feature"`
4. Push to the branch: `git push origin feature/feature-name`
5. Create a Pull Request

---

## 🪪 License

MIT

---

## ✍️ Author

Developed by [@davamo](https://github.com/davamo)
