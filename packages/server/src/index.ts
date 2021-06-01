import { PrismaClient } from '.prisma/client'
import Server from './Server'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

prisma
  .$connect()
  .then(async () => {
    const server = new Server(prisma)
    await server.start()
  })
  .catch((e) => console.log(e))
