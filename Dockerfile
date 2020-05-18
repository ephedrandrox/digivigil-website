FROM php:7.2.14-apache-stretch

RUN apt-get update


# Add vim
RUN apt-get install -y vim

# Add libraries required for the zip PHP extension
RUN apt-get install -y zlib1g zlib1g-dev


# Add networking tools required to more easily add host.docker.internal host entry on Linux hosts
RUN apt-get install -y iputils-ping iproute2

# Enable apache2 modules
RUN a2enmod rewrite
RUN a2enmod vhost_alias

# Set PHP datetime to UTC
RUN echo date.timezone=UTC >> /usr/local/etc/php/conf.d/datetime.ini

# Install php extensions

RUN docker-php-ext-install opcache
RUN docker-php-ext-install zip
RUN docker-php-ext-install bcmath


RUN pecl config-set php_ini /etc/php.ini

# Install and configure Xdebug
RUN yes | pecl install xdebug-2.6.1 \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_host=host.docker.internal" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.profiler_enable_trigger=1" >> /usr/local/etc/php/conf.d/xdebug.ini

# Add alias for ll
RUN echo 'alias ll="ls -l"' >> ~/.bashrc

# Allow .htaccess
RUN echo "<Directory /var/www/html/public/>" >> /etc/apache2/conf-enabled/vhost_alias.conf \
 && echo "  AllowOverride all" >> /etc/apache2/conf-enabled/vhost_alias.conf \
 && echo "</Directory>" >> /etc/apache2/conf-enabled/vhost_alias.conf

# Enable debug logging
RUN echo "LogLevel debug" >> /etc/apache2/conf-enabled/debug_logging

# Configure virtual host document root
RUN echo "VirtualDocumentRoot /var/www/html/public/digivigil-website-develop" >> /etc/apache2/conf-enabled/vhost_alias.conf


