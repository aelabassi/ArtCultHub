import merge from 'lodash.merge';
import {envSecrets, Secret} from '../@types';
import devConfig from './dev';
import prodConfig from './prod';
import testingConfig from './testing';


process.env.NODE_ENV = process.env.NODE_ENV || 'development' || "testing"
const stage = process.env.STAGE || 'dev'
let envConfig: Partial<envSecrets>

if (stage === 'prod') {
  envConfig = prodConfig
} else if (stage === 'testing') {
  envConfig = testingConfig
} else {
  envConfig = devConfig
}

export default merge<Partial<envSecrets>, Partial<envSecrets>>(
  {
    stage,
    nodeEnv: process.env.NODE_ENV,
    port: '3000',
    host: 'http://localhost',
    secret: {
      jwtSecret: process.env.JWT_SECRET,
      jwtExpire: process.env.JWT_EXP,
      cookieKey: process.env.COOKIE_KEY,
      dbUrl: process.env.MONGO_URL,
    },
  },
  envConfig,
)
