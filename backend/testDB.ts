import { connect, query, close } from '../backend/src/db/index';

async function testMongoConnection() {
    try {
        // Test connection
        await connect();
        
        // Test insert
        const insertResult = await query('test_collection', 'insertOne', {
            name: 'Test User',
            email: 'test@example.com',
            createdAt: new Date()
        });
        console.log('Insert result:', insertResult);

        // Test find
        const findResult = await query('test_collection', 'find', {
            name: 'Test User'
        });
        console.log('Find result:', findResult);

        // Test update
        const updateResult = await query('test_collection', 'updateOne', {
            filter: { name: 'Test User' },
            update: { $set: { updated: true } }
        });
        console.log('Update result:', updateResult);

        // Test delete
        const deleteResult = await query('test_collection', 'deleteOne', {
            name: 'Test User'
        });
        console.log('Delete result:', deleteResult);

    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        await close();
    }
}

// Run the test
testMongoConnection().catch(console.error);
