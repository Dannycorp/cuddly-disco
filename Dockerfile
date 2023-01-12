FROM httpd:latest
COPY site.css site.html site.js /usr/local/apache2/htdocs/
