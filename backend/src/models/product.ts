import { Schema, model } from 'mongoose';
import { Product } from '../@types';

export const ProductModel = model<Product>(
  'Product',
  new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { 
      type: String, 
      required: true,
      enum: ['Art', 'Illustration', 'Music', 'Culture', 'Dresses Indians', 'Silk Threads', 'Dishes Chamaily']
    },
    currentBid: { type: Number, default: 0 },
    endingIn: { type: Date, required: true },
    likes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['active', 'sold', 'canceled', 'pending', 'delivered'],
      default: 'active'
    },
    views: { type: Number, default: 0 }
  }, {
    timestamps: true
  })
);