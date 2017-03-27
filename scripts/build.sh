#!/bin/bash

if [ -d "./.publish-temp" ]; then
    rm -r "./.publish-temp"
fi

if [ -d "./lib" ]; then
    rm -r "./lib"
fi

# Add here all access point files.
files=(
    "index"
    "browser"
    "phaser"
)

mkdir lib

for file in "${files[@]}"
do
    ./node_modules/.bin/tsc --declaration ./app/$file.ts --outDir ./.publish-temp --declarationDir ./lib/typings
    ./node_modules/.bin/browserify ./app/$file.ts -p tsify > ./lib/$file.js
done

rm -r "./.publish-temp"
