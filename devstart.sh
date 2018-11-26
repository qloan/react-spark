#!/bin/bash
cd /react-spark/example;

if [ "$1" = "clean" ]; then
    echo "Removing node_modules folder"
    rm -rf node_modules
fi

npm install;
