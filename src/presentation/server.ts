import { Express } from "express"

export default function Server(app: Express) {
  const PORT = process.env.PORT || 3000

  function start() {
    app.listen(PORT, () => {
      console.log(`Server started on : http://localhost:${PORT}/`)
    })
  }

  return { start }
}
