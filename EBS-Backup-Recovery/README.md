# AWS EBS Backup & Disaster Recovery Lab

## 📌 Project Overview
This project demonstrates a real-world cloud backup and recovery scenario using AWS EBS snapshots. It simulates accidental data loss and recovery using restored volumes.

---

## 🧠 Problem Statement
In cloud environments, data loss can occur due to accidental deletion or system failure. This project shows how to implement a backup and recovery solution using AWS EBS snapshots.

---

## 🏗️ Architecture
![Architecture](architecture.png)

Flow:
User → EC2 Instance → EBS Volume → Snapshot → Restore Volume → Data Recovery

---

## ⚙️ Steps Performed

### 1. Create & Attach EBS Volume
- Created EBS volume in same AZ as EC2
- Attached to instance

### 2. Format & Mount Volume
```bash
sudo mkfs -t ext4 /dev/nvme1n1
sudo mkdir /data
sudo mount /dev/nvme1n1 /data
sudo chown ec2-user:ec2-user /data

### 3. Store Data on Volume
cd /data
echo "Employee Records" > employees.txt
echo "Confidential Data" > company.txt
mkdir project_files
touch project_files/app.log

### 4. Create Snapshot (Backup)
Created snapshot from EBS volume using AWS Console
This snapshot acts as backup storage

###5. Simulate Data Loss
rm -rf /data/*

### 6. Restore Volume from Snapshot
Created a new EBS volume from snapshot
Attached it to the EC2 instance

### 7. Mount Restored Volume
sudo mkdir /restore
sudo mount /dev/nvme2n1 /restore

### 8. Verify Data Recovery
ls /restore
🧪 Commands Used

Refer to commands.txt


🧨 Troubleshooting & Issues Faced

Issue 1: Permission Denied
Cause: Directory owned by root user
Fix:
sudo chown ec2-user:ec2-user /data

Issue 2: Mount Error (wrong fs type / bad superblock)
Cause: Volume not formatted or incorrect snapshot
Fix:
sudo file -s /dev/nvme2n1

Issue 3: Data Not Restored (Empty Folder)
Cause: Snapshot created before storing data
Fix:
Screenshots are available in the screenshots/ folder showing:

Volume creation
Data storage
Snapshot creation
Data deletion
Data recovery
✅ Outcome
Successfully implemented backup and recovery system
Simulated real-world data loss scenario
Recovered deleted data using EBS snapshot

🚀 Skills Gained
AWS EBS & Snapshots
Linux File System Management
Backup & Disaster Recovery
Troubleshooting Cloud Issues
📂 Author

Nitesh Vishwakarma