# ☁️ CloudFront Portfolio Website — Setup Guide

This guide explains how to deploy the production-grade CloudFront portfolio website using Amazon S3, CloudFront, and AWS WAF.

---

# 📌 Project Architecture

```text
Users
   ↓
CloudFront CDN
   ↓
AWS WAF
   ↓
Private S3 Bucket
```

---

# 🚀 Services Used

| Service | Purpose |
|---|---|
| Amazon S3 | Static website file storage |
| Amazon CloudFront | Global CDN delivery |
| AWS WAF | Security protection |
| IAM | Access management |

---

# 📂 Project Structure

```text
cloudfront-portfolio-website/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── profile.png
│   ├── background.jpg
│
├── architecture.png
├── README.md
└── SETUP-GUIDE.md
```

---

# STEP 1 — Create S3 Bucket

Go to:

```text
AWS Console → S3
```

Click:

```text
Create Bucket
```

Bucket Name:

```text
cloudfront-portfolio-website
```

Region:

```text
ap-south-1
```

---

# IMPORTANT SECURITY SETTING

Keep:

```text
Block All Public Access = ENABLED
```

This project uses private bucket architecture.

---

# STEP 2 — Upload Website Files

Open bucket.

Click:

```text
Upload
```

Upload:
- index.html
- style.css
- script.js
- images folder

Click:
```text
Upload
```

---

# STEP 3 — Create CloudFront Distribution

Go to:

```text
CloudFront → Create Distribution
```

---

# CloudFront Configuration

## Origin

Select:
```text
S3 Bucket
```

---

## Origin Access

Choose:

```text
Origin Access Control (OAC)
```

Create new OAC.

---

## Viewer Protocol Policy

Choose:

```text
Redirect HTTP to HTTPS
```

---

## Default Root Object

```text
index.html
```

---

## Compression

Enable:
```text
Compress Objects Automatically
```

---

# STEP 4 — Configure Bucket Policy

CloudFront generates bucket policy.

Copy policy.

Go to:

```text
S3 → Permissions → Bucket Policy
```

Paste policy.

Save changes.

---

# STEP 5 — Deploy Distribution

Click:

```text
Create Distribution
```

Deployment takes:

```text
5–15 minutes
```

---

# STEP 6 — Access Website

CloudFront provides URL:

```text
https://dxxxxx.cloudfront.net
```

Open URL in browser.

---

# STEP 7 — Configure AWS WAF

Go to:

```text
AWS WAF
```

Create:
```text
Web ACL
```

Attach to:
```text
CloudFront Distribution
```

---

# Recommended WAF Rules

- Common Rule Set
- SQL Injection Protection
- IP Reputation
- Bot Protection

---

# STEP 8 — Test Cache

Open browser Developer Tools:

```text
F12 → Network
```

Refresh page.

Look for:

```text
x-cache: Hit from cloudfront
```

---

# STEP 9 — Cache Invalidation

If website changes are not visible:

Go to:

```text
CloudFront → Invalidations
```

Create invalidation:

```text
/*
```

Wait few minutes.

Refresh browser.

---

# 🔒 Security Features

- Private S3 Bucket
- HTTPS Redirection
- Origin Access Control
- AWS WAF Protection
- CloudFront Edge Security

---

# 🌍 Features

✅ Global CDN acceleration  
✅ Responsive UI  
✅ Modern frontend design  
✅ Secure architecture  
✅ Production-grade deployment  
✅ CloudFront caching  
✅ HTTPS support

---

# 📈 Learning Outcomes

- CDN architecture
- AWS CloudFront
- AWS S3 hosting
- AWS security
- WAF implementation
- Cache invalidation
- Production deployment

---

# 👨‍💻 Author

Nitesh Vishwakarma