#!/usr/bin/env bash

jade -w jade/ -o html/ -P &
sass --watch scss/app.scss:css/app.css --sourcemap=none
wait
