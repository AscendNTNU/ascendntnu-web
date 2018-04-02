FROM python:3

ENV PYTHONUNBUFFERED 1
ENV WS /code

# Create workspace directory
RUN mkdir -p $WS
WORKDIR $WS

# Install requirements.txt
ADD requirements.txt $WS
RUN pip install -r requirements.txt
