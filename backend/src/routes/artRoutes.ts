import { Router, Request, Response } from 'express'
import { query } from '../db'

const router = Router()

// Test route to verify it's working
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Art routes are working!' })
})

// Get all artworks
router.get('/artworks', async (req: Request, res: Response) => {
  try {
    console.log('Querying database for artworks...')
    const result = await query('SELECT * FROM artworks')
    console.log('Query successful:', result)
    res.json(result.rows)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Test database connection endpoint
router.get('/test-db', async (req: Request, res: Response) => {
  try {
    console.log('Testing database connection...')
    const result = await query('SELECT NOW()')
    console.log('Database connection successful:', result)
    res.json({
      message: 'Database connection successful',
      timestamp: result.rows[0].now,
    })
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Database connection failed' })
  }
})

export default router
