#!/bin/bash

rm -rf doc target/doc
cargo doc --no-deps --document-private-items -j 4 --color always
mv target/doc ./doc
