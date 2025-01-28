import * as dotenv from 'dotenv'
dotenv.config()

export default {
  stage: 'prod',
  port: process.env.PORT,
  host: process.env.HOST,
  secret: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXP,
    cookieKey: process.env.COOKIE_KEY,
    dbUrl: process.env.MONGO_URL_PP,
  },
}