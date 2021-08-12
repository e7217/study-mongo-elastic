#!/bin/bash

sleep 10 | echo Sleeping

mongo mongodb://user:password@mongo:27017 replicaSet.js
