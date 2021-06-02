import { FastifyPluginCallback } from 'fastify'
import authRoute from './auth'
import catRoute from './cat'
import userRoute from './user'

const apiRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(catRoute, { prefix: '/cat' })
  fastify.register(userRoute, { prefix: '/user' })
  fastify.register(authRoute, { prefix: '/auth' })

  done()
}

export default apiRoute
