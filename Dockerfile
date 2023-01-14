FROM httpd:2.4
COPY site.css site.html site.js /usr/local/apache2/htdocs/
VOLUME /usr/local/apache2/htdocs/
EXPOSE 80 443
