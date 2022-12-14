import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationsBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  //inversao de dependencia, recebe dependencias pelo construtor
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    console.log(body);

    const { recipientId, content, category } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
