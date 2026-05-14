#!/bin/bash

# Update system packages
sudo yum update -y

# Install Apache Web Server
sudo yum install httpd -y

# Start Apache Service
sudo systemctl start httpd

# Enable Apache on Boot
sudo systemctl enable httpd

# Create Simple Web Page
echo "<html>
<head>
<title>AWS VPC Project</title>
<style>
body {
    background-color: #0f172a;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    margin-top: 100px;
}
h1 {
    font-size: 50px;
}
p {
    font-size: 24px;
}
</style>
</head>
<body>
<h1>Production-Grade AWS VPC Project</h1>
<p>Deployed Successfully using Apache Web Server</p>
</body>
</html>" | sudo tee /var/www/html/index.html

# Restart Apache
sudo systemctl restart httpd

# Show Status
sudo systemctl status httpd