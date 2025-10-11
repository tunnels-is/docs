---
title: Server Config
description: Server config example
---

# Config with comments
:::warning

Use the clean config below for copying, the server does not support comments in the config

:::
```json
{
    "Features": [
        "LAN", // Enables WAN over LAN
        "VPN", // Enables Generic VPN functionality
        "AUTH", // Enables the authentication control unit
        "BBOLT" // Enables bbolt embeded database (recommended for most users)
    ],
    "LogAPIHosts": false, // Enable logging of API client hostnames
    "VPNIP": "192.168.1.32", // The IP address used for VPN traffic
    "VPNPort": "444", // The port used for VPN traffic
    "APIIP": "192.168.1.32", // The IP Address used for API calls
    "APIPort": "443", // The port used for API calls

    "StartPort": 2000,
    "EndPort": 65530,
    // StartPort and EndPort defined the port range which the VPN feature will use
    // when communicating with the internet or subnets
    "BandwidthMbps": 1000, // The available bandwith on this server
    "BandwidthUserMbps": 10, // Per user bandwidth allocation (not a hard cap) 
    // The maximum number of clients per server is calculated using the bandwidth fields
    // BandwidthMbps/BandwidthUserMbps = MaximumUsers
    // Each user is allocated ports, based on the available port range
    // (EndPort-Startport)/MaximumUsers = PortPerUser
    // This is how tunnels ensures even port distribution for all users

    "UserMaxConnections": 10, // The maximum number of connections each client can have
    "InternetAccess": true, // Enables/Disables internet access from the server (VPN featuer only)
    "LocalNetworkAccess": false, // Enables/Disables local network (subnet) access from the server (VPN featuer only)

    // Define custom DNS records that will be delivered to the client on connection. 
    "DNSRecords": [
        {
            "Domain": "mydomain.com",
            "Wildcard": true, // Allows for any subdomain to be resolved to the IP or TXT records. f.x. (blog.mydomain.com)
            "IP": ["10.10.0.2", "10.10.0.3"],
            "TXT": ["This is a text record", "This is another text record"],
        }
    ],
    "DNSServers": ["1.1.1.1", "9.9.9.9"], // Define custom DNS servers.
    // These DNS server will be applied client side on connection

    // Secret store defined where configurations are stored.
    // They can be stored in environment variables or in the configuration file itself.
    // If configurations are stored in the "env" option. They will have the same names
    // as the fields in this configuration example. 
    "SecretStore": "config", // options: "env" | "config"
    "DBurl": "", // Only used if MongoDB is configured as the default database
    "TwoFactorKey": "1f9890c7b1e94365ab8f65d0e3d41bb4", // encryption key used for storing two factor authentication
    "CertPem": "./cert.pem", // Public certificate for this VPN server
    "KeyPem": "./key.pem" // Private Key for this VPN server
    "SignPem": "./sign.pem", // This is the public sining cert that comes from the controller. 
    // This essentially allows the server to validate that connection attempts have been processed by the correct control server.

    "DisableLanFirwall": false, // Use this to completely disable the LAN firewall
    "Hostname": "tunnels.local", // Base hostname used for DHCP assignments
    "PingTimeoutMinutes": 0, // How many minutes it takes to time out a client connection
    "DHCPTimeoutHours": 0, // How many hours until DHCP assignments are released
    "NetAdmins": [], // Device Tokens of network administrators. Any device token in this list can access any other device over the network
    "AdminAPIKey": "0cd1f6c4-9b98-4bda-860c-0c04f103c84d",
    // This key can be used when creating cli tools/sdk's when calling the control server.
    "ClientVersion": "", 
    // Specifies the client version all devices should update or downgrade to.
    // More details can be found inside the "Updating Device Clients" guide.


    // Lan network used for WAN over LAN (modification not recommended).
    "Lan": { 
        "Tag": "lan",
        "Network": "10.0.0.0/16",
        "Nat": "" // Optional network NAT (f.x. 11.0.0.0/16)
    },

    // Routes that will be applied on the client once it connects
    "Routes": [ 
        {
            "Address": "10.0.0.0/16", // This route is the LAN default route (do not remove unless LAN is disbled)
            // do not modify the following unless you know what you're doing
            "Metric": "0", // optional metric for the route
            "Gateway": "" // optional gateway for the route (empty string uses default gateway)
         }
    ],

    // Subnet configurations for the VPN feature.
    // Use this to define any sub networks available outside the default VPN network.
    // Most of the time it's enough to define a route, but SubNets are needed in order to apply network NAT configurations.
    "SubNets": [
         { 
            "Tag": "subnetX",
            "Network": "10.10.0.0/16",
            "Nat": "" // Optional network NAT (f.x. 11.11.0.0/16)
        },
     ],

}
```




# Clean config for copying
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
    "DBurl": "",
    "TwoFactorKey": "1f9890c7b1e94365ab8f65d0e3d41bb4",
    "CertPem": "./cert.pem",
    "SignPem": "./sign.pem",
    "KeyPem": "./key.pem"
}
```
