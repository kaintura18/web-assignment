# 📝 Task Manager App  
### Django + React + Docker

A full-stack task management application built with **Django REST Framework** for the backend, **React (Vite)** for the frontend, and **Docker** for containerization.

---

## 🚀 Features

✔ Create tasks  
✔ Edit tasks  
✔ Delete tasks  
✔ Mark tasks as completed / incomplete  
✔ Persistent storage  
✔ REST API backend  
✔ Responsive and clean UI  

---
## 🌐 Screenshot

<img width="1772" height="928" alt="image" src="https://github.com/user-attachments/assets/e465d7a8-e7d5-42b5-b759-6ab0d562c2be" />


## 🧱 Project Structure

project-root/  
frontend/ (React Vite App)  
backend/ (Django REST API)  
docker-compose.yml  
requirements.txt  
README.md  

---

## ⚙️ Tech Stack

**Frontend:** React (Vite), Axios, CSS  
**Backend:** Django, Django REST Framework  
**Database:** SQLite / PostgreSQL  
**DevOps:** Docker, Docker Compose  

---

## 🐳 Run with Docker (Recommended)

### Step 1: Build and Start Containers
docker-compose up --build  

### Step 2: Stop Containers
docker-compose down  

---

## 🌐 Access Application

Frontend → http://localhost:3000  
Backend → http://localhost:8000/api/  

---

## 🔧 Manual Setup (Without Docker)

### Backend Setup
cd backend  
pip install -r requirements.txt  
python manage.py makemigrations  
python manage.py migrate  
python manage.py runserver  

---

### Frontend Setup
cd frontend  
npm install  
npm run dev  

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks/ | Fetch all tasks |
| POST | /api/tasks/ | Create new task |
| PUT | /api/tasks/<id>/ | Update task |
| DELETE | /api/tasks/<id>/ | Delete task |

---

## 📌 Future Improvements

- 🔐 JWT Authentication  
- 📅 Due dates & reminders  
- 🎯 Drag & drop Kanban board  
- ⚡ Redis caching  
- ☁️ Cloud deployment (Render / Vercel / AWS)  

---

## 🐳 Docker Services

- **backend** → Django API  
- **frontend** → React UI  
- **db** → PostgreSQL (optional)  

---

## 👨‍💻 Author

**Aditya Kaintura**

---

⭐ If you like this project, give it a star!
