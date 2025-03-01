import { Schema, model } from 'mongoose';
import { Statistics } from '../@types';


export const StatisticsModel = model<Statistics>(
  'Statistics',
  new Schema({
    totalArtworkSold: { type: Number, default: 0 },
    totalArtworkCanceled: { type: Number, default: 0 },
    totalArtworkPending: { type: Number, default: 0 },
    totalArtworkDelivered: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 }
  }, {
    timestamps: true
  })
);