# ☁️ AWS Student Management System

A full-stack cloud-based Student Management System built using **Node.js, Express, AWS DynamoDB, and AWS EC2**, with a modern admin dashboard UI.

---

## 🚀 Project Overview

This project is a cloud-native application that allows admins to:

- ✅ Add new students
- 📊 View all students
- 💾 Store student data in AWS DynamoDB
- 🌐 Access system via EC2 deployment
- 🎨 Use a modern dashboard UI

---

## 🏗️ Architecture
┌─────────────────────────────────┐
│  Frontend (HTML/CSS/JS)         │
└────────────┬────────────────────┘
↓
┌─────────────────────────────────┐
│  Node.js + Express Backend      │
└────────────┬────────────────────┘
↓
┌─────────────────────────────────┐
│  AWS EC2 (Hosting Server)       │
└────────────┬────────────────────┘
↓
┌─────────────────────────────────┐
│  AWS DynamoDB (Database)        │
└─────────────────────────────────┘

---

## ⚙️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Backend** | Node.js, Express.js |
| **Cloud** | AWS EC2, AWS DynamoDB |
| **IAM** | AWS IAM Roles & Policies |
| **Version Control** | Git, GitHub |

---

## 📦 Features

- 🎓 **Student Registration System** - Add students with details
- 📋 **Student Records Dashboard** - View all registered students
- ☁️ **Cloud Database Storage** - Persistent data in DynamoDB
- 🌐 **Web-based UI** - Responsive and modern interface
- 🔐 **AWS IAM Role-based Access** - Secure database connections
- 🚀 **Deployed on EC2** - Production-ready hosting

---

## 🧠 AWS Services Used

| Service | Purpose |
|---------|---------|
| **Amazon EC2** | Virtual server for hosting the application |
| **Amazon DynamoDB** | NoSQL database for student records |
| **AWS IAM** | Role-based access control and security |

---

## 📂 Project Structure
student-management-system/
│
├── public/              # Frontend files (HTML, CSS, JS)
│   ├── index.html       # Main dashboard page
│   ├── styles.css       # Styling
│   └── script.js        # Client-side logic
│
├── routes/              # API routes
│   └── students.js      # Student CRUD operations
│
├── server.js            # Backend entry point
├── package.json         # Dependencies and scripts
├── .gitignore           # Ignored files
└── README.md            # Project documentation


