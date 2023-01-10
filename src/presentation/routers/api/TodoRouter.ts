import express from "express"
import TodoService from "../../../domain/usecases/TodoService"
import TodoFakeRepository from "../../../infrastructure/persistence/TodoFakeRepository"
import TodoPrismaRepository from "../../../infrastructure/persistence/TodoPrismaRepository"
import TodoController from "../../controllers/TodoController"

class TodoRouter {
  //maybe can change type any, to type baseController, then todoController will implement or extends baseController
  controller: TodoController
  constructor() {
    this.controller = new TodoController(
      // new TodoService(new TodoFakeRepository())
      new TodoService(new TodoPrismaRepository())
    )
  }

  routes() {
    const router = express.Router()
    router
      .route("/")
      .get(this.controller.index.bind(this.controller))
      .post(this.controller.create.bind(this.controller))
    return router
  }
}

export default TodoRouter
