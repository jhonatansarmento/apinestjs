import { Module, OnModuleInit } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRoles } from './roles/roles';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements OnModuleInit {
  constructor(private PrismaService: PrismaService) {}

  async onModuleInit() {
    const costumerUser = await this.PrismaService.user.findFirst({
      where: {
        email: 'admin@admin.com',
      },
    });

    if (!costumerUser) {
      await this.PrismaService.user.create({
        data: {
          email: 'costumer@user.com',
          name: 'Costumer User',
          password: bcrypt.hashSync('secret', 10),
          role: UserRoles.Costumer,
        },
      });
    }

    const adminUser = await this.PrismaService.user.findFirst({
      where: {
        email: 'admin@user.com',
      },
    });

    if (!adminUser) {
      await this.PrismaService.user.create({
        data: {
          email: 'admin@user.com',
          name: 'Admin User',
          password: bcrypt.hashSync('secret', 10),
          role: UserRoles.Admin,
        },
      });
    }
  }
}
