import express from 'express';
import { UpdateController } from '../controllers/updateController';
import { auth } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';

const router = express.Router();
const updateController = new UpdateController();

const createUpdateSchema = z.object({
  body: z.object({
    status: z.enum(['DEPRECATED', 'IN_PROGRESS', 'SHIPPED']).optional(),
    version: z.string().optional(),
    asset: z.string().optional()
  })
});

router.post('/product/:productId', auth, validateRequest(createUpdateSchema), updateController.createUpdate);
router.get('/product/:productId', updateController.getUpdates);
router.patch('/:id/status', auth, updateController.updateStatus);

export { router as updateRouter };
