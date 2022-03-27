#!/bin/sh
ENV=$1
NAME=react-learning

if [ "$ENV" = "dev" ]; then
    docker run --rm -it --publish=3000:3000 $NAME:$ENV
elif [ "$ENV" = "prod" ]; then
    docker run --rm -it --publish=80:80 $NAME:$ENV
else
    :
fi
