import express from "express"
import TodoFakeRepository from "../../../infrastructure/persistence/TodoFakeRepository"
import TodoController from "../../controllers/TodoController"
import TodoRouter from "./TodoRouter"

export default function APIRouter() {
  const routes = express.Router()

  routes.use("/todo", new TodoRouter().routes())

  return routes
}
