import express, { Response, Request } from 'express'
import config from './config'
import morgan from 'morgan'
const app = express()

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handlers

app.get('/', (req: Request, res: Response) => {
  res.send('Hello to art Backend')
})

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
