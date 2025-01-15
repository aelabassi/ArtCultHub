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
