# fwd Documentation

Documentation for [fwd](https://github.com/fireworkweb/fwd). Created with [Jigsaw](https://jigsaw.tighten.co).

## Getting Started

```bash
# install composer dependencies
docker run --rm --interactive --tty --volume $PWD:/app -w /app composer install

# build node-php docker image
docker build docker/node-php -t fireworkweb/node-php:latest

# install node dependencies
docker run --rm --interactive --tty --volume $PWD:/app -w /app fireworkweb/node-php yarn install
```

### Building

```bash
# build static files with Jigsaw
docker run --rm --interactive --tty --volume $PWD:/app -w /app -p 3000:3000 -p 3001:3001 fireworkweb/node-php php ./vendor/bin/jigsaw build

# compile assets with Laravel Mix
# options: dev, staging, production
docker run --rm --interactive --tty --volume $PWD:/app -w /app -p 3000:3000 -p 3001:3001 fireworkweb/node-php yarn dev
```

### Develop

```bash
# compile assets with Laravel Mix and watch changes
docker run --rm --interactive --tty --volume $PWD:/app -w /app -p 3000:3000 -p 3001:3001 fireworkweb/node-php yarn watch
```
