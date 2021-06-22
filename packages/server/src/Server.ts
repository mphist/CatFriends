import { PrismaClient } from '.prisma/client'
import fastify from 'fastify'
import apiRoute from './routes/api'
import cors from 'fastify-cors'

export default class Server {
  app = fastify({ logger: true })

  constructor(prisma: PrismaClient) {
    this.setup(prisma)
  }

  setup(prisma: PrismaClient) {
    this.app.decorate('prisma', prisma)
    this.app.register(apiRoute, { prefix: '/api' })
    this.app.register(cors, {
      origin: (origin, cb) => {
        if (!origin) {
          return cb(null, true)
        }

        if (/localhost/.test(origin)) {
          //  Request from localhost will pass
          return cb(null, true)
        }
        cb(null, true)
      },
      credentials: true,
    })
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
