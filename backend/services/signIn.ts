import { Strategy as LocalStrategy } from 'passport-local';
import {signIn} from '../controllers/userController';
import passport from 'passport';


passport.use('signIn', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, signIn))