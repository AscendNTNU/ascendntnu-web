FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN python manage.py runserver 0.0.0.0:8000
RUN python manage.py makemigrations
RUN python manage.py rmigrate --run-syncdb
