import { Request, Response, NextFunction } from 'express'
import { User } from '../@types'
import config from '../config'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const jwtSecret: string = config.secret.jwtSecret as string
const jwtExpire: string = config.secret.jwtExpire as string

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token = ''
    const authoriazationHeader = req.headers.authorization
    if (authoriazationHeader && authoriazationHeader.startsWith('Bearer')) {
      token = authoriazationHeader.split(' ')[1]
    }
    if (!token) {
      throw new Error('You\re not authorized to access this page')
    }
    if (req.isAuthenticated()){
      req.user = req.user as User
      req.session!.jwt = token
      return next()
    }
    const decoded = jwt.verify(token, jwtSecret)
    req.body.id = typeof decoded === 'string' ? decoded : decoded.id
    next()
  } catch (error) {
    res.status(401)
    next(error)
  }
}
