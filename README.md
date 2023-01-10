# Steps I followed

1. install dependencies
2. yarn tsc --init
3. yarn prisma init

- we first define an entitry, just simple class represent the business entity
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
- example of `TodoRepository.ts`

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
