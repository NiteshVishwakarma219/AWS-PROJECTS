# Production-Grade AWS VPC 3-Tier Architecture Setup Guide

## Project Overview

This project demonstrates a production-grade AWS networking infrastructure using a custom VPC with public and private subnets across multiple Availability Zones.

The architecture includes:

- Custom VPC
- Public and Private Subnets
- Internet Gateway
- NAT Gateway
- Bastion Host
- Private EC2 Application Servers
- Application Load Balancer
- Auto Scaling Group
- RDS Database
- CloudWatch Monitoring
- VPC Flow Logs

---

# Architecture

```text
Internet
   ↓
Application Load Balancer
   ↓
Public Subnets
   ↓
Private EC2 Application Servers
   ↓
Private RDS Database
```

---

# AWS Services Used

- Amazon VPC
- Amazon EC2
- Amazon RDS
- Application Load Balancer
- Auto Scaling
- CloudWatch
- IAM
- NAT Gateway

---

# Prerequisites

Before starting:

- AWS Account
- IAM User with AdministratorAccess
- EC2 Key Pair
- Basic Linux Knowledge
- Basic AWS Networking Knowledge

---

# Region Used

```text
ap-south-1 (Mumbai)
```

---

# STEP 1 — Create VPC

Go to:

```text
AWS Console → VPC → Create VPC
```

Configuration:

| Setting | Value |
|---|---|
| Name | Prod-VPC |
| CIDR | 10.0.0.0/16 |

---

# STEP 2 — Create Subnets

## Public Subnets

| Name | CIDR | AZ |
|---|---|---|
| Public-Subnet-A | 10.0.1.0/24 | ap-south-1a |
| Public-Subnet-B | 10.0.2.0/24 | ap-south-1b |

---

## Private App Subnets

| Name | CIDR | AZ |
|---|---|---|
| Private-App-A | 10.0.3.0/24 | ap-south-1a |
| Private-App-B | 10.0.4.0/24 | ap-south-1b |

---

## Private DB Subnets

| Name | CIDR | AZ |
|---|---|---|
| Private-DB-A | 10.0.5.0/24 | ap-south-1a |
| Private-DB-B | 10.0.6.0/24 | ap-south-1b |

Enable Auto Assign Public IP only for public subnets.

---

# STEP 3 — Create Internet Gateway

Create Internet Gateway:

```text
Prod-IGW
```

Attach it to:

```text
Prod-VPC
```

---

# STEP 4 — Configure Public Route Table

Create Route Table:

```text
Public-RT
```

Add Route:

| Destination | Target |
|---|---|
| 0.0.0.0/0 | Internet Gateway |

Associate:
- Public-Subnet-A
- Public-Subnet-B

---

# STEP 5 — Create NAT Gateways

Create NAT Gateways in public subnets.

## NAT-A

| Setting | Value |
|---|---|
| Name | NAT-A |
| Subnet | Public-Subnet-A |

Allocate Elastic IP.

---

## NAT-B

| Setting | Value |
|---|---|
| Name | NAT-B |
| Subnet | Public-Subnet-B |

Allocate Elastic IP.

---

# STEP 6 — Configure Private Route Tables

## Private-RT-A

Add Route:

| Destination | Target |
|---|---|
| 0.0.0.0/0 | NAT-A |

Associate:
- Private-App-A
- Private-DB-A

---

## Private-RT-B

Add Route:

| Destination | Target |
|---|---|
| 0.0.0.0/0 | NAT-B |

Associate:
- Private-App-B
- Private-DB-B

---

# STEP 7 — Create Security Groups

## ALB-SG

Allow:
- HTTP (80)
- HTTPS (443)

Source:
```text
0.0.0.0/0
```

---

## APP-SG

Allow:
- HTTP 80 from ALB-SG
- SSH 22 from Bastion-SG

---

## DB-SG

Allow:
- MySQL 3306 from APP-SG

---

## BASTION-SG

Allow:
- SSH 22 from your public IP only

---

# STEP 8 — Launch Bastion Host

Launch EC2 Instance.

Configuration:

| Setting | Value |
|---|---|
| Name | Bastion-Host |
| Subnet | Public-Subnet-A |
| Public IP | Enabled |
| SG | BASTION-SG |

---

# STEP 9 — Launch Private Application Servers

Launch two EC2 instances.

## App Server A

| Setting | Value |
|---|---|
| Name | App-Server-A |
| Subnet | Private-App-A |
| Public IP | Disabled |
| SG | APP-SG |

---

## App Server B

| Setting | Value |
|---|---|
| Name | App-Server-B |
| Subnet | Private-App-B |
| Public IP | Disabled |
| SG | APP-SG |

---

# STEP 10 — Install Apache Web Server

SSH into Bastion Host:

```bash
ssh -i key.pem ec2-user@BASTION-IP
```

SSH into Private EC2.

Install Apache:

```bash
sudo yum update -y
sudo yum install httpd -y
sudo systemctl start httpd
sudo systemctl enable httpd
```

Create Test Website:

```bash
echo "<h1>Production VPC Project</h1>" | sudo tee /var/www/html/index.html
```

---

# STEP 11 — Create Target Group

Configuration:

| Setting | Value |
|---|---|
| Target Type | Instances |
| Protocol | HTTP |
| Port | 80 |

Register:
- App-Server-A
- App-Server-B

---

# STEP 12 — Create Application Load Balancer

Configuration:

| Setting | Value |
|---|---|
| Name | Prod-ALB |
| Scheme | Internet-facing |
| Subnets | Public-A + Public-B |
| Security Group | ALB-SG |

Attach Target Group.

---

# STEP 13 — Test Website

Open:

```text
http://ALB-DNS
```

Expected Output:

```text
Production VPC Project
```

---

# STEP 14 — Create Auto Scaling Group

Configuration:

| Setting | Value |
|---|---|
| Desired Capacity | 2 |
| Minimum Capacity | 2 |
| Maximum Capacity | 4 |

Attach:
- Launch Template
- ALB Target Group

---

# STEP 15 — Configure CloudWatch

Create dashboard and monitor:

- CPU Utilization
- Network In
- Network Out
- Status Checks

---

# STEP 16 — Enable VPC Flow Logs

Go to:

```text
VPC → Flow Logs
```

Send logs to:
- CloudWatch Logs

---

# Validation Checklist

## Verify:

- VPC created successfully
- Public subnets connected to IGW
- Private subnets connected to NAT
- Bastion Host accessible
- Private EC2 instances reachable through Bastion
- ALB serving website
- Auto Scaling working
- Flow Logs enabled
- RDS private access only

---

# Project Outcome

Successfully built a secure, scalable, and highly available AWS cloud infrastructure using production-grade networking architecture.