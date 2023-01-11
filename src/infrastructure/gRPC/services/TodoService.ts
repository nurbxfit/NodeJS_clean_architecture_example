import { Empty } from "google-protobuf/google/protobuf/empty_pb"
import {
  handleClientStreamingCall,
  handleServerStreamingCall,
  sendUnaryData,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  ServiceError,
} from "grpc"
import TodoService from "../../../domain/usecases/TodoService"
import TodoPrismaRepository from "../../persistence/TodoPrismaRepository"
import { ITodosServer } from "../compiled/todos_grpc_pb"
import { TodoRequest, Todo } from "../compiled/todos_pb"

const service = new TodoService(new TodoPrismaRepository())

export class TodoServer implements ITodosServer {
  constructor() {}

  getTodo(call: ServerUnaryCall<TodoRequest>, callback: sendUnaryData<Todo>) {
    const todoId = call.request.getId()
    console.log("GRPC_CLIENT_IS_GETTING_TODO_WITH_ID:", todoId)
    service
      .findMany()
      .then((result) => {
        const todo = new Todo()
        todo.setId(result[0]?.id)
        todo.setTitle(result[0]?.title)
        todo.setText(result[0]?.text)
        callback(null, todo)
        return
      })
      .catch((err) => {
        const error: ServiceError = {
          name: "Machine Missing",
          message: `Machine with ID ${todoId} does not exist`,
        }
        callback(error, null)
        return
      })
  }

  getTodos(call: ServerWritableStream<Empty>) {
    console.log("GRPC_CLIENT_IS_REQUESTING_ALL_TODO....")
    service.findMany().then((result) => {
      for (const todo of result) {
        call.write(todo)
      }
      call.end
    })
  }

  createTodo(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    console.log("GRPC_CLIENT_IS_CREATING_TODO....")
    let itemCount = 0
    call.on("data", (i) => {
      itemCount++
      console.log("creating:", i)
      service.create("something", "new")
    })

    call.on("end", () => {
      console.log("Number of Machine Created:", itemCount)
      callback(null, new Empty())
    })
  }
}
