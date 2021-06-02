import { PrismaClient } from '.prisma/client'
import fastify from 'fastify'
import apiRoute from './routes/api'

export default class Server {
  app = fastify({ logger: true })

  constructor(prisma: PrismaClient) {
    this.setup(prisma)
  }

  setup(prisma: PrismaClient) {
    this.app.decorate('prisma', prisma)
    this.app.register(apiRoute, { prefix: '/api' })
  }

  start() {
    return this.app.listen(4000)
  }

  close() {
    return this.app.close()
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}
