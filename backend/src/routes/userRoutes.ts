import { Router } from 'express';
import { prisma } from '../db/client';

const router = Router();

router.get('/test-db', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        id: 'test-user-1',
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      },
    });
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

export default router;