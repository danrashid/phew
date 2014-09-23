#!/usr/bin/env bash

jade -w build/index.jade -o . &
sass --watch build/scss/_app.scss:app.css
wait
