import { FastifyPluginCallback } from 'fastify'
import { CatRegisterBody } from '../../../../types/Cat/CatRegister/body'
import { CatSearchBody } from '../../../../types/Cat/CatSearch/body'
import CatRegisterBodySchema from '../../../schemas/Cat/CatRegister/body.json'

const catRoute: FastifyPluginCallback = (fastify, options, done) => {
  /* 
    POST /api/cat/register
    Register a cat for adoption
  */
  fastify.post<{ Body: CatRegisterBody }>(
    '/register',
    {
      schema: {
        body: CatRegisterBodySchema,
      },
    },
    async (request, reply) => {
      const { name, gender, age, breed, description, vaccinated, postalCode } =
        request.body

      // get ownerId from request
      const ownerId = '124a4b74-a07a-487b-9b14-f6543aa0aef2'

      // save a cat in db
      const cat = {
        name,
        gender,
        age,
        breed,
        description,
        vaccinated,
        postalCode,
        ownerId,
      }

      try {
        await fastify.prisma.cat.create({
          data: cat,
        })

        reply.send('Cat was added to db')
      } catch (e) {
        console.log(e)
      }
    }
  )

  /* 
    POST /api/cat/search
    Search cats for adoption
  */

  fastify.post<{ Body: CatSearchBody }>('/search', async (request, reply) => {
    const { postalCode, gender, age, breed } = request.body

    try {
      const res = await fastify.prisma.cat.findMany({
        where: { postalCode, gender, age, breed },
        include: {
          owner: {
            select: {
              displayname: true,
              photoUrl: true,
            },
          },
        },
      })
      reply.send(res)
    } catch (e) {
      console.log(e)
    }
  })

  done()
}

export default catRoute
