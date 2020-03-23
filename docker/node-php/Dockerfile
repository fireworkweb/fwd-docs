FROM fireworkweb/php:7.4

RUN apk update && \
    apk add --no-cache \
        nodejs \
        npm \
        yarn \
    && rm -fr /var/cache/apk/* \
    && npm config set scripts-prepend-node-path true
