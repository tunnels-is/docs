+++
weight = 999
title = 'Running without sudo/root'
description = 'how to run Niceland VPN without root or sudo'
icon = 'article'
date = '2024-06-04T17:39:07+03:00'
lastmod = '2024-06-04T17:39:07+03:00'
draft = false
toc = true
+++

# Niceland VPN needs these permissions to run
```bash
sudo setcap 'cap_net_raw,cap_net_bind_service,cap_net_admin+eip' /opt/niceland/vpn
```

