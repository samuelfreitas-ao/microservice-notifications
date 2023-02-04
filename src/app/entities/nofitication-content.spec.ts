import { NotificationContent } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent(
      'Você tem uma solicitação de amizade.',
    );
    expect(content).toBeTruthy();
  });
});
