import { FastifyPluginCallback } from 'fastify'
import { GoogleCheckUserBody } from '../../../../types/auth/googleCheckUser/body'
import { GoogleSignupBody } from '../../../../types/auth/googleSignup/body'
import { CreateUserBody } from '../../../../types/User/CreateUser/body'
import client from '../../../lib/api/client'
import getGoogleProfile from '../../../lib/api/google/getGoogleProfile'

const authRoute: FastifyPluginCallback = (fastify, options, done) => {
  /* 
    POST /api/auth/google/check
    Check whether user has already registered
  */
  fastify.post<{ Body: GoogleCheckUserBody }>(
    '/google/check',
    async (request, reply) => {
      const { access_token } = request.body
    }
  )

  fastify.post<{ Body: GoogleSignupBody }>(
    '/google/signup',
    async (request, reply) => {
      const { access_token, username } = request.body

      // const { socialId, email, photo, displayname } = getGoogleProfile()

      await getGoogleProfile(access_token)

      // call create user api
      // try {
      //   const res = await client.post('/user/create', {
      //     email,
      //     username,
      //     displayname,
      //     photoUrl: photo,
      //   })
      // } catch (e) {
      //   console.log(e)
      // }
    }
  )

  done()
}

export default authRoute
