# 🚀 Serverless Attendance Management System

A fully serverless cloud-based Attendance Management System built using AWS services.

This project demonstrates real-world cloud architecture using:

- AWS Lambda
- API Gateway
- DynamoDB
- HTML/CSS/JavaScript

The system allows users to mark student attendance through a modern web interface while storing records securely in DynamoDB.

---

# 🌐 Project Overview

The application is designed using a serverless architecture where:

Frontend → API Gateway → Lambda → DynamoDB

This eliminates the need for traditional servers and enables scalable cloud-native application deployment.

---

# 🏗️ Architecture

```text
Frontend (HTML/CSS/JavaScript)
            │
            ▼
      Amazon API Gateway
            │
            ▼
        AWS Lambda
            │
            ▼
      Amazon DynamoDB
```

---

# ✨ Features

✅ Cloud-Based Attendance Management  
✅ Fully Serverless Architecture  
✅ Real-Time Attendance Submission  
✅ REST API Integration  
✅ Modern Responsive UI  
✅ DynamoDB Data Storage  
✅ CORS Enabled API  
✅ IAM Role Security  
✅ Lightweight and Fast Deployment  
✅ Beginner-Friendly AWS Project

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Frontend Structure |
| CSS3 | Styling & Responsive UI |
| JavaScript | API Integration |
| AWS Lambda | Backend Compute |
| API Gateway | REST API Service |
| DynamoDB | NoSQL Database |
| IAM | Permissions & Security |

---

# 📂 Project Structure

```text
attendance-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ⚙️ AWS Services Used

## 1. AWS Lambda

Used to:
- Process attendance requests
- Validate incoming data
- Insert records into DynamoDB

---

## 2. Amazon API Gateway

Used to:
- Expose REST API endpoint
- Handle HTTP POST requests
- Connect frontend with Lambda

---

## 3. Amazon DynamoDB

Used to:
- Store attendance records
- Maintain scalable NoSQL database
- Save student details with timestamps

---

# 🧠 Workflow

```text
User fills attendance form
          ↓
Frontend sends POST request
          ↓
API Gateway receives request
          ↓
Lambda function executes
          ↓
Attendance stored in DynamoDB
          ↓
Success response shown on dashboard
```

---

# 📸 Screenshots

## Dashboard UI
(Add screenshot here)

```text
screenshots/dashboard.png
```

---

## DynamoDB Records
(Add screenshot here)

```text
screenshots/dynamodb-records.png
```

---

## API Gateway Configuration
(Add screenshot here)

```text
screenshots/api-gateway.png
```

---

# 🚀 Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/serverless-attendance-system.git
```

---

## 2. Open Project Folder

```bash
cd serverless-attendance-system
```

---

## 3. Update API URL

Open:

```text
script.js
```

Replace:

```javascript
YOUR_API_URL
```

with your AWS API Gateway Invoke URL.

---

## 4. Run Project

Use Live Server in VS Code

OR simply open:

```text
index.html
```

---

# 📦 DynamoDB Schema

| Attribute | Type |
|---|---|
| attendanceId | String |
| student_name | String |
| course | String |
| status | String |
| date | String |

---

# 🔐 Security

- IAM Roles used for Lambda permissions
- CORS enabled for API access
- No hardcoded AWS credentials
- Serverless architecture reduces attack surface

---

# 📈 Future Improvements

- Admin Dashboard
- Attendance Analytics
- Authentication System
- Student Photo Upload
- Export Reports
- CloudWatch Monitoring
- SNS Notifications
- Role-Based Access

---

# 🧪 Sample API Request

```json
{
  "student_name": "Nitesh Vishwakarma",
  "course": "BCA",
  "status": "Present"
}
```

---

# ✅ Sample API Response

```json
{
  "message": "Attendance Recorded Successfully"
}
```

---

# 🎯 Learning Outcomes

This project helped in understanding:

- Serverless Computing
- Cloud-Native Application Design
- AWS IAM & Permissions
- REST API Development
- Frontend + Cloud Integration
- DynamoDB Operations
- Real-World Cloud Debugging

---

# 👨‍💻 Author

## Nitesh Vishwakarma

Cloud & DevOps Enthusiast  
AWS | DevOps | Linux | Python | Web Development

---

# ⭐ If You Like This Project

Give this repository a ⭐ on GitHub and connect with me on LinkedIn.