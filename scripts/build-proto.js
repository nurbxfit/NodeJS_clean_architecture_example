const { exec } = require("child_process")

const OUT_DIR = "src/infrastructure/gRPC/compiled"
const PROTO_DIR = "src/infrastructure/gRPC/protos"

const command1 = `yarn run grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${OUT_DIR} \
--grpc_out=${OUT_DIR} \
--plugin=protoc-gen-grpc=.\\node_modules\\.bin\\grpc_tools_node_protoc_plugin.cmd \
-I ${PROTO_DIR} \
${PROTO_DIR}/*.proto`

const command2 = `yarn run grpc_tools_node_protoc \
--plugin=protoc-gen-ts=.\\node_modules\\.bin\\protoc-gen-ts.cmd \
--ts_out=${OUT_DIR} \
-I ${PROTO_DIR} \
${PROTO_DIR}/*.proto
`
exec(command1, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stdout)
})

exec(command2, (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stdout)
})
