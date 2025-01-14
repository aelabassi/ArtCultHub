import express, { Response, Request, RequestHandler } from 'express'
import config from './config'
import morgan from 'morgan'
import mongoose from 'mongoose'
import UserRouter from './routes/user'
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from './middlewares/errorHandler'

import * as dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
dotenv.config()
colors.enable()

// const
const dbURI = config.secret.dbUrl as string
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }))

// User route
app.use('/api', UserRouter)

// error handler
app.use(notFoundMiddleware).use(errorHandlerMiddleware)

async function server() {
  try {
    await mongoose.connect(dbURI)
    console.log(`MongoDB connected: ${colors.green('success')}`)
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`)
    })
  } catch (error) {
    console.log(process.env.MONGO_URL_DEV)
    console.log(`MongoDB connection: ${colors.red('failed')}`)
    process.exit(1)
  }
}
server()
