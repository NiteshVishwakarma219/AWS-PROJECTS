# 🚀 AWS CloudFormation Highly Available Web Application Infrastructure

A production-style AWS Infrastructure as Code (IaC) project built using AWS CloudFormation to automate the deployment of a highly available and scalable web application environment.

This project provisions a complete AWS infrastructure including a custom VPC, public subnets across multiple Availability Zones, Internet Gateway, Route Tables, Security Groups, EC2 instances, Auto Scaling Group, and an Application Load Balancer.

---

# 📌 Project Highlights

✅ Infrastructure as Code (IaC) using AWS CloudFormation  
✅ Highly Available Multi-AZ Architecture  
✅ Auto Scaling & Self-Healing Infrastructure  
✅ Application Load Balancer Integration  
✅ Automated EC2 Web Server Deployment  
✅ Custom VPC Networking  
✅ Production-Style Cloud Architecture  
✅ Region Independent Dynamic AMI Resolution  

---

# 🏗️ Architecture

```text
                           Internet
                               │
                               ▼
                 Application Load Balancer
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
        EC2 Instance                     EC2 Instance
               │                               │
               └──────── Auto Scaling ─────────┘

                     Inside Custom VPC
```

---

# ☁️ AWS Services Used

| Service | Purpose |
|----------|----------|
| AWS CloudFormation | Infrastructure Automation |
| Amazon VPC | Network Isolation |
| EC2 | Virtual Servers |
| Auto Scaling Group | Automatic Scaling |
| Application Load Balancer | Traffic Distribution |
| Security Groups | Firewall Rules |
| Internet Gateway | Internet Access |
| Route Tables | Network Routing |

---

# 📂 Project Structure

```bash
cloudformation-webapp/
│
├── template.yaml
├── README.md
└── architecture.png
```

---

# ⚙️ Features

- Automated infrastructure deployment
- Multi Availability Zone setup
- Scalable web application architecture
- Dynamic Amazon Linux AMI resolution
- Automated Apache Web Server installation
- Self-healing infrastructure using Auto Scaling
- Fully reproducible environment
- Clean Infrastructure as Code practices

---

# 🛠️ Prerequisites

Before deploying this project, ensure you have:

- AWS Account
- IAM User with AdministratorAccess
- AWS Region selected
- EC2 Key Pair created
- Basic understanding of AWS services

---

# 🔑 Step 1 — Create EC2 Key Pair

Go to:

EC2 Console → Key Pairs → Create Key Pair

Example:

```bash
my-key
```

Download and safely store the `.pem` file.

---

# 🚀 Step 2 — Deploy CloudFormation Stack

## Open AWS CloudFormation

AWS Console → CloudFormation

---

## Create Stack

- Click **Create Stack**
- Select **With new resources**
- Upload `template.yaml`

---

## Configure Stack

Stack Name:

```bash
webapp-stack
```

Select your EC2 Key Pair.

---

## Deploy Infrastructure

Click:

```bash
Next → Next → Submit
```

Deployment takes approximately:

```bash
5–10 minutes
```

Wait until stack status becomes:

```bash
CREATE_COMPLETE
```

---

# 🌐 Access Web Application

After deployment:

1. Open CloudFormation
2. Select Stack
3. Open Outputs Tab
4. Copy LoadBalancerDNS
5. Paste into browser

You should see:

```html
CloudFormation Web Server
```

---

# 🔄 Auto Scaling Demonstration

This infrastructure supports self-healing.

To test:

- Manually terminate one EC2 instance
- Auto Scaling Group automatically launches a replacement instance

This demonstrates production-style high availability.

---

# 📄 CloudFormation Highlights

## Dynamic AMI Resolution

Instead of hardcoding AMI IDs, the project uses:

```yaml
ImageId: !Sub '{{resolve:ssm:/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64}}'
```

Benefits:
- Region independent
- Always latest Amazon Linux AMI
- Production best practice

---

# 🌍 Availability Zones

For Stockholm Region (`eu-north-1`):

```yaml
eu-north-1a
eu-north-1b
```

---

# 🔐 Security Configuration

Security Group Rules:

| Port | Protocol | Purpose |
|------|-----------|----------|
| 22 | TCP | SSH Access |
| 80 | TCP | HTTP Web Traffic |

---

# 📚 Learning Outcomes

This project helped in understanding:

- Infrastructure as Code (IaC)
- AWS CloudFormation Templates
- VPC Networking
- Load Balancer Configuration
- Auto Scaling Architecture
- High Availability Design
- Cloud Automation
- DevOps Deployment Practices

---

# 📸 Recommended Screenshots

Add these screenshots inside your repository:

| Screenshot | Description |
|------------|-------------|
| stack-success.png | CREATE_COMPLETE Status |
| ec2.png | EC2 Instances |
| loadbalancer.png | Application Load Balancer |
| autoscaling.png | Auto Scaling Group |
| webpage.png | Website Output |
| resources.png | CloudFormation Resources |

---

# 🧪 Future Enhancements

- Add Private Subnets
- NAT Gateway Integration
- HTTPS with ACM
- Route 53 Domain Integration
- RDS Database
- CloudWatch Monitoring
- CI/CD Pipeline
- Terraform Version
- Containerization with ECS/EKS

---

# 💼 Resume Description

> Built a Highly Available Web Application Infrastructure using AWS CloudFormation with VPC, EC2, Auto Scaling Group, and Application Load Balancer following Infrastructure as Code (IaC) principles.

---

# 🔥 LinkedIn Post

Built a production-style Highly Available Web Application Infrastructure using AWS CloudFormation 🚀

Implemented:
✅ Custom VPC  
✅ Public Subnets  
✅ EC2 Instances  
✅ Application Load Balancer  
✅ Auto Scaling Group  
✅ Infrastructure as Code (IaC)

This project helped me gain practical experience in:
☁️ AWS Cloud  
⚙️ DevOps Automation  
📦 CloudFormation Templates  
🌐 High Availability Architecture  
🚀 Scalable Infrastructure Deployment

#AWS #CloudFormation #DevOps #InfrastructureAsCode #CloudComputing #AWSProjects

---

# 👨‍💻 Author

## Nitesh Vishwakarma

BCA Student | Cloud & DevOps Enthusiast | AWS Learner

---

# 📜 License

This project is created for educational and learning purposes.