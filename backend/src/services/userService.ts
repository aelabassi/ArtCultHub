import prisma from '../utils/prisma';
import { hashPassword } from '../utils/passwords';
import jwt from 'jsonwebtoken';

export class UserService {
  async createUser(data: { email: string; username: string; password: string }) {
    const hashedPassword = await hashPassword(data.password);
    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
    return { user, token };
  }

  async getUser(id: number) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        products: true,
        comments: true,
        followers: true,
        following: true
      }
    });
  }

  async updateUser(id: number, data: Partial<{ email: string; username: string; description: string }>) {
    return prisma.user.update({
      where: { id },
      data
    });
  }

  async followUser(followerId: number, followingId: number) {
    return prisma.user.update({
      where: { id: followerId },
      data: {
        following: {
          connect: { id: followingId }
        }
      }
    });
  }
}