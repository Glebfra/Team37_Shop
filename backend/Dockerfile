FROM python:3-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
RUN apt-get -y update && apt-get -y install postgresql postgresql-contrib gcc libpq-dev

FROM base AS build
RUN pip install --upgrade pip
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app

FROM build AS prod
EXPOSE 8001
CMD ["gunicorn", "team37_api.wsgi"]
