#!/bin/sh
rm .merged.yaml
for file in $(ls ./openapi/reference | grep .yaml)
do
  echo "\$include#$(echo $file | sed -r 's/.yaml$//g'): ./reference/$file" >> ./openapi/.merged.yaml
done