# Steps I followed

1. install dependencies
2. yarn tsc --init
3. yarn prisma init

- we first define an entity, just simple class represent the business entity
- then we define the repository interface for that entity inside our interfaces folder
- then we implement the repository interface in based on our application specific requirement, in this case prisma, you can use mongo or sql.
- then we define the use cases for our entiry.

# Entity

- entity folder contains, bla bla bla bla...
- example of `Todo.entity.ts`

```ts
class Todo {
  constructor(
    protected id: number,
    protected title: string,
    protected text: string
  ) {}
}
```

# Repository

- repository is an inteface of our entity that are going to be implemented for application specific technology such as mongodb or prisma or sqlite, depends on the requirements. By building on interface, our code business and application will be less coupled , bla bla bla bla
- example of `TodoRepository.interface.ts`

```ts
class TodoRepository {
  async create(todo) {}
  async findAll() {}
  async findById(id) {}
  async update(todo) {}
  async delete(id) {}
}
```

- we can then implement the repository

```ts

//then implement for a application specific tech, example here in /framework/persistence/TodoPrismaRepository.ts
class TodoPrismaRepository implements TodoRepository {
  constructor(prismaClient) {
    this.client = prismaClient
  }

  async findAll() {
    return this.client.todo.findAll()
  }
  ...
}
```

- then to use the repository, we need to define the usecase
- inside the `domain/usecase` create a new usecase `TodoService.ts`
- the service, will depen on the todoRepository, it will handle manipulation of data for todo

```ts
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
```

- our use case will then be use by the controller in the presentation layer.
- our controller will be use by the router.
- in `presentation/controllers`, create new `TodoController.ts`

```ts
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
```

- the controller depend on the service defined in the usecase
- in inside `/presentation/routers/` create new `TodoRouter.ts`

```ts
import express from "express"
import TodoService from "../../../domain/usecases/TodoService"
import TodoFakeRepository from "../../../infrastructure/persistence/TodoFakeRepository"
import TodoController from "../../controllers/TodoController"

class TodoRouter {
  controller: TodoController
  constructor() {
    this.controller = new TodoController(
      new TodoService(new TodoFakeRepository())
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
```

- then to assigns the routes to our express application

```ts
//app.ts

import express from "express"
import TodoRouter from "./presentation/routers/TodoRouter"

const PORT = process.env.PORT || 3000

const app = express()
app.use("/todo", new TodoRouter())

app.listen(PORT, () => {
  console.log(`Server started on : http://localhost:${PORT}/`)
})
```
