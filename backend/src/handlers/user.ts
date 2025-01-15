import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../modules/user'
import { signUpSchema, signInSchema } from '../middlewares/validate'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error } = signUpSchema(req.body)
    if (error) {
      throw error
    }
    const { username, email, password } = req.body
    console.log(req.body)
    if (await UserModel.findOne({ email })) {
      throw new Error('User already exists')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await new UserModel({
      username,
      email,
      password: hashedPassword,
    }).save()
    if (user) {
      res.status(201).json({
        token: jwt.sign({ id: user.id }, config.secret.jwtSecret as string),
        id: user.id,
        username: username,
        email: email,
        isAdmin: user.isAdmin,
      })
    } else {
      throw new Error('Invalid user data')
    }
  } catch (error: any) {
    res.status(401).json({ message: error.message })
    next(error)
  }
}

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { error } = signInSchema(req.body)
    if (error) {
      throw error
    }
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password')
    }
    const { id, username, isAdmin } = user
    res.json({
      token: jwt.sign({ id }, config.secret.jwtSecret as string),
      id,
      username,
      email,
      isAdmin,
    })
  } catch (error: any) {
    res.status(401).json({ message: error.message })
    next(error)
  }
}

export const userProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.body.id
    const user = await UserModel.findById(id)
    if (!user) {
      throw new Error('User not found')
    }
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } catch (error: any) {
    res.status(401).json({ message: error.message })
    next(error)
  }
}

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.body.id
    const user = await UserModel.findById(id)
    if (!user) {
      throw new Error('User not found')
    }
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10)
    }
    const { username, email, isAdmin } = await user.save()
    res.json({
      id: user._id,
      username,
      email,
      isAdmin,
    })
  } catch (error) {
    res.status(401)
    next(error)
  }
}
