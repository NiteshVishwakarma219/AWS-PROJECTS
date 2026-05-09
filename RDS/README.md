
# ☁️ Student Management Cloud App

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazonaws)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql)
![Nginx](https://img.shields.io/badge/Nginx-ReverseProxy-darkgreen?style=for-the-badge&logo=nginx)
![PM2](https://img.shields.io/badge/PM2-ProcessManager-blue?style=for-the-badge)


---
# 📚 Project Overview
A **production-style cloud-hosted Student Management System** built using:
- **AWS EC2**
- **AWS RDS MySQL**
- **Node.js**
- **Express.js**
- **PM2**
- **Nginx**
This application allows schools to manage student records through a professional web dashboard.
---

# 🏗️ Cloud Architecture
```text
User Browser
      ↓
Nginx Reverse Proxy (Port 80)
      ↓
Node.js Express Server (Port 3000)
      ↓
AWS RDS MySQL Database
```
---

# 🚀 Features
✅ Add Student Records  
✅ View Student Records  
✅ Delete Student Records  
✅ AWS RDS Database Integration  
✅ Cloud Hosted on EC2  
✅ Professional School Dashboard UI  
✅ REST API Backend  
✅ PM2 Process Management  
✅ Nginx Reverse Proxy Setup  
✅ Production Style Deployment  
---

# 🖥️ Technologies Used
| Technology | Purpose |
|---|---|
| AWS EC2 | Cloud Hosting |
| AWS RDS MySQL | Managed Database |
| Node.js | Backend Runtime |
| Express.js | API Development |
| HTML/CSS/JavaScript | Frontend |
| PM2 | Process Management |
| Nginx | Reverse Proxy |
---

# 📂 Project Structure
```text
student-management-cloud-app/
│
├── public/
│   └── index.html
├── screenshots/
├── index.js
└── Architecture-images
└── README.md
```
---

# ⚙️ Installation & Setup
## 1️⃣ Clone Repository
```bash
git clone YOUR_GITHUB_REPO
```
---

## 2️⃣ Move Into Project
```bash
cd student-management-cloud-app
```
---

## 3️⃣ Install Dependencies
```bash
npm install
```
---

## 4️⃣ Create Environment File
Create:
```text
.env
```
Add:
```env
DB_HOST=YOUR_RDS_ENDPOINT
DB_USER=admin
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=studentdb
```
---

## 5️⃣ Start Application
```bash
node index.js
```
---

# 🌐 Access Application
## Local
```text
http://localhost:3000
```
## AWS EC2
```text
http://YOUR-EC2-PUBLIC-IP
```
---

# 🗄️ Database Schema
```sql
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```
---

# 📡 API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| GET | /students | Get all students |
| POST | /add | Add new student |
| DELETE | /delete/:id | Delete student |
---

# 📸 Project Screenshots

## 🏫 School Dashboard
```text
screenshots/6-school-dashboard-ui.png
```
---

## ☁️ AWS Deployment
```text
screenshots/10-nginx-working.png
```
---

# 🔒 Security Improvements
✅ Environment Variables  
✅ RDS Connection Protection  
✅ PM2 Process Monitoring  
✅ Nginx Reverse Proxy  
---

# 🚀 Future Improvements
- Student Login System
- JWT Authentication
- Admin Dashboard
- Attendance System
- File Uploads
- Docker Deployment
- CI/CD Pipeline
- HTTPS SSL Setup
---

# 💼 Resume Description
> Developed and deployed a cloud-hosted Student Management System using AWS EC2, AWS RDS MySQL, Node.js, Express.js, PM2, and Nginx with production-style deployment architecture and full CRUD functionality.
---

# 👨‍💻 Author
## Nitesh Vishwakarma
- Cloud & DevOps Enthusiast
- AWS Learner
- Backend Developer
---
# ⭐ Support
If you like this project:
⭐ Star the repository  
🍴 Fork the repository  
📢 Share with others  
---

## 🚀 Cloud Full Stack Project
Built with ❤️ using AWS & Node.js
