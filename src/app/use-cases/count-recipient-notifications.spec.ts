import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-2' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-id-1' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
