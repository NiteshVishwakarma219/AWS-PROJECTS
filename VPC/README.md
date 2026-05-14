# Production-Grade Highly Available 3-Tier AWS VPC Architecture

## Project Overview

This project demonstrates a production-grade AWS cloud infrastructure using a custom VPC with public and private subnets across multiple Availability Zones.

The architecture is designed following real-world cloud and DevOps best practices including:

- High Availability
- Secure Networking
- Private Infrastructure
- Load Balancing
- Auto Scaling
- Monitoring and Logging

This project simulates how modern companies deploy scalable and secure applications on AWS.

---

# Architecture Diagram

![Architecture](architecture/architecture-diagram.png)

---

# AWS Services Used

| Service | Purpose |
|----------|----------|
| VPC | Custom private network |
| EC2 | Application servers |
| RDS | Managed database |
| Application Load Balancer | Traffic distribution |
| Auto Scaling Group | High availability |
| NAT Gateway | Private subnet internet access |
| Internet Gateway | Public internet connectivity |
| CloudWatch | Monitoring |
| VPC Flow Logs | Network logging |
| Security Groups | Instance firewall |
| Route Tables | Traffic routing |

---

# Architecture Design

```text
                    INTERNET
                        │
                Internet Gateway
                        │
          ┌─────────────┴─────────────┐
          │                           │
   Public Subnet AZ1          Public Subnet AZ2
          │                           │
      Load Balancer             Load Balancer
          │                           │
   NAT Gateway AZ1            NAT Gateway AZ2
          │                           │
   Private App AZ1            Private App AZ2
          │                           │
         Private Database Subnets
```

---

# Features

- Custom VPC Architecture
- Public and Private Subnets
- Multi-AZ Deployment
- Application Load Balancer
- NAT Gateway
- Bastion Host
- Auto Scaling
- Secure Security Groups
- CloudWatch Monitoring
- VPC Flow Logs
- Production-Level Network Design

---

# Project Structure

```text
aws-vpc-3tier-production-project/
│
├── README.md
├── architecture/
│   ├── architecture-diagram.png
│   ├── vpc-design.png
│
├── screenshots/
│   ├── 01-vpc-created.png
│   ├── 02-subnets-created.png
│   ├── 03-internet-gateway.png
│   ├── 04-route-table-public.png
│   ├── 05-nat-gateway.png
│   ├── 06-private-route-table.png
│   ├── 07-security-groups.png
│   ├── 08-bastion-host.png
│   ├── 09-private-ec2.png
│   ├── 10-rds-created.png
│   ├── 11-load-balancer.png
│   ├── 12-target-group.png
│   ├── 13-auto-scaling.png
│   ├── 14-cloudwatch-dashboard.png
│   ├── 15-vpc-flow-logs.png
│   ├── 16-final-website.png
│
├── scripts/
│   ├── install-apache.sh
│   ├── app-setup.sh
│
└── documentation/
    ├── setup-guide.md
    ├── troubleshooting.md
```

---

# Step-by-Step Setup

---

## Step 1 — Create VPC

- Created custom VPC:
  
```text
10.0.0.0/16
```

Screenshot:
```text
01-vpc-created.png
```

---

## Step 2 — Create Subnets

Created:

### Public Subnets
- 10.0.1.0/24
- 10.0.2.0/24

### Private App Subnets
- 10.0.3.0/24
- 10.0.4.0/24

### Private DB Subnets
- 10.0.5.0/24
- 10.0.6.0/24

Screenshot:
```text
02-subnets-created.png
```

---

## Step 3 — Create Internet Gateway

- Created and attached Internet Gateway to VPC.

Screenshot:
```text
03-internet-gateway.png
```

---

## Step 4 — Configure Public Route Table

Added route:

```text
0.0.0.0/0 → Internet Gateway
```

Associated with:
- Public Subnet A
- Public Subnet B

Screenshot:
```text
04-route-table-public.png
```

---

## Step 5 — Create NAT Gateways

Created:
- NAT Gateway A
- NAT Gateway B

Used for:
- Private subnet internet access

Screenshot:
```text
05-nat-gateway.png
```

---

## Step 6 — Configure Private Route Tables

Configured routes:

```text
0.0.0.0/0 → NAT Gateway
```

Screenshot:
```text
06-private-route-table.png
```

---

## Step 7 — Create Security Groups

Created:
- ALB Security Group
- Application Security Group
- Database Security Group
- Bastion Security Group

Screenshot:
```text
07-security-groups.png
```

---

## Step 8 — Create Bastion Host

- Launched EC2 in public subnet
- Enabled SSH access

Screenshot:
```text
08-bastion-host.png
```

---

## Step 9 — Launch Private EC2 Instances

Created:
- App Server A
- App Server B

Features:
- No public IP
- Private subnet deployment

Screenshot:
```text
09-private-ec2.png
```

---

## Step 10 — Install Apache Web Server

Installed Apache:

```bash
sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

Created test website:

```bash
echo "<h1>Production VPC Project</h1>" | sudo tee /var/www/html/index.html
```

---

## Step 11 — Create Target Group

Configured:
- HTTP protocol
- Port 80
- Registered private EC2 instances

Screenshot:
```text
12-target-group.png
```

---

## Step 12 — Create Application Load Balancer

Configured:
- Internet-facing ALB
- Multi-AZ deployment
- Attached target group

Screenshot:
```text
11-load-balancer.png
```

---

## Step 13 — Configure Auto Scaling

Configured:
- Minimum: 2
- Maximum: 4
- Desired: 2

Screenshot:
```text
13-auto-scaling.png
```

---

## Step 14 — Configure CloudWatch Monitoring

Monitored:
- CPU Utilization
- Network Traffic
- Instance Health

Screenshot:
```text
14-cloudwatch-dashboard.png
```

---

## Step 15 — Enable VPC Flow Logs

Configured:
- VPC Flow Logs
- CloudWatch integration

Screenshot:
```text
15-vpc-flow-logs.png
```

---

## Step 16 — Final Website Testing

Accessed website using:

```text
Application Load Balancer DNS
```

Screenshot:
```text
16-final-website.png
```

---

# Security Best Practices Implemented

- Private subnets for backend resources
- Restricted Security Groups
- Bastion Host for SSH
- Database isolation
- Multi-AZ deployment
- NAT Gateway for outbound internet
- No public database exposure

---

# Monitoring and Logging

Implemented:
- CloudWatch Dashboard
- VPC Flow Logs
- EC2 Monitoring
- Network Traffic Monitoring

---

# Challenges Faced

- Route table configuration
- Security Group connectivity
- NAT Gateway routing
- Private subnet internet access
- Load balancer health checks

---

# Learning Outcomes

Through this project I learned:

- AWS Networking
- VPC Design
- Multi-AZ Architecture
- High Availability
- Secure Cloud Infrastructure
- Load Balancer Configuration
- Auto Scaling
- Cloud Monitoring
- Production-Level Deployment

---

# Future Improvements

- Add HTTPS using ACM
- Deploy Docker containers
- Add CI/CD Pipeline
- Infrastructure as Code using Terraform
- Kubernetes Integration
- WAF Integration

---

# Author

Nitesh Vishwakarma

BCA Student | Cloud & DevOps Learner

---

# Connect With Me

- LinkedIn
- GitHub

---

# Final Result

Successfully built a highly available and secure AWS cloud infrastructure using a production-grade 3-tier VPC architecture.
