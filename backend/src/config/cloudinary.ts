import express, { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products',
    allowed_formats: ['jpg', 'png', 'webp', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  }
});

const upload = multer({ storage: storage });

// Product Model Interface
interface Product {
  name: string;
  price: number;
  imageUrl?: string;
}

// Product Upload Route
const productRouter = express.Router();

productRouter.post(
  '/upload', 
  upload.single('productImage'),
  async (req: Request, res: Response) => {
    try {
      const file = req.file as Express.MulterCloudinaryFile;
      
      const product: Product = {
        name: req.body.name,
        price: parseFloat(req.body.price),
        imageUrl: file.path // Cloudinary URL
      };

      // Save product to database here
      res.status(201).json({
        message: 'Product uploaded successfully',
        product
      });
    } catch (error) {
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);

export default productRouter;