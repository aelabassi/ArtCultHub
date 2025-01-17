<<<<<<< HEAD
import { MongoClient } from 'mongodb';
import config from '../config';

const client = new MongoClient(config.databaseUrl,{ connectTimeoutMS: 5000 });

// Connection function
async function connect() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB database', config.databaseUrl);
        return client;
    } catch (err) {
        console.error('Error executing query:', err);

        throw err;
    }
}

// Query wrapper function
async function query(collection: string, queryType: string, params: any = {}) 
: Promise<any>{
    try {
        const db = client.db();
        const coll = db.collection(collection);
        
        console.log('Executing query:', queryType, 'with params:', params);
        
        switch (queryType) {
            case 'find':
                return await coll.find(params).toArray();
            case 'findOne':
                return await coll.findOne(params);
            case 'insertOne':
                return await coll.insertOne(params);
            case 'updateOne':
                return await coll.updateOne(params.filter, params.update);
            case 'deleteOne':
                return await coll.deleteOne(params);
            default:
                throw new Error(`Unknown query type: ${queryType}`);
        }
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

// Close connection
async function close() {
    await client.close();
    console.log('MongoDB connection closed');
}

export { connect, query, close };
=======
import { Pool } from 'pg'
import config from '../config'

const pool = new Pool({
  connectionString: config.databaseUrl,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client:', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query:', err.stack)
    }
    console.log('Successfully connected to PostgreSQL database')
  })
})

export const query = (text: string, params?: any[]) => {
  console.log('Executing query:', text, params)
  return pool.query(text, params)
}

export default pool
>>>>>>> b367ceb20b34bbab26f79ec9e559c4dadbf23a4d
