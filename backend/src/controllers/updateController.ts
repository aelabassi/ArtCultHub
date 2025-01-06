// src/controllers/updateController.ts
import { Request, Response } from 'express';
import { UpdateService } from '../services/updateService';

const updateService = new UpdateService();

export class UpdateController {
  async createUpdate(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.productId);
      const update = await updateService.createUpdate(productId, req.body);
      res.status(201).json(update);
    } catch (error) {
      res.status(400).json({ error: 'Unable to create update' });
    }
  }

  async getUpdates(req: Request, res: Response) {
    try {
      const productId = parseInt(req.params.productId);
      const updates = await updateService.getUpdates(productId);
      res.json(updates);
    } catch (error) {
      res.status(400).json({ error: 'Unable to fetch updates' });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const updateId = parseInt(req.params.id);
      const { status } = req.body;
      const update = await updateService.updateStatus(updateId, status);
      res.json(update);
    } catch (error) {
      res.status(400).json({ error: 'Unable to update status' });
    }
  }
}