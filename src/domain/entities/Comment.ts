export class Comment {
  public readonly id: string;
  public readonly content: string;
  public readonly createdAt: Date;
  public status: 'pending' | 'approved' | 'rejected';

  constructor(props: { content: string; id?: string; createdAt?: Date; status?: 'pending' | 'approved' | 'rejected' }) {
    const { content, id, createdAt, status } = props;

    if (!content || !content.trim()) {
      throw new Error("Comment content cannot be empty.");
    }

    this.id = id ?? crypto.randomUUID();
    this.content = content;
    this.createdAt = createdAt ?? new Date();
    this.status = status ?? 'pending';
  }
}
