import { Notification } from '@app/entities/notification';
import { NotificationContent } from '@app/entities/notification-content';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    const notification1 = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'recipient-id-1',
    });

    const notification2 = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'recipient-id-2',
    });

    const notification3 = new Notification({
      category: 'social',
      content: new NotificationContent('Nova solicitação de amizade'),
      recipientId: 'recipient-id-1',
    });

    await notificationsRepository.create(notification1);
    await notificationsRepository.create(notification2);
    await notificationsRepository.create(notification3);

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
