import prisma from '../db'
import { Request, Response } from 'express'

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const addUser = async (req: Request, res: Response) => {
  const { id, email, username, password } = req.body
  try {
    const newUser = await prisma.user.create({
      data: {
        id,
        email,
        username,
        password,
      },
    })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}
