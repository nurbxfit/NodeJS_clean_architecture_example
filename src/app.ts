import express from "express"
import ExpressConfig from "./presentation/express"
import Routes from "./presentation/routes"
import Server from "./presentation/server"
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express()

ExpressConfig(app)
Routes(app)
Server(app).start()
