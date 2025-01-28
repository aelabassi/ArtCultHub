import { Request, Response } from 'express';
import { ProductModel } from '../models/product';
import { StatisticsModel } from '../models/Statistics';

export const productController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const { name, description, price, category, imageUrl} = req.body;

      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
    
      const userId = req.user;

      const product = await new ProductModel({
        user: userId,
        name,
        description,
        price,
        category,
        imageUrl,
        endingIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      }).save();

      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating product' });
    }
  },

  getProducts: async (req: Request, res: Response) => {
    try {
      const { sort } = req.query;

      const userId = req.user;

      let sortOption = {};
      if (sort === 'price') {
        sortOption = { price: -1 };
      } else if (sort === 'latest') {
        sortOption = { createdAt: -1 };
      }

      const products = await ProductModel.find({ user: userId }).sort(sortOption);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  },
};
