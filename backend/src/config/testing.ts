import * as dotenv from 'dotenv'
dotenv.config()

export default {
  stage: 'testing',
  port: '5000',
  host: 'http://localhost',
  secret: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXP,
    cookieKey: process.env.COOKIE_KEY,
    dbUrl: process.env.MONGO_URL_DEV,
  },
}