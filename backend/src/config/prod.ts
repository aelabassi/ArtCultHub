import * as dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  secret: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXP,
    dbUrl: process.env.MONGO_URL_PP,
  },
}