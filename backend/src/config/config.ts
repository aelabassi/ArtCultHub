import dotenv from 'dotenv';
dotenv.config();

export default {
    databaseUrl: process.env.DATABASE_URL || 'mongodb+srv://your-default-local-connection'
};