import paypal from 'paypal-rest-sdk';
import * as dotenv from 'dotenv';
import config from './';

dotenv.config();

paypal.configure({
    mode: 'sandbox',
    client_id: config.secret.paypalClientId as string,
    client_secret: config.secret.paypalSecret as string
});