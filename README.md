# 📝 Task Manager App (Django + React + Docker)

A full-stack Task Manager web application built using:

- Backend: Django + Django REST Framework
- Frontend: React (Vite)
- Database: SQLite / PostgreSQL (Docker optional)
- Containerization: Docker + Docker Compose

---

# 🚀 Features

- Add tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed/incomplete
- Persistent storage
- REST API backend
- Responsive React UI

---

# 🧱 Project Structure

project-root/
│
├── frontend/ # React app
├── project/ # Django backend
├── docker-compose.yaml
├── requirements.txt
├── README.md
└── .gitignore


---

# ⚙️ Setup Instructions

## 🔹 1. Clone repo
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

🔹 2. Run using Docker (Recommended)
docker-compose up --build

🌐 Access App
Frontend: http://localhost:3000
Backend API: http://localhost:8000/api/

🔧 Manual Setup (Optional)
Backend
cd project
pip install -r requirements.txt
python manage.py runserver

Frontend
cd frontend
npm install
npm run dev

📡 API Endpoints
Method	Endpoint	Description
GET	/api/tasks/	Get all tasks
POST	/api/tasks/	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task

🐳 Docker Services
backend (Django API)
frontend (React UI)
db (optional PostgreSQL)

👨‍💻 Author

Aditya Kaintura


---

