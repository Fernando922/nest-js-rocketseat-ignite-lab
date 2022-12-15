import { Controller, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { CreateNotificationsBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    console.log(body);

    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return { notification };
  }
}
