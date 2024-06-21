+++
weight = 999
title = 'SystemD'
description = 'This article shows you how to set up a systemd service for nicelandvpn'
icon = 'article'
date = '2024-06-04T17:39:07+03:00'
lastmod = '2024-06-04T17:39:07+03:00'
draft = false
toc = true
+++

## Step 1: create a user

```bash
useradd -r -s /bin/bash niceland
groupadd niceland
usermod -G niceland niceland
```

# Step 2: Add a service
```bash
[Unit]
Description=Niceland VPN
Before=network-pre.target

[Service]
User=niceland
Group=niceland
WorkingDirectory=/opt/niceland/
ExecStart=/opt/niceland/nicelandvpn
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

# Step 3: Give binary access to network
```bash
sudo setcap CAP_NET_BIND_SERVICE=eip /opt/niceland/nicelandvpn
```
