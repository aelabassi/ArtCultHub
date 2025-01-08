// src/routes/userRoutes.ts
import express from 'express';
import { UserController } from '../controllers/userController';
import { auth } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';

const router = express.Router();
const userController = new UserController();

// userRoutes.ts
const createUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    username: z.string().min(3).max(30),
    password: z.string().min(8).max(100)
  })
});

const updateUserSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    username: z.string().min(3).max(30).optional(),
    password: z.string().min(8).max(100).optional()
  })
});

router.post('/', validateRequest(createUserSchema), userController.createUser);
router.get('/:id', userController.getUser);
router.put('/', auth, validateRequest(updateUserSchema), userController.updateUser);

export { router as userRouter };