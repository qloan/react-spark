#!/bin/bash
cd /react-spark/example;

jq 'del(.dependencies["react-spark"])' package.json > package.json.tmp;
mv package.json.tmp package.json;
rm -rf node_modules/react-spark;

if [ "$1" = "clean" ]; then
    echo "Removing node_modules folder"
    rm -rf node_modules
fi

mkdir -p node_modules;
npm install;
npm link react-spark;
