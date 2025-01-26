import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';
import bcrypt from 'bcrypt';
import passport from 'passport';


passport.use('signInStart', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email: string, password: string, cb: any) => {
  try {
    const user = await UserModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return cb(null, false, { message: 'Invalid email or password' });
    }
    return cb(null, user, { message: 'Logged in successfully' });
  }catch(err){
    return cb(err)
  }


}))