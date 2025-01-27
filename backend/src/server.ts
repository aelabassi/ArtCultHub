import express, { Response, Request, RequestHandler } from 'express'
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import config from './config'
import morgan from 'morgan'
import mongoose from 'mongoose';
import UserRouter from './routes/user';
import ProductRouter from './routes/productRoute';
import BidRouter from './routes/bidRoutes';
import StatisticsRouter from './routes/statisticsRoutes';
import imageUploadRouter from './routes/imageUpload';
import * as dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors'
import { notFoundMiddleware, errorHandlerMiddleware } from './middlewares/errorHandler';


dotenv.config();
colors.enable();

const MONGODB_URI: string = config.secret.dbUrl as string;

export const app = express()

// middlewares
app.use(morgan(`${colors.yellow(config.stage)}`))
app.use(cors())
app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: [config.secret.cookieKey ?? ''],
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: config.stage === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  }
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'static' , 'index.html'))
})
app.use('/api', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/bids', BidRouter);
app.use('/api/statistics', StatisticsRouter);
app.use('/api/upload', imageUploadRouter);
app.use('/api/upload', imageUploadRouter);

// Error handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user: any, done) => {
  done(null, user)
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