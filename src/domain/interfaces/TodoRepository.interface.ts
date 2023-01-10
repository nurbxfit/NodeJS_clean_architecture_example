import Todo from "../entities/Todo.entity"
import { BaseRepository } from "./BaseRepository.interface"

// interface TodoRepository {
//   create(item: Todo): Promise<void>
//   findAll(): Promise<Todo[]>
//   findById(id: Todo[keyof Todo]): Promise<Todo | undefined>
//   update(item: Todo): Promise<Todo | any>
//   delete(id: Todo[keyof Todo]): Promise<Todo | any>
// }

interface TodoRepository extends BaseRepository<Todo, number> {}

export default TodoRepository
