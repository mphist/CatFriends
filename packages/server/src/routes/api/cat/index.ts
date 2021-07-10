import { FastifyPluginCallback } from 'fastify'
import { CatRegisterBody } from '../../../../types/Cat/CatRegister/body'
import { CatSearchBody } from '../../../../types/Cat/CatSearch/body'
import normalizeData from '../../../lib/normalizeData'
import convertToMonths from '../../../lib/normalizeData'
import CatRegisterBodySchema from '../../../schemas/Cat/CatRegister/body.json'
import CatSearchBodySchema from '../../../schemas/Cat/CatSearch/body.json'

const catRoute: FastifyPluginCallback = (fastify, options, done) => {
  /*
    POST /api/cat/upload_imgur
    Upload images/videos to imgur
  */

  // fastify.post<{ Body: UploadImgurBody }>(
  //   '/upload_imgur',
  //   {
  //     schema: {
  //       body: UploadImgurBodySchema,
  //     },
  //   },
  //   async (request, reply) => {
  //     const { files } = request.body

  //     const file1 = (files as File[])[0]
  //     console.log('heres the first file', file1)

  //     const res = await axios.post(
  //       'https://api.imgur.com/3/image',
  //       {
  //         image: files,
  //         title: 'test title',
  //         description: 'test description',
  //       },
  //       {
  //         headers: {
  //           Authorization: 'Bearer f4a41751c264b6d62425472716d8369e9ca4e761',
  //         },
  //       }
  //     )
  //     console.log('response from imgur', res)

  //     if (files && files.length !== 0) {
  //       files.forEach(async (file) => {
  //         console.log(file)
  //         try {
  //           const res = await axios.post(
  //             'https://api.imgur.com/3/image',
  //             {
  //               image: file,
  //               title: 'test title',
  //               description: 'test description',
  //             },
  //             {
  //               headers: {
  //                 Authorization:
  //                   'Bearer f4a41751c264b6d62425472716d8369e9ca4e761',
  //               },
  //             }
  //           )
  //           console.log('response from imgur', res)
  //         } catch (e) {
  //           console.log(e.message)
  //         }
  //       })
  //     }

  //     reply.send('ok')
  //   }
  // )

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
      } = request.body

      // normalize data
      const normalizedData = normalizeData({
        city,
        age,
        vaccinated,
        spayedOrNeutered,
      })
      console.log(normalizedData)

      try {
        const res = await fastify.prisma.cat.findMany({
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
