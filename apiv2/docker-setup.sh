#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py makemigrations --no-input

# Start server
echo "Syncing database"
python manage.py migrate --run-syncdb

# Apply database migrations
echo "Starting server"
python manage.py runserver 0.0.0.0:8000
