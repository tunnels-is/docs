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
# Step 1: Download Niceland VPN

# Step 2: Give binary access to network
```bash
sudo setcap 'cap_net_raw,cap_net_bind_service,cap_net_admin+eip' /opt/niceland/vpn
```

# Step 2: Add a service
note: do not run as root!
```bash
[Unit]
Description=NicelandVPN
Before=network-pre.target


[Service]
User=REPLACEME
Group=REPLACEME
AmbientCapabilities=CAP_NET_ADMIN CAP_NET_RAW CAP_NET_BIND_SERVICE
WorkingDirectory=/opt/niceland/
ExecStart=/opt/niceland/vpn
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

