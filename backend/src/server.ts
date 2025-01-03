import express, { Response, Request } from 'express';
import morgan from 'morgan';
import config from './config';
import artRoutes from './routes/artRoutes';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// handlers
app.get('/', (req: Request, res: Response) => {
    res.send('Hello to art Backend');
});

// Routes
app.use('/api', artRoutes); 

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

export default app;