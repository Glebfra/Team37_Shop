FROM nginx:latest as build
ADD . /etc/nginx

RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /etc/nginx/sites-enabled

RUN mkdir /etc/nginx/sites-available

FROM build AS prod
ADD nginx.conf /etc/nginx/nginx.conf
ADD react.conf /etc/nginx/sites-available
ADD adminer.conf /etc/nginx/sites-available
ADD django.conf /etc/nginx/sites-available

RUN usermod -u 1000 www-data

RUN ln -s /etc/nginx/sites-available/react.conf /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/adminer.conf /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/django.conf /etc/nginx/sites-enabled/

RUN cd /etc/nginx

FROM prod AS final
EXPOSE 80
EXPOSE 443
EXPOSE 8000
EXPOSE 8080
CMD ["nginx"]
