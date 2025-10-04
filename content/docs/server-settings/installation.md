---
title: Installation
description: Download, Extract, Run.
---

1. **Download the server**
   ```bash
   wget https://github.com/tunnels-is/tunnels/releases/download/v2.0.7/tunnels_2.0.7_Linux_amd64.tar.gz
   ```

2. **Extract and place the binary**
   ```bash
   sudo mkdir -p /opt/tunnels
   sudo tar -xzf tunnels_2.0.7_Linux_amd64.tar.gz -C /opt/tunnels
   ```

3. **Run the server with auto-configuration**
   ```bash
   cd /opt/tunnels
   ./tunnels --config
   ```

4. **Inspect the configuration**
   ```bash
   cat /opt/tunnels/config.json
   ```
   For detailed configuration options, see the [server configuration guide](/docs/server-settings/config).
