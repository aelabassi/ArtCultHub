export default {
  port: 5000,
  secret: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXP,
    dbUrl: process.env.MONGO_URL,
  }
}
