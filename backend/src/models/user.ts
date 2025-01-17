import { Schema, model } from 'mongoose';
import { User } from '../@types';

export const UserModel = model<User>(
  'User',
  new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    walletAddress: { type: String },
    profileImage: { type: String },
    totalEarnings: { type: Number, default: 0 },
    artworkSold: { type: Number, default: 0 },
    artworkCanceled: { type: Number, default: 0 },
    artworkPending: { type: Number, default: 0 },
    artworkDelivered: { type: Number, default: 0 },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }, {
    timestamps: true
  })
);