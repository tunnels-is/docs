---
title: Server Config
description: Server config example
---

```json
{
    "Features": [
        "LAN",
        "VPN",
        "AUTH",
        "DNS",
        "BBOLT"
    ],
    "PingTimeoutMinutes": 0,
    "DHCPTimeoutHours": 0,
    "LogAPIHosts": false,
    "ClientVersion": "",
    "VPNIP": "192.168.1.32",
    "VPNPort": "444",
    "APIIP": "192.168.1.32",
    "APIPort": "443",
    "NetAdmins": [],
    "Hostname": "tunnels.local",
    "Lan": {
        "Tag": "lan",
        "Network": "10.0.0.0/16",
        "Nat": ""
    },
    "DisableLanFirwall": false,
    "Routes": [
        {
            "Address": "10.0.0.0/16",
            "Metric": "0",
            "Gateway": ""
        }
    ],
    "SubNets": [],
    "StartPort": 2000,
    "EndPort": 65530,
    "UserMaxConnections": 10,
    "InternetAccess": true,
    "LocalNetworkAccess": false,
    "BandwidthMbps": 1000,
    "BandwidthUserMbps": 10,
    "DNSAllowCustomOnly": false,
    "DNSRecords": [],
    "DNSServers": [],
    "SecretStore": "config",
    "AdminAPIKey": "0cd1f6c4-9b98-4bda-860c-0c04f103c84d",
    "DBurl": "mongodb://127.0.0.1:27017",
    "TwoFactorKey": "1f9890c7b1e94365ab8f65d0e3d41bb4",
    "EmailKey": "",
    "PayKey": "",
    "CertPem": "./cert.pem",
    "SignPem": "./sign.pem",
    "KeyPem": "./key.pem"
}
```
