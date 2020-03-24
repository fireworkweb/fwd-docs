---
title: Built-in Commands
description: Commands that are available on fwd
extends: _layouts.documentation
section: content
---

# Built-in Commands {#built-in-commands}

- [Artisan](#artisan)
- [Buddy](#buddy)
- [Build](#build)
- [Composer](#composer)
- [Docker](#docker)
- [Docker Compose](#docker-compose)
- [Dump](#dump)
- [Dusk](#dusk)
- [Install](#install)
- [Jsinspect](#jsinspect)
- [Mysql](#mysql)
- [Mysql Raw](#mysql-raw)

### Artisan {#artisan}

Execute `php artisan` on the `app` service. Alias: `art`. It proxies all arguments. Examples:

```sh
fwd artisan migrate
fwd art horizon
fwd art custom:command
```

### Buddy {#buddy}

Run [Buddy.js](https://github.com/danielstjules/buddy.js/) on the `qa` container. It will spawn a new container. Examples:

```sh
fwd buddy
```

### Build {#build}

Run `docker-compose build` to build all dependency images. You just need to run this command if you have any custom Dockerfile described on `docker-compose.yml`

```sh
fwd build
```

### Docker {#docker}

Execute `docker` command. It proxies all arguments. Examples:

```sh
fwd docker -v
fwd docker ps
fwd docker stats
```

### Docker Compose {#docker-compose}

Execute `docker-compose` command. It proxies all arguments. Examples:

```sh
fwd docker-compose -v
fwd docker-compose pull
```

### Dump {#dump}

Outputs all variables and its values in a beautiful table.

```sh
fwd dump
```

### Dusk {#dusk}

Execute `artisan dusk` command inside `app` service. It proxies all arguments. Examples:

```sh
fwd dump
```

### Install {#install}

Installs fwd dependency files. See [Installation page](/docs/installation#install-on-projects).

Options:

  `-f, --force`: Overwrites project files (docker-compose.yml and .fwd)

  `--docker-compose-version`:  Which Docker Compose file version to use (2 or 3.7). Default is 3.7.

```sh
fwd install
fwd install -f
fwd install --docker-compose-version=2
```

### Jsinspect {#jsinspect}

Run [jsinspect](https://github.com/danielstjules/jsinspect/) on the `qa` container. It will spawn a new container. Examples:

```sh
fwd jsinspect
```

### Mysql {#mysql}

Run mysql-client on the `database` container. Automatically injects the database, username and password. Examples:

```sh
fwd mysql
```

### Mysql Raw {#mysql-raw}

Run mysql-client on the `database` container, without injecting database. Examples:

```sh
fwd mysql-raw
```
