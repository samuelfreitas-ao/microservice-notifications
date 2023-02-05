import { Notification, NotificationProps } from '@app/entities/notification';
import { NotificationContent } from '@app/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new NotificationContent('Nova solicitação de amizade'),
    recipientId: 'recipient-id',
    ...override,
  });
}
