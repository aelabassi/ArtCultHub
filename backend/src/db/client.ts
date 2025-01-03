import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
    connectionString: config.secret.databaseUrl
});

// Test the database connection when the application starts
pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.error('Error executing query:', err.stack);
    } else {
        console.log('Successfully connected to PostgreSQL database at', result.rows[0].now);
    }
});

export const query = (text: string, params?: any[]) => {
    console.log('Executing query:', text, params);
    return pool.query(text, params);
};

export default pool;