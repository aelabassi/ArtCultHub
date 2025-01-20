import { Request, Response } from 'express';
import { ProductModel } from '../models/product';
import { StatisticsModel } from '../models/Statistics';
//import {//something} from middleware

export const productController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const { name, description, price, category, imageUrl } = req.body;
      const product = await ProductModel.create({
        user: req.userId,
        name,
        description,
        price,
        category,
        imageUrl,
        endingIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      });

      await StatisticsModel.updateOne(
        {},
        { $inc: { totalArtworkPending: 1 } },
        { upsert: true }
      );

      res.status(201).json(product);
    } catch (error) {
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

      const products = await ProductModel.find(query)
        .sort(sortOption)
        .populate('user', 'username');

      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  }
};
