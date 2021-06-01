import { FastifyPluginCallback } from 'fastify'
import catRoute from './cat'
import userRoute from './user'

const apiRoute: FastifyPluginCallback = (fastify, options, done) => {
  fastify.register(catRoute, { prefix: '/cat' })
  fastify.register(userRoute, { prefix: '/user' })

  done()
}

export default apiRoute
