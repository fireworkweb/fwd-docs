---
title: Environment Variables
description: Change the environment variables to fit your needs
extends: _layouts.documentation
section: content
---

# Environment Variables {#environment-variables}

`fwd` is very flexible for you to tweak and change behaviors using environment variables. Variables like `FWD_HTTP_PORT` that holds the port `http` service will bind to, for example, can easily be changed in a number of ways, find the one that best fits your needs.

The precedence is as follows (from the highest to the lowest precedence):

1. In-line/exported environment variables. (i.e `FWD_DEBUG=1 fwd ...`)
2. `.env` file in the current working directory (dotenv file format; usually not versioned in your project).
3. `.fwd` file in the current working directory (this file holds project specific `fwd` settings that usually are versioned with the project).
4. `$HOME/.fwd` file; so you can have user-system specific changes easily across the board if needed.
5. Defaults `.fwd` distributed file bundled in `fwd` CLI; subject to changes with new versions.
