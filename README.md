# Advantage of clean architecture,

- seperation of concerns, we seperate our code into few layers, and they are less coupled with each other, where our domain layer does not depend on any of the layer above it.
- portability, because of the seperation, maybe in future, we want to change the presentation layer, we don't have to change the domain layer, let say if we want to change our database, we simply change the Repository implementation in the `infrastructure/persistence`. it will not effect what we wrote in the `domain` layer.
- maintainability, because it's less coupled, it's easier to maintain, as changing one part in the outer layer doesn't require us to change the inner layer.

# Steps I followed

- we first define an entity, just simple class represent the business entity
- then we define the repository interface for that entity inside our interfaces folder
- then we implement the repository interface in based on our application specific requirement, in this case prisma, you can use mongo or sql.
- then we define the use-cases for our entity.
- then the use-case will be used by the controller.
- and the controller will be used by the routers.

The flow of data is from, router -> controller -> usecase -> repository -> entity

it somehow follow the clean architecture diagram.
![clear architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

# Entity

- entity folder contains, classes that represent the domain concepts of the application. These classes are usually plain old JavaScript objects (POJOs) with no dependencies on any external libraries or frameworks.
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

# Persistence

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

# Use case

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

# Controller

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

# Router

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

# App Server

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

# Running this example

- git clone this repo
- cd into the project directory
- `yarn install`
- copy `.env.example` into `.env`
- update the prisma `DATABASE_URL`
- `yarn prisma generate`
- `yarn prisma db push`
- `yarn run start:dev`

# using docker for postgres

- pull postgress image

```
docker pull postgress
```

- run container expose the port 5432,

```
docker run -e POSTGRES_USER=johndoe -e POSTGRES_PASSWORD=randompassword -p 5432:5432 --name cleandemo postgres
```
