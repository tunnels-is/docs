---
title: Linux Configurations
description: Server key management
---

# Install iptables (required)
```bash
$ apt install iptables
```

# Configure iptables
This is only needed for cloud servers with no software firewalls
```bash
# Clear out all iptable rules
iptables -F
# Drop packet fowarding
iptables -P FORWARD DROP
# Allow all outoing packets
iptables -P OUTPUT ACCEPT
# Enable ssh access
iptables -I INPUT -p tcp --dport 22 -j ACCEPT
# Enable connection tracking
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
# Open traffic to the API and VPN ports
iptables -I INPUT -p tcp --dport 443 -j ACCEPT
iptables -I INPUT -p udp --dport 444 -j ACCEPT
# Close the server off from incomming packets
iptables -P INPUT DROP
```

# Sysctl configurations (semi-required)
### /etc/sysctl.conf
```bash
# THIS PART IS REQUIRED
# Must match StartPort and EndPort in the server config.json
# -----------------------------
net.ipv4.ip_local_reserved_ports = 2000-65500
net.ipv4.ip_local_port_range = 1024 1999
# -----------------------------

net.ipv4.tcp_rmem=8192 32768 655360
net.ipv4.tcp_wmem=8192 32768 655360
net.ipv4.tcp_mtu_probing=0

net.core.default_qdisc=fq
net.ipv4.tcp_timestamps=0
net.ipv4.tcp_sack=1
net.ipv4.tcp_congestion_control=bbr

net.core.optmem_max=65536000
net.core.rmem_max = 16000000
net.core.rmem_default = 16000000
net.core.wmem_max = 16000000
net.core.wmem_default = 16000000
net.core.netdev_max_backlog = 300000
net.ipv4.udp_mem = 524288 1048576 2097152
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0

fs.file-max= 2097152

net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.all.disable_ipv6=1

net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
```

# Install Supervisor (optinal)
Supervisor keeps tunnels running and handles log-rotation
```bash
# apt based systems
$ apt install supervisor

# arch
$ pacman -S supervisor
```

### /etc/supervisor/conf.d/tunnels.conf
```bash
[program:tunnels]
command=/opt/tunnels/tunnels

autostart=true
autorestart=true
startretries=1000
user=root
directory=/opt/tunnels
redirect_stderr=true
stdout_logfile=/var/log/tunnels/tunnels.log
stdout_logfile_maxbytes=100MB
stdout_logfile_backups=100
stderr_logfile=/var/log/tunnels/tunnels.log
stderr_logfile_maxbytes=100MB
stderr_logfile_backups=100
```
## Loading the config
```bash
supervisorctl reread
supervisorctl add tunnels
````

# Tools for debuggin
```bash
$ apt install net-tools tcpdump vim htop iftop
```
