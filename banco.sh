#! /bin/bash

export run="docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres"