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
      const {
        name,
        gender,
        age,
        breed,
        description,
        vaccinated,
        postalCode,
        spayedOrNeutered,
      } = request.body

      // get ownerId from request
      const ownerId = '596aa0a7-6bb7-4555-bff3-927c9e3ba8f1'

      // convert age into unit of months
      let ageInMonths = 0
      if (age.includes('month')) {
        ageInMonths = Number(age.replace('month', ''))
      }
      if (age.includes('months')) {
        ageInMonths = Number(age.replace('months', ''))
      }
      if (age.includes('year')) {
        ageInMonths = Number(age.replace('year', '')) * 12
      }
      if (age.includes('years')) {
        ageInMonths = Number(age.replace('years', '')) * 12
      }

      // convert to booleans
      const boolVaccinated = vaccinated === 'Yes' ? true : false
      const boolSpayedOrNeutered = spayedOrNeutered === 'Yes' ? true : false

      // save a cat in db
      const cat = {
        name,
        gender,
        age: ageInMonths,
        breed,
        description,
        vaccinated: boolVaccinated,
        spayed_neutered: boolSpayedOrNeutered,
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
