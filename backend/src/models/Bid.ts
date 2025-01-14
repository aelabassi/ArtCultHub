import mongoose from 'mongoose';
const bidSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    bidder: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['active', 'won', 'lost'],
      default: 'active'
    }
  });
  
  export const Bid = mongoose.model('Bid', bidSchema);