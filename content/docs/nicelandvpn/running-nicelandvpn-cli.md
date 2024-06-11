+++
weight = 999
title = 'Downloading and Running the CLI App'
description = 'Guide on downloading and using the NicelandVPN CLI App'
icon = 'article'
date = '2024-06-04T17:45:07+03:00'
lastmod = '2024-06-04T17:45:07+03:00'
draft = false
toc = true
+++

## Step 1 Downloading the CLI App
Download the CLI binary for your platform from [here](https://github.com/tunnels-is/NicelandVPN/releases/latest).
For example, if you are on windows you want to download NicelandVPN-Windows-CLI.exe.

## Step 2 Move the binary to a convenient place
We recommend moving the binary to its own folder because it generates some files in the directory the binary is in on the first run.
NicelandVPN makes a directory called files, inside this directory is the configuration in config.json and also the logs.

## Step 3 Execute the CLI App
NicelandVPN requires elevated privileges because it is a portable VPN.
Wich means that NicelandVPN will not install anything on your system.

To run the CLI on windows:

*   1\. Start Poweshell, CMD or bash shell as Administrator
*   2\. Navigate to the directory containing NicelandVPN
*   3\. Run NicelandVPN: `$ NicelandVPN-Windows-CLI.exe`

To run the CLI on MacOS and Linux:

*   1\. Navigate to the directory containing NicelandVPN
*   2\. Run NicelandVPN: `$ sudo ./NicelandVPN-Linux-CLI`

## Step 4 Using the CLI App
When you execute the NicelandVPN CLI app, you can use the web UI that runs by default on localhost:22222.
If you want to learn how to change the defaults, see [here.](/docs/nicelandvpn/configure-api)
