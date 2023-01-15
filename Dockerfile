FROM httpd:2.4
COPY site.css index.html site.js /usr/local/apache2/htdocs/
EXPOSE 80 443
