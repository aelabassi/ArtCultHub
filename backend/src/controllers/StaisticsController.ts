import { Request, Response } from 'express';
import { StatisticsModel } from '../models/Statistics';
import { Statistics } from '../@types';

export class StatisticsController {
  async getStatistics(req: Request, res: Response) {
    try {
      const stats = await StatisticsModel.findOne().sort({ createdAt: -1 });
      
      if (!stats) {
        return res.status(404).json({ message: 'No statistics found' });
      }
      
      return res.status(200).json(stats);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching statistics', error });
    }
  }
// Update statistics
  async updateStatistics(req: Request, res: Response) {
    try {
      const updates: Partial<Statistics> = req.body;
      
      const stats = await StatisticsModel.findOne().sort({ createdAt: -1 });
      
      if (!stats) {
        const newStats = await StatisticsModel.create(updates);
        return res.status(201).json(newStats);
      }
      
      const updatedStats = await StatisticsModel.findByIdAndUpdate(
        stats._id,
        { $set: updates },
        { new: true }
      );
      
      return res.status(200).json(updatedStats);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating statistics', error });
    }
  }

  // Increment  statistics
  async incrementStatistics(req: Request, res: Response) {
    try {
      const { field, amount = 1 } = req.body;
      
      const validFields = [
        'totalArtworkSold',
        'totalArtworkCanceled',
        'totalArtworkPending',
        'totalArtworkDelivered',
        'totalEarnings'
      ];

      if (!validFields.includes(field)) {
        return res.status(400).json({ message: 'Invalid statistics field' });
      }

      const stats = await StatisticsModel.findOne().sort({ createdAt: -1 });
      
      if (!stats) {
        const initialData = { [field]: amount };
        const newStats = await StatisticsModel.create(initialData);
        return res.status(201).json(newStats);
      }

      const updatedStats = await StatisticsModel.findByIdAndUpdate(
        stats._id,
        { $inc: { [field]: amount } },
        { new: true }
      );

      return res.status(200).json(updatedStats);
    } catch (error) {
      return res.status(500).json({ message: 'Error incrementing statistics', error });
    }
  }
}