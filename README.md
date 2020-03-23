# fwd Documentation

Documentation for [fwd](https://github.com/fireworkweb/fwd). Created with [Jigsaw](https://jigsaw.tighten.co).

## Getting Started

You need `fwd` at least 1.0-rc.8.

```bash
# Build local images
fwd build

# Install node dependencies
fwd yarn install

# Start containers
fwd start

# Install composer dependencies
fwd composer install

# **RECOMMENDED** Restart all containers
fwd stop && fwd start
```

### Building

```bash
# build static files with Jigsaw
fwd php ./vendor/bin/jigsaw build

# compile assets with Laravel Mix
# options: dev, staging, production
fwd yarn dev
```

### Develop

```bash
# Start containers with watching
fwd start
```

If you add any files, it will not be automatically picked up by the watcher. You need to restart:

```bash
# Restart all containers
fwd stop && fwd start
```
