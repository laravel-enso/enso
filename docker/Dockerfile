FROM php:8.0-cli

# Apache configuration
RUN a2enmod rewrite

# Install dependencies
RUN apt-get update \
  && apt-get install -y zlib1g-dev libicu-dev wget gnupg g++ git openssh-client \
  && apt-get install -y libxml2-dev libfreetype6-dev libpng-dev libjpeg-dev libzip-dev \
  && apt-get install -y libpng-dev libfreetype6-dev libjpeg62-turbo-dev \
  && apt-get install -y libmagickwand-dev unzip\
  && docker-php-ext-configure intl \
  && docker-php-ext-install intl pdo_mysql zip

#Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update \
  && apt-get install -y nodejs \
  && apt-get install -y yarn

# clean
RUN rm -rf /var/cache/apk/*

# Install php extensions.
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install bcmath intl zip pcntl soap gd

# Enable imagick
RUN pecl install imagick-3.4.3
RUN echo "extension=imagick.so" >> /usr/local/etc/php/conf.d/imagick.ini

# Install xdebug
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
