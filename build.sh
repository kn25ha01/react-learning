#!/bin/sh
ENV=$1
NAME=react-learning

docker build -f ./docker/$ENV/Dockerfile -t $NAME:$ENV .
