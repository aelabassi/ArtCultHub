// src/services/productService.ts
import prisma from '../utils/prisma';
import { ProductInput } from '../types';

export class ProductService {
  async createProduct(ownerId: number, data: ProductInput) {
    return prisma.product.create({
      data: {
        ...data,
        owner: {
          connect: { id: ownerId }
        }
      },
      include: {
        owner: true,
        comments: true
      }
    });
  }

  async getProducts(filters?: { 
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }) {
    return prisma.product.findMany({
      where: {
        AND: [
          filters?.minPrice ? { price: { gte: filters.minPrice } } : {},
          filters?.maxPrice ? { price: { lte: filters.maxPrice } } : {},
          filters?.search ? {
            OR: [
              { name: { contains: filters.search, mode: 'insensitive' } },
              { description: { contains: filters.search, mode: 'insensitive' } }
            ]
          } : {}
        ]
      },
      include: {
        owner: true,
        comments: true,
        updates: true
      }
    });
  }

  async getProduct(id: number) {
    return prisma.product.findUnique({
      where: { id },
      include: {
        owner: true,
        comments: {
          include: {
            user: true
          }
        },
        updates: true
      }
    });
  }

  async updateProduct(id: number, ownerId: number, data: Partial<ProductInput>) {
    return prisma.product.update({
      where: {
        id,
        ownerId // Ensure only owner can update
      },
      data,
      include: {
        owner: true,
        comments: true
      }
    });
  }

  async deleteProduct(id: number, ownerId: number) {
    return prisma.product.delete({
      where: {
        id,
        ownerId // Ensure only owner can delete
      }
    });
  }
}