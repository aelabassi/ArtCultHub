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
    walletAddress: string
    profileImage: string
    totalEarnings: number
    artworkSold: number
    artworkCanceled: number
    artworkPending: number
    artworkDelivered: number
    followers: Types.ObjectId
  }
  

// Product
export type Product = {
  user: Types.ObjectId; 
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Art' | 'Illustration' | 'Music' | 'Culture' | 'Dresses'; 
  currentBid: number;
  endingIn: Date;
  likes: number;
  status: 'active' | 'sold' | 'canceled' | 'pending' | 'delivered'; 
  views: number;

 
}

