// define the types of the environment variables that are used in the application.
export type Secret = {
    jwtSecret: string | undefined
    jwtExpire: string | undefined
    dbUrl: string | undefined
  }
  
  export type envSecrets = {
    stage: string
    nodeEnv: string | undefined
    port: number
    secret: Secret
  }

  // Models
  // User
  export type User = {
    id: string
    email: string
    username: string
    password: string
    isAdmin: boolean
  }
  
// Review
export type Review = {
    name: string
    rating: number
    comment: string
  }
// Product
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

