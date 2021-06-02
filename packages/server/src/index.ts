import Server from './Server'
import dotenv from 'dotenv'
import { PrismaClient } from '.prisma/client'

dotenv.config()

const prisma = new PrismaClient()

prisma
  .$connect()
  .then(async () => {
    const server = new Server(prisma)
    await server.start()
  })
  .catch((e: any) => console.log(e))
