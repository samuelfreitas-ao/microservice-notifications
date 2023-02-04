import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });

    return {
      notification,
    };
  }
}
