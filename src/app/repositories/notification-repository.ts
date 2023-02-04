import { Notification } from '@app/entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}
