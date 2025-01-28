import express from 'express';
import { productController } from '../controllers/productController';
import { authMiddleware} from '../middlewares/auth';

const router = express.Router();


router.post('/create', authMiddleware, async (req, res) => {
    try {
      await productController.createProduct(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Error creating product', error });
    }
  });
router.get('/', authMiddleware, productController.getProducts);

export default router;