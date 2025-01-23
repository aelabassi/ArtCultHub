import express from 'express';
import { StatisticsController } from '../controllers/StaisticsController';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();
const statisticsController = new StatisticsController();

router.get('/', StatisticsController.getStatistics);
router.put('/update', authMiddleware, StatisticsController.updateStatistics);
router.patch('/increment', authMiddleware, StatisticsController.incrementStatistics);

export default router;