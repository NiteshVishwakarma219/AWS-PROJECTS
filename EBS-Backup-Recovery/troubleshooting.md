# Troubleshooting Guide

## 🔴 Issue 1: Permission Denied

### Error:
Permission denied while creating files

### Cause:
Directory is owned by root user

### Solution:
```bash
sudo chown ec2-user:ec2-user /data

🔴 Issue 2: Mount Error (wrong fs type, bad superblock)
Error:

mount: wrong fs type, bad superblock

Cause:
Volume not formatted
Wrong or empty snapshot
Solution:
sudo file -s /dev/nvme2n1

If no filesystem:

sudo mkfs -t ext4 /dev/nvme2n1



## 🔴 Issue 3: Data Not Restored (Empty Directory)
Error:

No files found after mounting restored volume

Cause:

Snapshot created before data was written

Solution:
Store data first
Then create snapshot


## 🔴 Issue 4: Volume Not Showing
Solution:
lsblk

Check for correct device (nvme1n1, nvme2n1)

## 🔴 Issue 5: Mount Point Not Found
Solution:
sudo mkdir /restore