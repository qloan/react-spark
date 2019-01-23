#!/bin/bash
pushd $SOURCE_DIR/react-spark;
    if [ "$1" = "clean" ]; then
        echo "Removing node_modules folder";
        rm -rf node_modules;
    fi
    npm install;
popd;

pushd $SOURCE_DIR/react-spark/example;
    cp package.json package.orig
    jq 'del(.dependencies["react-spark"])' package.json > package.json.tmp;
    mv package.json.tmp package.json;
    rm -rf node_modules/react-spark
    if [ "$1" = "clean" ]; then
        echo "Removing example/node_modules folder";
        rm -rf node_modules;
    fi
    npm install;
    mv package.orig package.json;
popd;
