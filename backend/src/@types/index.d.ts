// define the types of the environment variables that are used in the application.
export type Secret = {
  jwtSecret: string | undefined
  jwtExpire: string | undefined
  cookieKey: string | undefined
  dbUrl: string | undefined
}

export type envSecrets = {
  stage: string
  nodeEnv: string | undefined
  port: number
  host: string
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
  profileImage:  string
  totalEarnings: number
  artworkSold: number
  artworkCanceled: number
  artworkPending: number
  artworkDelivered:  number
  followers: Types.ObjectId
}

// Product

export type Product = {
  title: string;
  name: string;
  description: string;
  price: number;
  minimumBid: number;
  creator: Types.ObjectId; 
  category: 'Art' | 'Culture' | 'Dresses' | 'Virtual World' | 'Trending Cards';
  itemType: 'single' | 'bundle';
  imageUrl:string
  startDate: Date;
  expirationDate: Date;
  status: 'active' | 'sold' | 'expired';
   
};

//Bid
export type Bid = {
  item: Types.ObjectId
  bidder: Types.ObjectId
  amount: number
  timestamp:  Date
  status: 'active'| 'won' | 'lost'

}

//Statistics
export type Statistics = {
  totalArtworkSold: number;
  totalArtworkCanceled: number;
  totalArtworkPending: number;
  totalArtworkDelivered: number;
  totalEarnings: number;
}