import express from 'express';
import { ProductController } from '../controllers/productController';
import { auth } from '../middleware/auth';
import { validateRequest } from '../middleware/validateRequest';
import { z } from 'zod';

const router = express.Router();
const productController = new ProductController();

const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(255),
    price: z.number().positive(),
    description: z.string().min(10)
  })
});

const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(255).optional(),
    price: z.number().positive().optional(),
    description: z.string().min(10).optional()
  })
});

router.post('/', auth, validateRequest(createProductSchema), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', auth, validateRequest(updateProductSchema), productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);

export { router as productRouter };