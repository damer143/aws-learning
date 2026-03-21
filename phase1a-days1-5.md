# AWS Cloud & Linux Learning Log

## Phase 1A – Cloud & Linux Foundations (Day 1–5)

This document records the practical exercises and concepts learned while building foundational cloud and Linux skills using AWS.

---

# Day 1 – EC2 Setup

## Goal

Understand basic cloud infrastructure and launch a virtual server.

## Tasks

- Create AWS account
- Launch EC2 instance
- Configure Security Groups
- Connect to EC2 using SSH

## SSH Connection

```bash
ssh -i key.pem ec2-user@PUBLIC_IP
```

## Basic Linux Navigation

```bash
pwd
ls
cd /
cd /home
cd ~
cd ..
```

## Explore System Directories

```bash
cd /etc
ls

cd /var/log
ls
```

Common directories:

| Directory | Purpose              |
| --------- | -------------------- |
| /etc      | system configuration |
| /var/log  | logs                 |
| /home     | user directories     |
| /usr      | installed programs   |

## Outcome

Successfully connected to an EC2 instance and explored the Linux file system.

---

# Day 2 – AWS Core Services Overview

## Goal

Understand core AWS services and their roles.

## Core AWS Services

| Service | Purpose                     |
| ------- | --------------------------- |
| EC2     | Virtual compute server      |
| S3      | Object storage              |
| IAM     | Identity & access control   |
| RDS     | Managed relational database |

## AWS Mental Model

```
Compute → EC2
Storage → S3
Database → RDS
Networking → VPC
Security → IAM
```

---

# Day 3 – Deploy Node.js App on EC2

## Goal

Deploy a simple backend application on a cloud server.

## Update System

```bash
sudo dnf update -y
```

## Install Node.js

```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf remove nodejs -y
sudo dnf install nodejs -y
```

Verify installation:

```bash
node -v
npm -v
```

## Create Application

```bash
mkdir app
cd app
nano server.js
```

Example server:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from EC2 Node.js server!");
});

server.listen(3000);
```

Run server:

```bash
node server.js
```

Access application:

```
http://EC2_PUBLIC_IP:3000
```

---

# Process Management with PM2

Install PM2:

```bash
sudo npm install -g pm2
```

Start application:

```bash
pm2 start server.js
```

Check running processes:

```bash
pm2 list
```

Save processes for reboot:

```bash
pm2 save
```

---

# Nginx Reverse Proxy

Install Nginx:

```bash
sudo dnf install nginx -y
```

Start service:

```bash
sudo systemctl start nginx
```

Enable auto start:

```bash
sudo systemctl enable nginx
```

Edit configuration:

```
/etc/nginx/conf.d/default.conf
```

Example configuration:

```
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

Application becomes accessible via:

```
http://EC2_PUBLIC_IP
```

---

# Day 4 – Linux Processes & Troubleshooting

## Goal

Understand how Linux services run and fail.

## systemctl

Check service status:

```bash
sudo systemctl status nginx
```

Restart service:

```bash
sudo systemctl restart nginx
```

Stop service:

```bash
sudo systemctl stop nginx
```

Enable service on boot:

```bash
sudo systemctl enable nginx
```

---

## Process Inspection

List running processes:

```bash
ps aux
```

Filter processes:

```bash
ps aux | grep nginx
ps aux | grep node
```

---

## Real-time Monitoring

```bash
top
```

Displays:

- CPU usage
- Memory usage
- Running processes

Exit with:

```
q
```

---

## System Logs

View logs:

```bash
sudo journalctl -u nginx
```

Recent logs:

```bash
sudo journalctl -u nginx -n 20
```

Follow logs live:

```bash
sudo journalctl -u nginx -f
```

---

## Example Failure Scenario

Problem:

```
Website unreachable
```

Diagnosis:

```bash
sudo systemctl status nginx
```

Output:

```
inactive (dead)
```

Fix:

```bash
sudo systemctl restart nginx
```

---

# Day 5 – Networking Fundamentals

## Goal

Understand how network traffic reaches an application.

---

## Network Flow

```
Browser
   │
   ▼
Internet
   │
   ▼
AWS Security Group
   │
   ▼
EC2 Instance
   │
   ▼
Nginx (port 80)
   │
   ▼
Node / Next.js App (port 3000)
```

---

## Ports

| Port | Service     |
| ---- | ----------- |
| 22   | SSH         |
| 80   | HTTP        |
| 3000 | Node.js app |

---

## HTTP Example

Request:

```
GET /
```

Response:

```
HTTP/1.1 200 OK
```

---

## DNS

DNS translates domain names into IP addresses.

Example:

```
example.com → 54.201.xx.xx
```

---

# Networking Debugging Checklist

When an application becomes unreachable:

### 1. Check network connectivity

```bash
ping SERVER_IP
```

### 2. Test HTTP response

```bash
curl http://SERVER_IP
```

### 3. Check open ports

```bash
sudo ss -tulpn
```

or

```bash
sudo netstat -tulpn
```

### 4. Check service status

```bash
sudo systemctl status nginx
```

---

# Current Infrastructure

```
User Browser
     │
     ▼
Internet
     │
     ▼
AWS Security Group
     │
     ▼
EC2 Instance
     │
     ├── Nginx (port 80)
     │
     └── Node / Next.js (port 3000)
           │
           ▼
           PM2
```

---

# Phase 1A Progress

Completed:

- EC2 deployment
- Linux navigation
- Node.js application deployment
- PM2 process management
- Nginx reverse proxy
- Linux troubleshooting
- Networking fundamentals

Next Step:

```
Day 6 – AWS VPC & Subnets
```
