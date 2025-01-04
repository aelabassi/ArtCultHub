import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRoutes';
import { productRouter } from './routes/productRoutes';
import { updateRouter } from './routes/updateRoutes';
import { commentRouter } from './routes/commentRoutes';

const app = express();

app.use(cors());
app.use(express.json());
