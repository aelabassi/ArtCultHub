import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport'
import { userProfile, updateProfile, signIn, signUp } from '../controllers/userController'
import { authMiddleware } from '../middlewares/auth'
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';
import bcrypt from 'bcrypt';
const router = Router()

// @desc Sign in user
// @route POST /api/signin
// access Public
router.post('/signin', (req, res, next) => {
  passport.authenticate('signIn', (err: any, user: any, info: any) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ message: info.message })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      return res.status(200).json({message: 'Logged in successfully'});
    })
  })(req, res, next)
}, signIn)

passport.use('signIn', new LocalStrategy({
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

// @desc Sign up user
// @route POST /api/signup
// access Public
router.post('/signup', signUp)

// @desc Fetch user profile ar update user profile
// @route GET and PUT /api/profile
// acccess Signed users - TDOD: to_do()

router
  .route('/profile')
  .get(authMiddleware, userProfile)
  .put(authMiddleware, updateProfile)

export default router
