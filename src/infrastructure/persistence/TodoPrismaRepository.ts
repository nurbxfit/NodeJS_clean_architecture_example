import { PrismaClient } from "@prisma/client"
import { rejects } from "assert"
import { resolve } from "path"
import Todo from "../../domain/entities/Todo.entity"
import TodoRepository from "../../domain/interfaces/TodoRepository.interface"

class TodoPrismaRepository implements TodoRepository {
  client: PrismaClient
  constructor() {
    this.client = new PrismaClient()
  }

  create(item: Todo): Promise<void> {
    return this.client.todo
      .create({
        data: {
          title: item.title,
          text: item.text,
        },
      })
      .then((result: any) => {
        console.log("RESULT_TODO_CREATED:", result)
        return Promise.resolve()
      })
      .catch((error: any) => {
        console.log("ERROR_TODO_CREATE:", error)
        return Promise.reject()
      })
  }

  findAll(): Promise<Todo[]> {
    return new Promise((resolve, rejects) => {
      this.client.todo
        .findMany()
        .then((result: any) => {
          return resolve(result)
        })
        .catch((error: any) => {
          rejects(error)
        })
    })
  }

  findById(id: number): Promise<Todo> {
    return new Promise((resolve, rejects) => {
      this.client.todo
        .findUnique({
          where: {
            id,
          },
        })
        .then((result: any) => {
          resolve(result)
        })
        .catch((error: any) => {
          rejects(error)
        })
    })
  }

  update(id: number, item: Todo): Promise<any> {
    return Promise.resolve()
  }

  delete(id: number): Promise<any> {
    // return this.client.todo.delete({
    //   where: {
    //     id,
    //   },
    // })
    return Promise.resolve()
  }
}

export default TodoPrismaRepository
