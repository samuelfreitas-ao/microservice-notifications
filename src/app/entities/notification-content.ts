export class NotificationContent {
  constructor(private readonly content: string) {
    const isContentLengthValid = this.validadeContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
  }

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length > 5 && content.length < 240;
  }
}
