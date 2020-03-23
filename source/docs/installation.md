---
title: Installation
description: Installing fwd on your project
extends: _layouts.documentation
section: content
---

# Installation {#installation}

## Install locally on host machine {#install-locally}

To run `fwd` you must have PHP 7.2 or greater. You will also need [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/) to run your projects.

```sh
curl -L "https://github.com/fireworkweb/fwd/raw/1.0-rc/builds/fwd" -o /usr/local/bin/fwd
chmod +x /usr/local/bin/fwd
```

You can check if it is successfully running by executing `fwd`. It will output the downloaded version and all available commands

```sh
> fwd

  fwd  v1.0-rc.6

  USAGE: fwd <command> [options] [arguments]

  art            Run artisan commands inside the Application container.
  artisan        Run artisan commands inside the Application container.
  buddy          Run buddy in the NODE-QA container.
  build          Run docker-compose build.
  comp           Run composer within the Application container.
  composer       Run composer within the Application container.
  docker         Run docker directly.
  docker-compose Run docker-compose directly.
  dump           Dump all environment variables parsed for fwd.
  dusk           Run artisan dusk commands inside the Application container.
  install        Install fwd configuration files locally in your project.
  jsinspect      Run jsinspect in the NODE-QA container.
  mysql          Run Mysql client inside the container.
  mysql-raw      Run Mysql client inside the container without any database.
  node           Run node commands within a new container.
  node-qa        Run shell commands in the NODE-QA container.
  npm            Run npm in a new container.
  phan           Run phan in the PHP-QA container.
  php            Run shell commands in the APP container.
  php-cs-fixer   Run php-cs-fixer in the PHP-QA container.
  php-qa         Run shell commands in the PHP-QA container.
  phpcpd         Run phpcpd in the PHP-QA container.
  phpmd          Run phpmd in the PHP-QA container.
  phpmnd         Run phpmnd in the PHP-QA container.
  pull           Pull all containers used by fwd.
  reset          Reset environment.
  run            Run containers with fwd bindings.
  self-update    Allows to self-update a build application
  ssh            Start a shell CLI session on a specific service (app, http, database)
  start          Start fwd environment containers.
  status         Shows the status of fwd environment containers.
  stop           Get down containers AND DESTROY THEM.
  template       Process template
  test           Run phpunit commands in the APP container.
  yarn           Run yarn in a new container.
```

## Install on projects

To add it to your project you just need to run `fwd install`. This will create the `.fwd` (environment variables) and docker-compose.yml (services definitions) files in your project (you probably want to have them versioned).

You should review the variables and services in both files to best suit them to your project needs. The out-of-the-box configuration is great for PHP Laravel applications. Special attention to the environment variables flexibity (check out the [Environment Variables](/docs/environment-variables) page).
