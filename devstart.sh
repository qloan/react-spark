#!/bin/bash

pushd "${SOURCE_DIR}/react-spark/example";

    cp package.json package.json.backup;
    jq 'del(.dependencies["react-spark"])' package.json > package.json.tmp;
    mv package.json.tmp package.json;
    rm -rf node_modules/react-spark;

    if [ "$1" = "clean" ]; then
        echo "Removing node_modules folder"
        rm -rf node_modules
    fi

    mkdir -p node_modules;

    pushd "./node_modules";
        npm link react-spark;
        npm install;
    popd;

    mv package.json.backup package.json;

popd;