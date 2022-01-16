#!/bin/bash ls.sh
files=($(ls $1))
echo ${#files[@]}