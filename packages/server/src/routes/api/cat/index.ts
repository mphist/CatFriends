import { FastifyPluginCallback } from 'fastify'
import { CatRegisterBody } from '../../../../types/Cat/CatRegister/body'
import { CatSearchBody } from '../../../../types/Cat/CatSearch/body'
import normalizeData from '../../../lib/normalizeData'
import convertToMonths from '../../../lib/normalizeData'
import CatRegisterBodySchema from '../../../schemas/Cat/CatRegister/body.json'
import CatSearchBodySchema from '../../../schemas/Cat/CatSearch/body.json'

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
        city,
        country,
        spayedOrNeutered,
        media,
      } = request.body

      // get ownerId from request
      const ownerId = '596aa0a7-6bb7-4555-bff3-927c9e3ba8f1'

      // normalize data
      const normalizedData = normalizeData({
        city,
        age,
        vaccinated,
        spayedOrNeutered,
        name,
      })

      // save a cat in db
      const cat = {
        name: normalizedData.name!,
        gender,
        age: normalizedData.age!,
        breed,
        description,
        vaccinated: normalizedData.vaccinated!,
        spayed_neutered: normalizedData.spayedOrNeutered!,
        city: normalizedData.city!,
        country,
        ownerId,
        media,
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

  fastify.post<{ Body: CatSearchBody }>(
    '/search',
    {
      schema: {
        body: CatSearchBodySchema,
      },
    },
    async (request, reply) => {
      const {
        city,
        country,
        gender,
        age,
        breed,
        vaccinated,
        spayedOrNeutered,
        offset,
      } = request.body

      // normalize data
      const normalizedData = normalizeData({
        city,
        age,
        vaccinated,
        spayedOrNeutered,
      })

      try {
        const res = await fastify.prisma.cat.findMany({
          skip: offset ?? 0,
          take: 5,
          where: {
            city: normalizedData.city,
            country,
            gender,
            breed,
            age: normalizedData.age,
            vaccinated: normalizedData.vaccinated,
            spayed_neutered: normalizedData.spayedOrNeutered,
          },
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
    }
  )

  done()
}

export default catRoute
