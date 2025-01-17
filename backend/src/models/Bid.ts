import { Schema, model } from 'mongoose';
import { Bid } from '../@types';


export const BidModel = model<Bid>(
    'Bid',
    new Schema({
    item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    bidder: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['active', 'won', 'lost'],
      default: 'active'
    }
  })
)
  