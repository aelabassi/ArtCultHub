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
router.post('/signin', signIn)

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
