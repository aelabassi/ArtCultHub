// src/app.ts
import express from 'express';
import cors from 'cors';
import { userRouter } from './src/routes/userRoutes';
import { productRouter } from './src/routes/productRoutes';
import { updateRouter } from './src/routes/updateRoutes';
import { commentRouter } from './src/routes/commentRoutes';
import { validateConfig } from './src/config/config';

// Validate environment variables before starting the app
validateConfig();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/updates', updateRouter);
app.use('/api/comments', commentRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;