import { Request, Response } from 'express';
import { ProductModel } from '../models/product';
import { StatisticsModel } from '../models/Statistics';

export const productController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const { name, description, price, category, imageUrl } = req.body;

      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      const userId = (req.user as any).id;

      const product = await ProductModel.create({
        name,
        description,
        price,
        category,
        imageUrl,
        creator: userId,
        endingIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
      });

      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating product' });
    }
  },

  getProducts: async (req: Request, res: Response) => {
    try {
      const { category, sort } = req.query;

      let query = {};
      if (category) {
        query = { category };
      }

      let sortOption = {};
      if (sort === 'price') {
        sortOption = { price: -1 };
      } else if (sort === 'latest') {
        sortOption = { createdAt: -1 };
      }

      const products = await ProductModel.find(query).sort(sortOption);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  },
};
