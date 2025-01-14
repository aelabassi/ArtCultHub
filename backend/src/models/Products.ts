import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    minimumBid: { type: Number, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: {
      type: String,
      enum: ['Art', 'Culture', 'Dresses', 'Virtual World', 'Trending Cards'],
      required: true
    },
    itemType: { type: String, enum: ['single', 'bundle'], required: true },
    imageUrl: { type: String, required: true },
    startDate: { type: Date, required: true },
    expirationDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ['active', 'sold', 'expired'],
      default: 'active'
    }
  });