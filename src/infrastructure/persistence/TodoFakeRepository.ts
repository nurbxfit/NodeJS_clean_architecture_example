import Todo from "../../domain/entities/Todo.entity"
import TodoRepository from "../../domain/interfaces/TodoRepository.interface"

//this is just an example, in reality u need to use sqlite client to read write data
class TodoFakeRepository implements TodoRepository {
  create(item: Todo): Promise<void> {
    return Promise.resolve()
  }

  findAll(): Promise<Todo[]> {
    let item = new Todo("something", "do somethign else")
    return Promise.resolve([item])
  }

  findById(id: number): Promise<Todo> {
    let item = new Todo("something", "do somethign else")
    return Promise.resolve(item)
  }

  update(id: number, item: Todo): Promise<any> {
    return Promise.resolve(item)
  }

  delete(id: number): Promise<any> {
    return Promise.resolve()
  }
}

export default TodoFakeRepository
