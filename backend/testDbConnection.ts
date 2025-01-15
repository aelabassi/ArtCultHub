import { query } from './db'

async function testQuery() {
  try {
    const result = await query('SELECT NOW()')
    console.log('Test query result:', result)
  } catch (error) {
    console.error('Test query error:', error)
  }
}

testQuery()
