import { Comment } from "../../domain/entities/Comment";
import { CommentRepository } from "../../domain/repositories/CommentRepository";

export class InMemoryCommentRepository implements CommentRepository {
  private comments: Comment[] = [];

  async save(comment: Comment): Promise<Comment> {
    this.comments.push(comment);
    return comment;
  }

  async findAll(): Promise<Comment[]> {
    return [...this.comments];
  }
}