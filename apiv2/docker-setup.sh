#!/bin/bash

# Not functioning properly at the moment, will be used at a later time
# Collect staticfiles
# echo "Collecting staticfiles"
# python manage.py collectstatic

# Apply database migrations
echo "Apply database migrations"
python manage.py makemigrations --no-input

# Start server
echo "Syncing database"
python manage.py migrate --run-syncdb

# Add data to database
echo "Adding data to database"
python manage.py loaddata data.json

# Apply database migrations
echo "Starting server"
python manage.py runserver 0.0.0.0:8000

