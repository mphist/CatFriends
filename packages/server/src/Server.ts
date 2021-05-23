import fastify from 'fastify'

export default class Server {
  app = fastify({ logger: true })

  constructor() {
    this.setup()
  }

  setup() {}

  start() {
    return this.app.listen(4000)
  }

  close() {
    return this.app.close()
  }
}
