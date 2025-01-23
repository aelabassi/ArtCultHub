import { Request, Response, NextFunction } from 'express'
import config from '../config'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const jwtSecret: string = config.secret.jwtSecret as string
const jwtExpire: string = config.secret.jwtExpire as string

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        isAdmin: boolean;
      }
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
    const decoded = jwt.verify(token, jwtSecret)
    req.body.id = typeof decoded === 'string' ? decoded : decoded.id
    next()
  } catch (error) {
    res.status(401)
    next(error)
  }
}
