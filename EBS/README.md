# 💽 AWS EBS – Elastic Block Storage (Data Persistence Project)

👨‍💻 Nitesh Vishwakarma  
Cloud / IT Support Engineer (Fresher) | AWS | Linux | Cloud Operations  
📧 niteshvishwakarma8574@gmail.com  
🔗 LinkedIn: linkedin.com/in/nitesh1vishwakarma  
🔗 GitHub: github.com/NiteshVishwakarma219  

---

## 🚀 PROJECT OVERVIEW  
This project demonstrates AWS **Elastic Block Storage (EBS)** by attaching persistent storage to an EC2 instance and verifying that data remains safe even after system restart.

It simulates real-world cloud storage systems used in production environments for databases, applications, and file storage.

---

## 🎯 OBJECTIVE  
- Attach EBS volume to EC2 instance  
- Format and mount storage in Linux  
- Store data inside EBS volume  
- Verify data persistence after restart  

---

## 🏗️ ARCHITECTURE  
User → EC2 Instance → Attached EBS Volume → Mounted File System (/data) → Persistent Storage  

![AWS EBS Architecture](Screenshots/architecture.png)
---

## ☁️ AWS SERVICES USED  
- Amazon EC2  
- Amazon EBS (Elastic Block Storage)  
- Linux (Amazon Linux 2)  
- EC2 Instance Connect  

---

## 🛠️ IMPLEMENTATION STEPS  

✔ Launched EC2 Linux instance  
✔ Created 5GB EBS volume  
✔ Attached volume to EC2 instance  
✔ Verified disk using `lsblk`  
✔ Formatted and mounted EBS volume  
✔ Created directory `/data`  
✔ Stored test file in EBS storage  
✔ Restarted instance and verified data persistence  

---

## 💡 KEY LINUX COMMANDS USED  

lsblk  
sudo mkfs -t ext4 /dev/xvdf  
sudo mkdir /data  
sudo mount /dev/xvdf /data  
echo "Hello from EBS Storage" | sudo tee /data/file.txt  
cat /data/file.txt  

---

## 📸 PROOF OF WORK (SCREENSHOTS INCLUDED)  

✔ EC2 instance launch  
✔ EBS volume creation  
✔ Volume attachment to EC2  
✔ EC2 Instance Connect session  
✔ Disk detection using `lsblk`  
✔ Mounting EBS volume  
✔ File creation in EBS storage  
✔ Data persistence after restart  

---

## 📁 PROJECT STRUCTURE  

EBS/  
│  
├── README.md  
└── screenshots/  
    ├── ec2-launch.png  
    ├── ebs-volume-created.png  
    ├── ebs-attached.png  
    ├── ec2-connect.png  
    ├── lsblk-output.png  
    ├── mount-volume.png  
    ├── ebs-data-created.png  
    └── data-persistence.png  

---

## 💡 KEY LEARNINGS  
- AWS Elastic Block Storage (EBS) concepts  
- Difference between instance storage vs EBS storage  
- Linux disk management and mounting  
- Data persistence in cloud environments  
- Real-world cloud storage architecture  

---

## 🌍 REAL-WORLD USE CASE  
EBS is widely used in production systems for:  
- Database storage (MySQL, PostgreSQL)  
- Application persistent storage  
- Backup and recovery systems  
- Enterprise-level cloud applications  

---

## 🎯 OUTCOME  
Successfully implemented a **persistent cloud storage system using AWS EBS**, ensuring data remains safe even after EC2 restart or shutdown.

---

## 🔗 CONNECT  
📧 Email: niteshvishwakarma8574@gmail.com  
🔗 LinkedIn: linkedin.com/in/nitesh1vishwakarma  

---

⭐ Part of AWS Hands-on Cloud Projects Portfolio  
☁️ Continuously building real-world cloud infrastructure skills  