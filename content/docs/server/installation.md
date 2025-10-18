---
title: Installation
description: Download, Extract, Run.
---

[Full Download List](https://github.com/tunnels-is/tunnels/releases)

## Minimum Requirements
 Will work decently for a few users but throughput will be limited
```md
 - Linux
 - `iptables` installed
 - 1 `CPU` core
 - 500 `MB` `RAM`
```

## Recommended Requirements
```md
 - Linux
 - `iptables` installed
 - 2-4 `CPU` core
 - 2 `GB` `RAM`
```

## Installing the server

1. **Download the server**
   ```bash
    curl -L -O $(curl -s https://api.github.com/repos/tunnels-is/tunnels/releases/latest | grep 'browser_download_url' | grep 'server_.*_Linux_amd64.tar.gz' | cut -d '"' -f 4)
   ```

2. **Extract and place the binary**
   ```bash
   sudo mkdir -p /opt/tunnels
   sudo tar -xzf server_*_Linux_amd64.tar.gz -C /opt/tunnels
   ```

3. **Run the server with auto-configuration**
   ```bash
   cd /opt/tunnels
   ./tunnels --config
   ```

:::danger

The default user/pass for tunnels server is admin/admin.

Do not open any ports to the server before changing the password using the password reset functionality from the client GUI

:::

4. **Inspect the configuration**
   ```bash
   cat /opt/tunnels/config.json
   ```
   For detailed configuration options, see the [server configuration guide](/docs/server/config).
