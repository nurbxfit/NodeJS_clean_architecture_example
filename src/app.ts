import express from "express"
import ExpressConfig from "./presentation/express"
import Routes from "./presentation/routes"
import Server from "./presentation/server"

const app = express()

ExpressConfig(app)
Routes(app)
Server(app).start()
