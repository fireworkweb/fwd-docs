FROM node:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get -y install lsb-release apt-transport-https ca-certificates --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg && echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/php.list
RUN apt-get update && \
    apt-get -y install php7.4-cli --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

CMD [ "node" ]