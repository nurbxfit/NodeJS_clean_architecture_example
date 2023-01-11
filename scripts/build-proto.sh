#!/bin/bash

# PROTO_DIR=src\\infrastructure\\gRPC\\proto\\
# PROTO_DIR=./proto
OUT_DIR=src/infrastructure/gRPC/compiled
PROTO_DIR=src/infrastructure/gRPC/protos

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=${OUT_DIR} \
    --plugin=protoc-gen-grpc=.\\node_modules\\.bin\\grpc_tools_node_protoc_plugin.cmd \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=.\\node_modules\\.bin\\protoc-gen-ts.cmd \
    --ts_out=${OUT_DIR} \
    -I ${PROTO_DIR} \
    ${PROTO_DIR}/*.proto
   