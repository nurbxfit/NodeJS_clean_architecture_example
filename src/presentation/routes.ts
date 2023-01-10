import { Express } from "express"
import APIRouter from "./routers/api"

export default function Routes(app: Express) {
  const apiRoutes = APIRouter()
  app.use("/api/v1", apiRoutes)
}
