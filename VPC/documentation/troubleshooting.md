# Troubleshooting Guide — AWS VPC 3-Tier Architecture

This document contains common issues faced during the project setup and their solutions.

---

# 1. EC2 Instance Not Accessible

## Problem

Unable to SSH into EC2 instance.

---

## Possible Causes

- Wrong Security Group rules
- Incorrect key pair
- Instance in private subnet
- No public IP attached
- Route table misconfiguration

---

## Solution

Verify:

### Security Group

Allow:

| Type | Port |
|---|---|
| SSH | 22 |

Source:
```text
Your Public IP
```

---

### Check Internet Gateway

Ensure:
- IGW attached to VPC

---

### Verify Route Table

Public Route Table must contain:

| Destination | Target |
|---|---|
| 0.0.0.0/0 | Internet Gateway |

---

### Verify Public IP

Ensure:
- Auto Assign Public IP enabled

---

# 2. Private EC2 Cannot Access Internet

## Problem

Unable to install packages using yum or apt.

---

## Possible Causes

- NAT Gateway missing
- Wrong private route table
- NAT in wrong subnet

---

## Solution

Verify private route table:

| Destination | Target |
|---|---|
| 0.0.0.0/0 | NAT Gateway |

Ensure:
- NAT Gateway is inside public subnet
- Elastic IP attached

---

# 3. Load Balancer Showing Unhealthy Targets

## Problem

Target group health checks failing.

---

## Possible Causes

- Apache not running
- Security Group blocking traffic
- Wrong health check path

---

## Solution

Start Apache:

```bash
sudo systemctl start httpd
```

Enable Apache:

```bash
sudo systemctl enable httpd
```

---

Verify APP-SG allows:

| Type | Port |
|---|---|
| HTTP | 80 |

Source:
```text
ALB-SG
```

---

# 4. Website Not Opening via ALB DNS

## Problem

ALB DNS not accessible.

---

## Possible Causes

- Target group unhealthy
- ALB security group issue
- EC2 web server not running

---

## Solution

Verify:

### ALB Security Group

Allow:
- HTTP 80
- HTTPS 443

Source:
```text
0.0.0.0/0
```

---

### Test EC2 Web Server

SSH into App Server:

```bash
curl localhost
```

Expected output:

```text
Production VPC Project
```

---

# 5. Cannot SSH into Private EC2

## Problem

Private EC2 inaccessible.

---

## Solution

Use Bastion Host.

Steps:

```bash
ssh -i key.pem ec2-user@BASTION-IP
```

Then:

```bash
ssh -i key.pem ec2-user@PRIVATE-IP
```

---

# 6. Auto Scaling Not Launching New Instances

## Problem

New EC2 instances not created automatically.

---

## Possible Causes

- Wrong Launch Template
- Max capacity reached
- Health check issues

---

## Solution

Verify:

- Launch Template AMI valid
- Desired capacity configured
- Correct subnets selected
- ALB attached properly

---

# 7. RDS Database Connection Failed

## Problem

Application unable to connect to database.

---

## Possible Causes

- DB Security Group issue
- Wrong endpoint
- Database private access blocked

---

## Solution

Verify DB-SG:

| Type | Port |
|---|---|
| MySQL/Aurora | 3306 |

Source:
```text
APP-SG
```

---

Test DB connection:

```bash
telnet RDS-ENDPOINT 3306
```

---

# 8. NAT Gateway Costs Too High

## Problem

Unexpected AWS bill.

---

## Cause

NAT Gateway runs hourly and charges for data processing.

---

## Solution

For practice environments:

- Delete NAT Gateway after project completion
- Release Elastic IPs
- Stop unused EC2 instances

---

# 9. VPC Flow Logs Not Appearing

## Problem

No logs visible in CloudWatch.

---

## Solution

Verify:

- IAM permissions
- Correct log group selected
- Flow Logs enabled for correct VPC

Wait 5–10 minutes for logs to appear.

---

# 10. Security Best Practices

## Recommendations

- Never expose database publicly
- Restrict SSH access to your IP only
- Use private subnets for backend resources
- Avoid using root AWS account
- Enable MFA on AWS account

---

# Common AWS Networking Checks

## Verify:

- Route Tables
- Internet Gateway
- NAT Gateway
- Security Groups
- NACLs
- Public IP Assignment
- Subnet Associations

---

# Useful Debugging Commands

## Check Web Server

```bash
sudo systemctl status httpd
```

---

## Restart Apache

```bash
sudo systemctl restart httpd
```

---

## Check Open Ports

```bash
sudo netstat -tulnp
```

---

## Test Internet Access

```bash
ping google.com
```

---

## Check EC2 Metadata

```bash
curl http://169.254.169.254/latest/meta-data/
```

---

# Final Recommendation

Always validate networking layer step-by-step:

1. VPC
2. Subnets
3. Route Tables
4. Internet Gateway
5. NAT Gateway
6. Security Groups
7. EC2 Connectivity
8. Load Balancer
9. Auto Scaling
10. Monitoring

Most AWS issues happen due to incorrect networking configuration.