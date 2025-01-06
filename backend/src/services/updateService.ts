// src/services/updateService.ts
import prisma from '../utils/prisma';
import { UpdateInput } from '../types';

export class UpdateService {
  async createUpdate(productId: number, data: UpdateInput) {
    return prisma.update.create({
      data: {
        ...data,
        product: {
          connect: { id: productId }
        }
      },
      include: {
        product: true
      }
    });
  }

  async getUpdates(productId: number) {
    return prisma.update.findMany({
      where: {
        productId
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        product: true
      }
    });
  }

  async updateStatus(id: number, status: 'DEPRECATED' | 'IN_PROGRESS' | 'SHIPPED') {
    return prisma.update.update({
      where: { id },
      data: { status }
    });
  }
}