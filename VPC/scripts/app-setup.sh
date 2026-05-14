#!/bin/bash

# Variables
APP_NAME="Production VPC App"
WEB_DIR="/var/www/html"

# Update Packages
sudo yum update -y

# Install Apache
sudo yum install httpd -y

# Enable and Start Apache
sudo systemctl enable httpd
sudo systemctl start httpd

# Create Application Page
sudo bash -c "cat > $WEB_DIR/index.html <<EOF
<!DOCTYPE html>
<html>
<head>
    <title>$APP_NAME</title>
    <style>
        body{
            background:#111827;
            color:white;
            text-align:center;
            font-family:Arial;
            padding-top:100px;
        }

        .card{
            background:#1f2937;
            width:60%;
            margin:auto;
            padding:40px;
            border-radius:12px;
            box-shadow:0px 0px 10px rgba(255,255,255,0.1);
        }

        h1{
            color:#38bdf8;
            font-size:48px;
        }

        p{
            font-size:22px;
        }
    </style>
</head>

<body>

<div class='card'>
    <h1>$APP_NAME</h1>

    <p>3-Tier AWS Architecture Successfully Deployed</p>

    <p>Services Used:</p>

    <ul style='list-style:none;font-size:20px;'>
        <li>Amazon VPC</li>
        <li>EC2</li>
        <li>Application Load Balancer</li>
        <li>Auto Scaling</li>
        <li>NAT Gateway</li>
        <li>CloudWatch</li>
    </ul>

    <p>Server Hostname:</p>

    <h2>$(hostname)</h2>

</div>

</body>
</html>
EOF"

# Restart Apache
sudo systemctl restart httpd

# Firewall (Optional)
sudo systemctl status httpd

# Final Message
echo "======================================"
echo "Application Deployment Successful"
echo "======================================"