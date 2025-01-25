import express, { Response, Request, RequestHandler } from 'express'
import config from './config'
import morgan from 'morgan'
import mongoose from 'mongoose';
import UserRouter from './routes/user';
import ProductRouter from './routes/productRoute';
import BidRouter from './routes/bidRoutes';
import StatisticsRouter from './routes/statisticsRoutes';
import * as dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors'
import { notFoundMiddleware, errorHandlerMiddleware } from './middlewares/errorHandler';


dotenv.config();
colors.enable();

const MONGODB_URI: string = config.secret.dbUrl as string;

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/bids', BidRouter);
app.use('/api/statistics', StatisticsRouter);

// Error handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})
async function server(){
  try{
    await mongoose.connect(MONGODB_URI);
    app.listen((config.port), () =>{
      console.log(`Server running on port ${config.host}:${config.port}`);
    })
    console.log(`MongoDB connected: ${colors.green('success')}`);
  }catch(error){
    console.log(`MongoDB connection: ${colors.red('failed')}`);
    process.exit(1);
  }
}
server();