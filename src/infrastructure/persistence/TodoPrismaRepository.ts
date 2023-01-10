import { PrismaClient } from "@prisma/client"
import Todo from "../../domain/entities/Todo.entity"
import TodoRepository from "../../domain/interfaces/TodoRepository.interface"

// class TodoPrismaRepository implements TodoRepository {
//   client: PrismaClient

//   constructor(prismaClient: PrismaClient) {
//     this.client = prismaClient
//   }

//   create(item: Todo): Promise<void> {
//     return this.client.todo.create({}) //
//   }
// }
