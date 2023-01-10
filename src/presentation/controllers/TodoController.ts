import { NextFunction, Request, Response } from "express"
import TodoService from "../../domain/usecases/TodoService"

class TodoController {
  constructor(public todoService: TodoService) {}

  async index(req: Request, res: Response, next: NextFunction) {
    const allTodo = await this.todoService.findMany()
    return res.status(200).json({
      success: true,
      data: {
        allTodo,
      },
    })
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const createdTodo = await this.todoService.create("something", "else")
    return res.status(201).json({
      success: true,
      data: {
        createdTodo,
      },
    })
  }
}

export default TodoController
