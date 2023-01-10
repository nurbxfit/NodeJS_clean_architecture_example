// export interface BaseRepository<T> {
//   create(item: T): Promise<void>
//   findAll(): Promise<T[]>
//   findById(id: T[keyof T]): Promise<T | undefined>
//   update(item: T): Promise<T | any>
//   delete(id: T[keyof T]): Promise<T | any>
// }

export interface BaseRepository<T, ID> {
  create(item: T): Promise<void>
  findAll(): Promise<T[]>
  findById(id: ID): Promise<T | undefined>
  update(id: ID, item: T): Promise<T | any>
  delete(id: ID): Promise<T | any>
}
