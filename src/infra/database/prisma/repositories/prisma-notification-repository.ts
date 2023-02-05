import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const data = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data,
    });
  }
}
