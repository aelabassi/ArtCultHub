import express from 'express';
import { productController } from '../controllers/productController';
import { authMiddleware} from '../middlewares/auth';

const router = express.Router();

router.post('/create', authMiddleware, productController.createProduct);
router.get('/', productController.getProducts);

export default router;