#!/bin/bash

pushd "${SOURCE_DIR}/react-spark";

    if [ "$1" = "clean" ]; then
        echo "Removing react-spark node_modules folder"
        rm -rf node_modules
    fi

    yarn install;

popd;