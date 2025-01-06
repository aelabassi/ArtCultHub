// src/controllers/productController.ts
import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const ownerId = req.user!.id;
      const product = await productService.createProduct(ownerId, req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: 'Unable to create product' });
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const filters = {
        minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
        maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
        search: req.query.search as string | undefined
      };
      const products = await productService.getProducts(filters);
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: 'Unable to fetch products' });
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.id);
      const product = await productService.getProduct(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: 'Unable to fetch product' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.id);
      const ownerId = req.user!.id;
      const product = await productService.updateProduct(productId, ownerId, req.body);
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: 'Unable to update product' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.id);
      const ownerId = req.user!.id;
      await productService.deleteProduct(productId, ownerId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: 'Unable to delete product' });
    }
  }
}