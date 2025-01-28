import { Request, Response } from 'express';
import { BidModel } from '../models/Bid';
import { ProductModel } from '../models/product';

export const bidController = {
  placeBid: async (req: Request, res: Response) => {
    try {
      const { productId, amount } = req.body;

      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const userId = req.user;


      const product = await ProductModel.findOne({user: userId});

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      if (amount <= product.currentBid) {
        return res.status(400).json({ message: 'Bid must be higher than current bid' });
      }

      const bid = await new BidModel({
        item: product._id,
        bidder: userId,
        amount
      }).save();

      await ProductModel.findByIdAndUpdate(productId, { currentBid: amount });

      res.status(201).json(bid);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error placing bid' });
    }
  },

  getBidHistory: async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const bids = await BidModel.find({ product: productId })
        .populate('bidder', 'username')
        .sort({ amount: -1 });

      res.json(bids);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bid history' });
    }
  }
};