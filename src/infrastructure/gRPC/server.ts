import { Server, ServerCredentials } from "grpc"
import DomainTodoService from "../../domain/usecases/TodoService"
import TodoPrismaRepository from "../persistence/TodoPrismaRepository"
import { TodosService } from "./compiled/todos_grpc_pb"
import { TodoServer } from "./services/TodoService"

export default function gRPCServer() {
  const server = new Server()
  server.addService(TodosService, new TodoServer())
  const port = 3333
  const uri = `localhost:${port}`
  console.log(`gRPC Listening on ${uri}`)
  server.bind(uri, ServerCredentials.createInsecure())

  return server
}
