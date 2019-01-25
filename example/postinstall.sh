#!/bin/bash
rm -rf node_modules/react-spark;
ln -s ../.. node_modules/react-spark;
npm run build;
