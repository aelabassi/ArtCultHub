import { Request, Response, NextFunction } from 'express'
import { User } from '../@types'
import config from '../config'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const jwtSecret: string = config.secret!.jwtSecret as string
const jwtExpire: string = config.secret!.jwtExpire as string

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
      res.status(401).json({ message: 'Not authorized' })
    }
    
    const decoded = jwt.verify(token, jwtSecret)
    req.user = typeof decoded === 'string' ? decoded : decoded.id
    next()
  } catch (error) {
    res.status(401)
    next(error)
  }
}
