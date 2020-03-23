---
title: Built-in Commands
description: Commands that are available on fwd
extends: _layouts.documentation
section: content
---

# Built-in Commands {#built-in-commands}

- [Artisan](#artisan)
- [Buddy](#buddy)

### Artisan {#artisan}

Execute `php artisan` on the `app` service. Alias: `art`. Examples:

```sh
fwd artisan migrate
fwd art horizon
```

### Buddy {#buddy}

Run [Buddy.js](https://github.com/danielstjules/buddy.js/) on the `qa` container. It will spawn a new container. Examples:

```sh
fwd artisan migrate
fwd art horizon
```
