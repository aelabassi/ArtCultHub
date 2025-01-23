import express from 'express';
import { bidController } from '../controllers/bidController';
import { authMiddleware} from '../middlewares/auth';

const router = express.Router();

router.post('/place', authMiddleware, bidController.placeBid);
router.get('/:productId/history', bidController.getBidHistory);

export default router;