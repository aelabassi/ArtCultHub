<<<<<<< HEAD
import { query } from '../backend/src/db/index';
=======
import { query } from './db'
>>>>>>> b367ceb20b34bbab26f79ec9e559c4dadbf23a4d

async function testQuery() {
  try {
    const result = await query('SELECT NOW()')
    console.log('Test query result:', result)
  } catch (error) {
    console.error('Test query error:', error)
  }
}

testQuery()
