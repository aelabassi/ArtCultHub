import { MongoClient } from 'mongodb';
import config from '../config';

const client = new MongoClient(config.secret.dbUrl!,{ connectTimeoutMS: 5000 });
// Connection function
async function connect() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB database', config.secret.dbUrl);
        return client;
    } catch (err) {
        console.error('Error executing query:', err);

        throw err;}}
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
        throw err;}}
// Close connection
async function close() {
    await client.close();
    console.log('MongoDB connection closed');
}

export { connect, query, close };
