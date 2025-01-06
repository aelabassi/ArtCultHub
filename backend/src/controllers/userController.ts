import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;
      const result = await userService.createUser({ email, username, password });
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: 'Unable to create user' });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.id);
      const user = await userService.getUser(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Unable to get user' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const userId = req.user!.id;
      const user = await userService.updateUser(userId, req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Unable to update user' });
    }
  }

  async followUser(req: Request, res: Response) {
    try {
      const followerId = req.user!.id;
      const followingId = parseInt(req.params.id);
      const result = await userService.followUser(followerId, followingId);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: 'Unable to follow user' });
    }
  }
}