import { Module, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { AdminProductsController } from './admin/admin-products.controller';
import { AdminProductsService } from './admin/admin-products.service';
import { ProductsController } from './public/products.controller';
import { ProductsService } from './public/products.service';

@Module({
  controllers: [AdminProductsController, ProductsController],
  providers: [AdminProductsService, ProductsService],
})
export class ProductsModule implements OnModuleInit {
  constructor(
    private PrismaService: PrismaService,
    private productsService: AdminProductsService,
  ) {}

  async onModuleInit() {
    const products = new Array(10).fill(0).map((_, index) => index + 1);

    await this.PrismaService.product.deleteMany();

    for (const product of products) {
      await this.productsService.create({
        name: `Product ${product}`,
        slug: `product-${product}`,
        description: `Description of product ${product}`,
        price: product * 100,
      });
    }
  }
}
