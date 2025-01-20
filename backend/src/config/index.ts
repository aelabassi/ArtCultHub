import merge from 'lodash.merge';
import {envSecrets, Secret} from '../@types';


process.env.NODE_ENV = process.env.NODE_ENV || 'development' || "testing"
const stage = process.env.STAGE || 'dev'
let envConfig

if (stage === 'prod') {
  envConfig = require('./prod').default
} else if (stage === 'testing') {
  envConfig = require('./testing').default
} else {
  envConfig = require('./dev').default
}

export default merge<envSecrets, Secret>(
  {
    stage,
    nodeEnv: process.env.NODE_ENV,
    port: 3000,
    secret: {
      jwtSecret: process.env.JWT_SECRET,
      jwtExpire: process.env.JWT_EXP,
      dbUrl: process.env.MONGO_URL,
      paypalClientId: process.env.PAYPAL_CLIENT_ID,
      paypalSecret: process.env.PAYPAL_CLIENT_SECRET,
    },
  },
  envConfig,
)
