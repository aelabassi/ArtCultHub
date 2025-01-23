import express from 'express';
import { StatisticsController } from '../controllers/StaisticsController';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

const statisticsController = new StatisticsController();

router.get('/', async (req, res) => {
  try {
    await statisticsController.getStatistics(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching statistics', error });
  }
});

router.put('/update', authMiddleware, async (req, res) => {
  try {
    await statisticsController.updateStatistics(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error updating statistics', error });
  }
});

router.patch('/increment', authMiddleware, async (req, res) => {
  try {
    await statisticsController.incrementStatistics(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Error incrementing statistics', error });
  }
});

export default router;