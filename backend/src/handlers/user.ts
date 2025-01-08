import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../modules/user'
import bcrypt from 'bcrypt'
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
      id: user._id,
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
