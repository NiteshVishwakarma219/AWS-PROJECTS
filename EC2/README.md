💻 AWS EC2 – Linux Web Server Deployment (Hands-on Project)
👨‍💻 Nitesh Vishwakarma

Cloud / IT Support Engineer (Fresher) | AWS | Linux | Cloud Operations
📧 niteshvishwakarma8574@gmail.com

🔗 LinkedIn: linkedin.com/in/nitesh1vishwakarma
🔗 GitHub: github.com/NiteshVishwakarma219

🚀 Project Overview

This project demonstrates the deployment of a Linux-based web server on AWS EC2, simulating a real-world cloud hosting environment.

The objective is to host a publicly accessible web application using AWS compute services with proper security configuration and cloud best practices.

🎯 Objective

To deploy and configure a cloud-based Linux server using AWS EC2 that:

Hosts a static web application
Is accessible via public internet
Uses secure network configuration (Security Groups)
Demonstrates real cloud deployment workflow
Uses EC2 Instance Connect for access
🏗️ Architecture Diagram
User (Browser)
     ↓
Internet
     ↓
Security Group (Firewall Rules)
     ↓
AWS EC2 Linux Instance
     ↓
Apache Web Server
     ↓
Hosted Web Page
☁️ AWS Services Used
Amazon EC2 (Elastic Compute Cloud)
Security Groups (Firewall Rules)
Amazon Linux 2
Apache HTTP Server
EC2 Instance Connect (Browser-based access)
🛠️ Step-by-Step Implementation
🔹 Step 1: Launch EC2 Instance
Selected Amazon Linux 2 AMI
Instance Type: t2.micro (Free Tier)
Configured default VPC
No SSH key required (using EC2 Instance Connect)
🔹 Step 2: Configure Security Group

Inbound Rules:

SSH (22) → My IP (optional)
HTTP (80) → 0.0.0.0/0 (Public access)
🔹 Step 3: Connect to EC2 Instance

Accessed EC2 using:

✔ AWS EC2 Instance Connect (Browser-based terminal)

Path:
AWS Console → EC2 → Instance → Connect → EC2 Instance Connect

🔹 Step 4: Install Web Server
sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
🔹 Step 5: Deploy Web Page
echo "Welcome to AWS EC2 Web Server - Hosted by Nitesh Vishwakarma" | sudo tee /var/www/html/index.html
🔹 Step 6: Verify Deployment

Open browser:

http://<EC2-PUBLIC-IP>

✔ Web page successfully accessible from internet

📸 Proof of Work (Screenshots Included)

The following evidence is included in this project:

EC2 instance launch configuration
Security group inbound rules
Running EC2 instance dashboard
EC2 Instance Connect session
Apache installation in terminal
Web page deployment file creation
Live website running in browser
📁 Project Structure
EC2/
├── README.md
└── screenshots/
    ├── instance-launch.png
    ├── security-group.png
    ├── instance-running.png
    ├── ec2-connect.png
    ├── apache-install.png
    ├── website-created.png
    └── website-running.png
💡 Key Learnings
AWS EC2 instance lifecycle management
Linux server administration basics
Web server deployment (Apache HTTP Server)
Cloud networking fundamentals (Security Groups)
EC2 Instance Connect (browser-based access method)
Public web hosting using AWS cloud infrastructure
🌍 Real-World Use Case

This architecture is commonly used in:

Hosting web applications
Backend server deployment
Development and testing environments
Cloud-based service hosting
Scalable infrastructure setups
🎯 Project Outcome

Successfully deployed a fully functional Linux web server on AWS EC2, accessible publicly over the internet with secure cloud configuration.

🚀 Career Impact

This project demonstrates practical skills relevant for:

Cloud Support Engineer
AWS Cloud Engineer (Fresher)
IT Support / NOC Engineer
DevOps Beginner Roles

It proves hands-on experience in cloud compute, Linux server management, and AWS infrastructure deployment.

🔗 Connect With Me

📧 Email: niteshvishwakarma8574@gmail.com

🔗 LinkedIn: linkedin.com/in/nitesh1vishwakarma

⭐ This project is part of my AWS Hands-on Cloud Portfolio
☁️ Continuously building real-world cloud projects (S3, IAM, ELB, AMI, etc.)