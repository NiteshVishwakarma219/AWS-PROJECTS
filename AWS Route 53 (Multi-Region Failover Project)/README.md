# 🌍 AWS Route 53 Multi-Region Failover Architecture

A production-style highly available cloud architecture built using Amazon Route 53, EC2, Application Load Balancer, and Health Checks with automatic DNS failover between regions.

---

# 🚀 Project Overview

This project demonstrates how to build a highly available and fault-tolerant web application architecture using AWS cloud services.

The architecture automatically redirects traffic to a backup region when the primary region becomes unhealthy.

This project helps understand:

- DNS Management
- Route 53 Routing Policies
- Health Checks
- Multi-Region Deployment
- Disaster Recovery
- High Availability Architecture
- Cloud Networking

---

# 🏗️ Architecture Diagram

```text
                    Users
                       │
                       ▼
                 Amazon Route 53
                       │
         ┌─────────────┴─────────────┐
         │                           │
         ▼                           ▼
 Primary Region                Secondary Region
   (Mumbai)                     (Singapore)

Application Load Balancer   Application Load Balancer
         │                           │
         ▼                           ▼
    EC2 Web Server              Backup EC2 Server
```

---

# ⚡ Features

✅ DNS Management using Route 53  
✅ Automatic Failover Routing  
✅ Health Check Monitoring  
✅ Multi-Region Architecture  
✅ Disaster Recovery Setup  
✅ High Availability Infrastructure  
✅ Application Load Balancer Integration  
✅ CloudWatch Monitoring  

---

# 🛠️ AWS Services Used

| AWS Service | Purpose |
|---|---|
| Route 53 | DNS Management and Failover Routing |
| EC2 | Web Hosting |
| Application Load Balancer | Traffic Distribution |
| VPC | Networking |
| CloudWatch | Monitoring |
| Security Groups | Firewall Rules |

---

# 📌 Project Workflow

1. User requests website through domain name
2. Route 53 checks health of primary region
3. Traffic routed to Mumbai region
4. If primary region becomes unhealthy:
5. Route 53 automatically redirects traffic to Singapore backup region

---

# 🔥 Step-by-Step Implementation

---

# Step 1 — Create VPC

Create networking resources:

- Public Subnets
- Internet Gateway
- Route Tables

---

# Step 2 — Launch EC2 Instances

Launch two EC2 instances:

| Region | Purpose |
|---|---|
| ap-south-1 (Mumbai) | Primary Server |
| ap-southeast-1 (Singapore) | Backup Server |

---

# Step 3 — Install Apache Web Server

Run the following commands on both EC2 instances:

```bash
sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

---

# Step 4 — Create Website Pages

## Primary Server

```bash
echo "Primary Server Running" | sudo tee /var/www/html/index.html
```

## Backup Server

```bash
echo "Backup Server Running" | sudo tee /var/www/html/index.html
```

---

# Step 5 — Create Application Load Balancers

Create:

- Primary ALB
- Secondary ALB

Configure:
- HTTP Listener
- Target Groups
- Health Checks

---

# Step 6 — Configure Route 53 Hosted Zone

Create:
- Public Hosted Zone

Example:
```text
example.com
```

---

# Step 7 — Configure Health Checks

Create health checks for:
- Primary ALB DNS Endpoint

---

# Step 8 — Configure Failover Routing

## Primary Record

- Record Type → A
- Alias → Primary ALB
- Failover Type → Primary

## Secondary Record

- Record Type → A
- Alias → Secondary ALB
- Failover Type → Secondary

---

# 🧪 Testing

---

# Normal Condition

Open website:

Expected Output:

```text
Primary Server Running
```

---

# Failure Simulation

Stop primary EC2 instance.

Expected Output:

```text
Backup Server Running
```

Traffic automatically shifts to backup region.

---

# 📸 Screenshots

Add screenshots of:

- Route 53 Hosted Zone
- DNS Records
- Health Checks
- EC2 Instances
- ALB Configuration
- Website Output
- Failover Demonstration

---

# 📚 Learning Outcomes

After completing this project, you will understand:

- DNS Fundamentals
- Route 53 Routing Policies
- AWS Networking
- Load Balancing
- High Availability
- Disaster Recovery
- Production Cloud Architecture

---

# 🎯 Real-World Use Cases

- Banking Applications
- E-Commerce Platforms
- SaaS Products
- Enterprise Applications
- Global Web Applications

---

# 🔐 Best Practices

✅ Use Alias Records for AWS Resources  
✅ Configure Health Checks  
✅ Use Multiple Regions  
✅ Keep TTL Low During Testing  
✅ Enable Monitoring with CloudWatch  
✅ Use Secure Security Groups  

---

# 📈 Future Improvements

- HTTPS using ACM
- CloudFront CDN
- Auto Scaling Group
- Terraform Automation
- CI/CD Pipeline
- AWS WAF Security
- Multi-AZ Deployment

---

# 📂 Recommended Folder Structure

```text
project/
│
├── architecture/
├── screenshots/
├── scripts/
├── setup-guide/
└── README.md
```

---

# 🧠 Skills Demonstrated

- AWS Route 53
- DNS Management
- Cloud Networking
- Disaster Recovery
- High Availability
- AWS EC2
- Application Load Balancer
- Cloud Architecture

---

# 👨‍💻 Author

Nitesh Vishwakarma

---

# ⭐ Support

If you like this project, give this repository a star ⭐

---

# 📌 Repository Name

```text
aws-route53-multi-region-failover-project
```

---

# 🏷️ GitHub Topics

```text
aws
route53
cloud-computing
devops
dns
high-availability
amazon-web-services
cloud-project
failover
load-balancer
ec2
```