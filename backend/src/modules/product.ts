import { Schema, model } from 'mongoose'
import { Product } from '../@types'
import { RveiewSchema } from './review'

export const ProductModel = model<Product>(
  'Product',
  new Schema<Product>(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      imageUrl: { type: String, required: true },
      category: { type: String, required: true },
      rating: { type: Number, required: true, default: 0 },
      numReviews: { type: Number, required: true, default: 0 },
      reviews: { type: [RveiewSchema], default: [] },
    },
    {
      timestamps: true,
    },
  ),
)
