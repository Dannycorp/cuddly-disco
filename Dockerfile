FROM httpd:2.4 as dev
COPY site.css index.html site.js /usr/local/apache2/htdocs/
EXPOSE 80 443
RUN apt-get update


####################################################################
# will add new images below for other environments like prod etc...#
####################################################################

FROM httpd:2.4 as prod
COPY --from=dev /usr/local/apache2/htdocs/ /usr/local/apache2/htdocs/
EXPOSE 80 443
