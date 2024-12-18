import Express, express from 'express';
import * as dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// put all handlers, and middlwares here




app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
