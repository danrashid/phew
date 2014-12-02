#!/usr/bin/env bash

jade -w jade/ -o . -P &
sass --watch scss/app.scss:css/app.css --sourcemap=none
wait
