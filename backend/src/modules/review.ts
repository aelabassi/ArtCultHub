import { model, Schema } from 'mongoose'
import { Review } from '../@types'

export const RveiewSchema = new Schema<Review>(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
  },
  {
    timestamps: true,
  },
)

export const ReviewModel = model<Review>('Review', RveiewSchema)
