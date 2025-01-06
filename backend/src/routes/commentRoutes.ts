import express from 'express';
import { CommentController } from '../controllers/commentController';
import { auth } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';

const router = express.Router();
const commentController = new CommentController();

const createCommentSchema = z.object({
  body: z.object({
    content: z.string().min(1),
    productId: z.number().positive()
  })
});

router.post('/', auth, validateRequest(createCommentSchema), commentController.createComment);
router.get('/product/:productId', commentController.getProductComments);
router.delete('/:id', auth, commentController.deleteComment);

export { router as commentRouter };
