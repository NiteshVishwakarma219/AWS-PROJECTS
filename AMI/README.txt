# 🚀 AMI Auto Backup System (AWS Project)

## 📌 Project Overview
This project demonstrates how to use AWS Amazon Machine Image (AMI) to create a backup of a running EC2 instance and restore it in case of failure. It simulates a real-world disaster recovery scenario used in cloud environments.

---

## 🎯 Objective
To implement a cloud-based backup and recovery solution using AMI, ensuring fast restoration of EC2 instances with identical configuration and application setup.

---

## 🧠 Key Concepts Covered
- Amazon Machine Image (AMI)
- EC2 Instance Backup
- Disaster Recovery Strategy
- Cloud Infrastructure Reliability
- System Replication in AWS

---

## 🏗️ Architecture

EC2 Instance (Web Server)
        │
        ▼
Create AMI (Snapshot Backup)
        │
        ▼
Stored in AWS AMI Repository
        │
        ▼
Launch New EC2 from AMI
        │
        ▼
Fully Restored Application

---

## ⚙️ AWS Services Used
- Amazon EC2
- Amazon Machine Image (AMI)
- AWS Management Console

---

## 🛠️ Step-by-Step Implementation

### 1. Launch EC2 Instance
- Selected Amazon Linux 2
- Installed Apache Web Server
- Deployed sample web page

### 2. Create AMI
- Selected running EC2 instance
- Created image (AMI backup)
- Waited until status became "Available"

### 3. Simulate Failure
- Terminated original EC2 instance

### 4. Restore System
- Launched new EC2 instance from AMI
- Verified same configuration and website

---

## 📸 Screenshots
- EC2 Instance Running
- Web Server Output
- AMI Creation Process
- AMI Available Status
- New EC2 from AMI
- Successful Recovery

---

## 🔁 Result
Successfully restored a fully functional EC2 instance using AMI with identical configuration, proving effective disaster recovery capability.

---

## 💡 Key Learning Outcome
- Understanding of AWS backup strategy using AMI
- Real-world disaster recovery implementation
- Importance of system replication in cloud environments

---

## 📊 Real-World Use Case
Organizations use AMI to:
- Recover failed servers instantly
- Deploy identical environments at scale
- Maintain high availability systems

---

## 👨‍💻 Author
Nitesh Vishwakarma  
Cloud / DevOps Enthusiast (Fresher)  
AWS | Linux | Cloud Operations