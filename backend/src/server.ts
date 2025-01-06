import express, { Response, Request, RequestHandler } from 'express'
import config from './config'
import morgan from 'morgan'
import mongoose from 'mongoose';
import UserRouter from './routes/user';

import * as dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors'
dotenv.config();
colors.enable();

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }))

// handlers
// User route
app.use('/api', UserRouter);

async function server(){
  try{
    await mongoose.connect(process.env.MONOG_URL ?? '');
    app.listen(config.port)
    console.log(`MongoDB connected: ${colors.green('success')}`);
  }catch(error){
    console.log(process.env.MONGO_URL);
    console.log(`MongoDB connection: ${colors.red('failed')}`);
    process.exit(1);
  }
}
server();
