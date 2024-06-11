+++
weight = 999
title = 'Using SSH with NicelandVPN'
description = 'If you encounter problems with using ssh try this'
icon = 'article'
date = '2024-06-04T17:43:04+03:00'
lastmod = '2024-06-04T17:43:04+03:00'
draft = false 
toc = true
+++

If you have trouble with SSH connections, use the ServerAliveInterval option.

ServerAliveInterval will send pings between client and server to make sure the connection stays active.

`$ ssh -o ServerAliveInternal=30 root@1.1.1.1`
