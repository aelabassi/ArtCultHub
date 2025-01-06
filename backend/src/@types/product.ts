import { User } from './user'
import { Review } from './review'
export type Product = {
  user: User
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  rating: number
  numReviews: number
  reviews: Review[]
}
