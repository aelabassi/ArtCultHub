// src/services/commentService.ts
import prisma from '../utils/prisma';
import { CommentInput } from '../types';

export class CommentService {
  async createComment(userId: number, data: CommentInput) {
    return prisma.comment.create({
      data: {
        content: data.content,
        product: {
          connect: { id: data.productId }
        },
        user: {
          connect: { id: userId }
        }
      },
      include: {
        user: true,
        product: true
      }
    });
  }

  async getProductComments(productId: number) {
    return prisma.comment.findMany({
      where: {
        productId
      },
      include: {
        user: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  async deleteComment(id: number, userId: number) {
    return prisma.comment.delete({
      where: {
        id,
        userId // Ensure only comment author can delete
      }
    });
  }
}