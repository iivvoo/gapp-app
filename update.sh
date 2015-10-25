#!/bin/sh

rm -rf node_modules bower_components dist tmo
npm install
bower install
ember init

