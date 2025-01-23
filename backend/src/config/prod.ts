import * as dotenv from 'dotenv'
dotenv.config()

export default {
  port: 5001,
  secret: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXP,
    dbUrl: process.env.MONGO_URL_PROD,
    paypalClientId: process.env.paypalClientId,
    paypalSecret: process.env.paypalSecret
  },
}