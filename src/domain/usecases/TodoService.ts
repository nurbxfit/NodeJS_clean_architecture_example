import Todo from "../entities/Todo.entity"
import TodoRepository from "../interfaces/TodoRepository.interface"

class TodoService {
  constructor(public todoRepository: TodoRepository) {}

  findMany() {
    return this.todoRepository.findAll()
  }

  create(title: string, text: string) {
    return this.todoRepository.create(new Todo(title, text))
  }
}

export default TodoService
