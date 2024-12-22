import merge from 'lodash/merge';
import {envSecrets, Secret} from '../types/config';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'dev';
let envConfig;

if (stage === 'prod') {
  envConfig = require('./prod').default;
}else if (stage === 'testing') {
  envConfig = require('./testing').default;
}else{
    envConfig = require('./dev').default;
}


export default merge<envSecrets, Secret>({
    stage,
    port: 3000,
    secrets: {
        jwtSecret: process.env.JWT_SECRET,
        jwtExp: process.env.JWT_EXP,
        dbUrl: process.env.DATABASE_URL,
    }
}, envConfig);

