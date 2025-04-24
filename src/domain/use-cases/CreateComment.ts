import { Comment } from "../entities/Comment";
import { CommentRepository } from "../repositories/CommentRepository";

export class CreateComment {
  constructor(private readonly repo: CommentRepository) {}

  async execute(content: string): Promise<Comment> {
    const comment = new Comment({ content });
    await this.repo.save(comment);
    return comment;
  }
}
