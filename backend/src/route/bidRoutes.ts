import express from 'express';
import { bidController } from '../controllers/bidController';
import { authMiddleware} from '../middlewares/auth';

const router = express.Router();

router.post('/place', authMiddleware, async (req, res) => {
    try {
      await bidController.placeBid(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Error placing bid', error });
    }
  });
router.get('/:productId/history', bidController.getBidHistory);

export default router;