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

./node_modules/.bin/tsc -p ./tsconfig.json --declaration --outDir ./.publish-temp --declarationDir ./lib/typings

for file in "${files[@]}"
do
    ./node_modules/.bin/browserify ./app/$file.ts -p tsify > ./lib/$file.js
done

# ./node_modules/.bin/dts-bundle --name input-action-binder --main ./lib/typings/index.d.ts --out ./../input-action-binder.d.ts

rm -r "./.publish-temp"
