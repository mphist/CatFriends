import { FastifyPluginCallback } from 'fastify'
import { CreateUserBody } from '../../../../types/User/CreateUser/body'
import CreateUserBodySchema from '../../../schemas/User/CreateUser/body.json'

const userRoute: FastifyPluginCallback = (fastify, options, done) => {
  /* 
    POST /api/user/create
    Create a new user
  */

  fastify.post<{ Body: CreateUserBody }>(
    '/create',
    {
      schema: {
        body: CreateUserBodySchema,
      },
    },
    async (request, reply) => {
      const { email, username, displayname, photoUrl } = request.body

      // save a new user in db
      try {
        await fastify.prisma.user.create({
          data: {
            email,
            username,
            displayname,
            photoUrl,
          },
        })

        reply.status(200).send('User was created successfully')
      } catch (e) {
        console.log(e)
      }
    }
  )
  done()
}

export default userRoute
